// // //
import supabase from "../database/supabase";

export async function getCabins() {
  const { data: cabins, error } = await supabase.from("Cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins couldn't be loaded!");
  }

  return cabins;
}

export async function createEditCabin(newCabin, id) {
  const hasImagePath = newCabin.image?.startsWith?.(
    import.meta.env.VITE_SUPABASE_URL
  );

  const imageName = `${Date.now()}-${newCabin.image.name}`.replaceAll("/", "");
  const imagePath = hasImagePath
    ? newCabin.image
    : `${
        import.meta.env.VITE_SUPABASE_URL
      }/storage/v1/object/public/cabin-images//${imageName}`;

  // ⏺ 1) create/edit ----//
  let query = supabase.from("Cabins");

  // ⏺ A) create cabin if no edit
  if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);

  // ⏺ B) if edit
  if (id) query = query.update({ ...newCabin, image: imagePath }).eq("id", id);

  const { data: cabins, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("Cabin couldn't be created!");
  }

  // ⏺ 2) upload image ----//
  if (hasImagePath) return cabins;

  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  // ⏺ 3) delete the cabin if there was an error to uploading image ----//
  if (storageError) {
    await supabase.from("Cabins").delete().eq("id", cabins.id);
    console.error(storageError);
    throw new Error(
      "Cabin image couldn't be uploaded and cabin was not created!"
    );
  }

  return cabins;
}

export async function deleteCabin(id) {
  // ⏺ 1) get the cabin data to retrieve the image URL
  const { data: cabin, error: fetchError } = await supabase
    .from("Cabins")
    .select("image")
    .eq("id", id)
    .single();

  if (fetchError) {
    console.error(fetchError);
    throw new Error("Failed to fetch cabin data!");
  }

  // ⏺ 2) extract the image name from the URL
  const imageName = cabin.image?.split("/").pop();

  // ⏺ 3) delete the image from Supabase Storage
  if (imageName) {
    const { error: storageError } = await supabase.storage
      .from("cabin-images")
      .remove([imageName]);

    if (storageError) {
      console.error(storageError);
      throw new Error("Failed to delete the image from storage!");
    }
  }

  // ⏺ 4) finally delete the cabin from the database
  const { error: deleteError } = await supabase
    .from("Cabins")
    .delete()
    .eq("id", id);

  if (deleteError) {
    console.error(deleteError);
    throw new Error("Cabin couldn't be deleted!");
  }

  return cabin;
}

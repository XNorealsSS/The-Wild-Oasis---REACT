// // //
import supabase from "../database/supabase";

export async function getSettings() {
  const { data: settings, error } = await supabase
    .from("Settings")
    .select("*")
    .single();

  if (error) {
    console.error(error);
    throw new Error("Settings could not be loaded!");
  }

  return settings;
}

export async function updateSetting(newSetting) {
  const { data: settings, error } = await supabase
    .from("Settings")
    .update(newSetting)
    .eq("id", 1)
    .single();

  if (error) {
    console.error(error);
    throw new Error("Settings could not be updated!");
  }

  return settings;
}

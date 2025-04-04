// // //
import supabase from "../database/supabase";

export async function signup({ fullName, email, password }) {
  // https://supabase.com/docs/reference/javascript/auth-signup, always read docs
  const { data: signupData, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
        avatar: "",
      },
    },
  });

  if (error) throw new Error(error.message);

  return signupData;
}

export async function login({ email, password }) {
  // its coming from supabase full note here..........
  const { data: loginData, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  await supabase.auth.setSession(loginData.session);

  // console.log(loginData);
  return loginData;
}

export async function getCurrentUser() {
  // note here for all method
  const { data: session } = await supabase.auth.getSession();
  // console.log(session);

  if (!session.session) return null;

  // i take cuurent user form supabase for better security
  const { data: currentUserData, error } = await supabase.auth.getUser();
  // console.log(currentUserData);

  if (error) throw new Error(error.message);

  return currentUserData?.user;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();

  if (error) throw new Error(error.message);
}

export async function updateCurrentUser({ password, fullName, avatar }) {
  // ⏺ 1) update password or fullname
  // note
  let updateData;
  if (password) updateData = { password };
  if (fullName)
    updateData = {
      data: {
        fullName,
      },
    };
  const { data: updateUserData, error } = await supabase.auth.updateUser(
    updateData
  );

  if (error) throw new Error(error.message);
  if (!avatar) return updateUserData;

  // ⏺ 2) upload the avatar image
  const fileName = `avatar-${updateUserData.user.id}-${new Date()}`;
  const { error: storageError } = await supabase.storage
    .from("avatars")
    .upload(fileName, avatar);

  if (storageError) throw new Error(storageError.message);

  // ⏺ 3) update avatar in the user
  const { data: updatedUser, error: updatedError } =
    await supabase.auth.updateUser({
      data: {
        avatar: `${
          import.meta.env.VITE_SUPABASE_URL
        }/storage/v1/object/public/avatars//${fileName}`,
      },
    });

  if (updatedError) throw new Error(updatedError.message);

  return updatedUser;
}

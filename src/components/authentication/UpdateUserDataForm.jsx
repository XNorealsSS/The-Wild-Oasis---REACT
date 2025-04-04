// // //
import { useState } from "react";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useUser } from "../../hooks/authentication/useUser";
import { useUpdateUser } from "../../hooks/authentication/useUpdateUser";

export default function UpdateUserDataForm() {
  // We don't need the loading state, and can immediately use the user data, because we know that it has already been loaded at this point
  const {
    currentUser: {
      email,
      user_metadata: { fullName: currentFullName },
    },
  } = useUser();

  const { updateUser, isUpdating } = useUpdateUser();

  const [fullName, setFullName] = useState(currentFullName);
  const [avatar, setAvatar] = useState(null);

  function handleSubmit() {
    if (!fullName) return;
    updateUser(
      { fullName, avatar },
      {
        onSuccess: () => {
          setAvatar(null);
        },
      }
    );
  }

  return (
    <Form
      onSubmit={handleSubmit}
      className="w-full! md:w-[90%]! xl:w-[60%]! border-2! shadow border-[var(--color-grey-300)]!  shadow-gray-400"
    >
      <FormRow label="Email address">
        <Input value={email} disabled className="w-full!" />
      </FormRow>

      <FormRow label="Full name">
        <Input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          id="fullName"
          className="w-full!"
          disabled={isUpdating}
        />
      </FormRow>

      <FormRow label="Avatar image">
        <FileInput
          id="avatar"
          accept="image/*"
          onChange={(e) => setAvatar(e.target.files[0])}
          className="w-full!"
          disabled={isUpdating}
        />
      </FormRow>

      <div className="flex justify-end mt-10!">
        <FormRow>
          <Button disabled={isUpdating}>Update account</Button>
        </FormRow>
      </div>
    </Form>
  );
}

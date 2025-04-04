// // //
import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useUpdateUser } from "../../hooks/authentication/useUpdateUser";

export default function UpdatePasswordForm() {
  const { register, handleSubmit, formState, getValues, reset } = useForm();
  const { errors } = formState;

  const { updateUser, isUpdating } = useUpdateUser();

  function onSubmit({ password }) {
    updateUser({ password }, { onSuccess: reset });
  }

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full! md:w-[90%]! xl:w-[60%]! border-2! shadow border-[var(--color-grey-300)]! shadow-gray-400"
    >
      <FormRow
        label="New Password (min 8 chars)"
        error={errors?.password?.message}
      >
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          disabled={isUpdating}
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Password needs a minimum of 8 characters",
            },
          })}
          className="w-full!"
        />
      </FormRow>

      <FormRow
        label="Confirm password"
        error={errors?.passwordConfirm?.message}
      >
        <Input
          type="password"
          autoComplete="new-password"
          id="passwordConfirm"
          disabled={isUpdating}
          {...register("passwordConfirm", {
            required: "This field is required",
            validate: (value) =>
              getValues().password === value || "Passwords need to match",
          })}
          className="w-full!"
        />
      </FormRow>

      {/* ⏺ REAL */}
      {/* <div className="flex justify-end mt-10!">
        <FormRow>
          <Button disabled={isUpdating}>Update password</Button>
        </FormRow>
      </div> */}

      {/* ⏺ TEST */}
      <div className="flex justify-end mt-10!">
        <FormRow>
          <Button disabled>Update password</Button>
        </FormRow>
      </div>
    </Form>
  );
}

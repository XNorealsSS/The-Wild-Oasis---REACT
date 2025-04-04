// // //
import { useSignup } from "../../hooks/authentication/useSignup";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useForm } from "react-hook-form";

export default function SignupForm() {
  // console.log(useForm());
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;
  const { signup, isPending } = useSignup();

  function onSubmit({ fullName, email, password }) {
    signup(
      { fullName, email, password },
      {
        onSettled: reset,
      }
    );
  }

  return (
    <Form
      className="w-full! md:w-[90%]! xl:w-[60%]! border-2! shadow shadow-gray-400 border-[var(--color-grey-300)]!"
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormRow label="Full name" error={errors?.fullName?.message}>
        <Input
          type="text"
          id="fullName"
          disabled={isPending}
          className="w-full!"
          {...register("fullName", { required: "This field is required!" })}
        />
      </FormRow>

      <FormRow label="Email address" error={errors?.email?.message}>
        <Input
          type="email"
          id="email"
          disabled={isPending}
          className="w-full!"
          {...register("email", {
            required: "This field is required!",
            pattern: {
              // pattern note
              // ⏺ Email regex: /\S+@\S+\.\S+/
              value: /\S+@\S+\.\S+/,
              message: "Please provide a valid email address!",
            },
          })}
        />
      </FormRow>

      <FormRow
        label="Password (min 8 characters)"
        error={errors?.password?.message}
      >
        <Input
          type="password"
          id="password"
          disabled={isPending}
          className="w-full!"
          {...register("password", {
            required: "This field is required!",
            minLength: {
              value: 8,
              message: "Password needs a minimum of 8 characters!",
            },
          })}
        />
      </FormRow>

      <FormRow
        label="Confirm password"
        error={errors?.passwordConfirm?.message}
      >
        <Input
          type="password"
          id="passwordConfirm"
          disabled={isPending}
          className="w-full!"
          {...register("passwordConfirm", {
            required: "This field is required!",
            validate: (value) =>
              value === getValues().password || `Passwords need to match!`,
          })}
        />
      </FormRow>

      <div className="flex justify-end mt-10!">
        <FormRow>
          <Button disabled={isPending}>Create new user</Button>
        </FormRow>
      </div>
    </Form>
  );
}

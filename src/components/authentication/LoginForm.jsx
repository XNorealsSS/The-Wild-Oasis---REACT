// // //
import { useState } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import FormRowVertical from "../../ui/FormRowVertical";
import { useLogin } from "../../hooks/authentication/useLogin";
import SpinnerMini from "../../ui/SpinnerMini";

export default function LoginForm() {
  const [email, setEmail] = useState("mdjoy.artcell@gmail.com");
  const [password, setPassword] = useState("12345678");
  const { login, isPending } = useLogin();

  function handleSubmit() {
    if (!email || !password) return;
    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      }
    );
  }

  return (
    <Form
      onSubmit={handleSubmit}
      className="bg-[var(--color-grey-100)]! shadow! shadow-gray-400!"
    >
      <FormRowVertical label="Email address">
        <Input
          type="email"
          id="email"
          autoComplete="username" // ⏺ This makes this form better for password managers
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full!"
          disabled={isPending}
        />
      </FormRowVertical>

      <FormRowVertical label="Password">
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full!"
          disabled={isPending}
        />
      </FormRowVertical>

      <FormRowVertical>
        <Button size="large" disabled={isPending}>
          {!isPending ? "Login" : <SpinnerMini />}
        </Button>
      </FormRowVertical>
    </Form>
  );
}

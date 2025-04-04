// // //
import styled from "styled-components";
import LoginForm from "../components/authentication/LoginForm";
import Logo from "../ui/Logo";
import Heading from "../ui/Heading";

const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: minmax(20rem, 48rem);
  align-content: center;
  justify-content: center;
  place-items: center;
  background-color: var(--color-grey-100);
  padding: 2rem;
  gap: 2rem;
`;

export default function Login() {
  return (
    <LoginLayout>
      <Logo />
      <Heading as="h4">Log in to your account</Heading>

      <LoginForm />
    </LoginLayout>
  );
}

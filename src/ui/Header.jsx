// // //
import styled from "styled-components";
import HeaderMenu from "./HeaderMenu";
import UserAvatar from "../components/authentication/UserAvatar";

const StyledHeader = styled.header`
  background-color: var(--color-grey-200);
  padding: 1.2rem 4.8rem;
  border-bottom: 2px solid var(--color-grey-300);
  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 768px) {
    padding: 1.8rem 4.8rem;
  }

  @media (max-width: 500px) {
    padding: 1.8rem 2.8rem;
  }

  @media (max-width: 425px) {
    padding: 1.8rem 1.6rem;
  }
`;

export default function Header() {
  return (
    <StyledHeader>
      <UserAvatar />
      <HeaderMenu />
    </StyledHeader>
  );
}

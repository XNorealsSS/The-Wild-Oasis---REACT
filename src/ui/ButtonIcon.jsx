// // //
import styled from "styled-components";

const ButtonIcon = styled.button`
  padding: 0.8rem;
  transition: all 0.25s;
  background-color: var(--color-grey-200);
  border-radius: 999px;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.2rem;
    height: 2.2rem;
    color: var(--color-brand-500);
    stroke-width: 1.2;
  }

  @media (max-width: 425px) {
    & svg {
      width: 1.9rem;
      height: 1.9rem;
    }
  }
`;

export default ButtonIcon;

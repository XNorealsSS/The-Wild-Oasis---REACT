// // //
import styled from "styled-components";

const Input = styled.input`
  border: 1.6px solid var(--color-grey-300);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  padding: 0.8rem 1.2rem;
  box-shadow: var(--shadow-sm);
  width: 70%;

  &:focus {
    border-color: #a2a2a2;
    outline: none;
  }

  @media (max-width: 550px) {
    width: 100%;
  }
`;

export default Input;

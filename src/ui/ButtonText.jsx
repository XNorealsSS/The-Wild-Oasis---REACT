// // //
import styled from "styled-components";

const ButtonText = styled.button`
  color: var(--color-brand-500);
  font-weight: 500;
  text-align: center;
  transition: all 0.3s;
  background: none;
  padding: 0.2rem 0.6rem;
  border: none;
  border-radius: var(--border-radius-sm);

  &:hover,
  &:active {
    color: #5c7ae5;
    background-color: var(--color-grey-300);
  }
`;

export default ButtonText;

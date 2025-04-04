// // //
import styled from "styled-components";

const Textarea = styled.textarea`
  padding: 0.8rem 1.2rem;
  border: 1.6px solid var(--color-grey-300);
  border-radius: 5px;
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-sm);
  width: 70%;
  height: 8rem;

  &:focus {
    border-color: #a2a2a2;
    outline: none;
  }
`;

export default Textarea;

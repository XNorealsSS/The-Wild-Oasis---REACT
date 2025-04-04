// // //
import styled, { css } from "styled-components";

const StyledForm = styled.form`
  overflow: hidden;
  font-size: 1.4rem;

  ${(props) => {
    return (
      props.type === "regular" &&
      css`
        padding: 2.4rem 4rem;
        background-color: var(--color-grey-100);
        border: 1px solid var(--color-grey-100);
        border-radius: var(--border-radius-md);
      `
    );
  }}

  ${(props) => {
    return (
      props.type === "modal" &&
      css`
        height: min-content;
        width: 100%;
        padding: 2.4rem 2.6rem;
        background-color: var(--color-grey-100);
        border: 1px solid var(--color-grey-100);
        border-radius: var(--border-radius-md);

        @media (max-width: 425px) {
          padding: 1.4rem 1.6rem;
        }
      `
    );
  }}
`;

const Form = ({ type = "modal", children, onSubmit, className }) => {
  return (
    <StyledForm
      type={type}
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
      className={className}
    >
      {children}
    </StyledForm>
  );
};

export default Form;

// // //
import styled, { css } from "styled-components";

const sizes = {
  small: css`
    font-size: 1.2rem;
    padding: 0.6rem 0.7rem;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
    width: 100%;
  `,
  medium: css`
    font-size: 1.4rem;
    padding: 1.2rem 1.6rem;
    font-weight: 500;
  `,
  large: css`
    font-size: 1.6rem;
    padding: 1.2rem 2.4rem;
    font-weight: 500;
  `,
};

const variations = {
  primary: css`
    color: var(--color-brand-50);
    background-color: var(--color-brand-600);

    &:hover {
      background-color: var(--color-brand-800);
    }
  `,
  secondary: css`
    color: var(--color-grey-600);
    background-color: var(--color-grey-200);
    box-shadow: 1.4px 1.4px 0.8px rgba(0, 0, 0, 0.2) !important;

    &:hover {
      background-color: var(--color-grey-100);
    }
  `,
  danger: css`
    color: var(--color-red-100);
    background-color: var(--color-red-700);

    &:hover {
      background-color: var(--color-red-800);
    }
  `,
};

const ButtonStyles = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== "variations" && prop !== "sizes",
})`
  border: none;
  border-radius: var(--border-radius-md);
  transition: all 0.3s ease-in-out;

  ${(props) => {
    return sizes[props.sizes];
  }}

  ${(props) => {
    return variations[props.variations];
  }}
`;

const Button = ({
  variations = "primary",
  sizes = "medium",
  children,
  onClick,
  disabled,
}) => {
  return (
    <ButtonStyles
      variations={variations}
      sizes={sizes}
      onClick={onClick}
      disabled={disabled}
      className="shadow! shadow-gray-400! flex items-center justify-center"
    >
      {children}
    </ButtonStyles>
  );
};

export default Button;

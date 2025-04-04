// // //
import styled from "styled-components";

const StyledCheckbox = styled.div`
  display: flex;
  gap: 1.6rem;

  & input[type="checkbox"] {
    height: 2.4rem;
    width: 2.4rem;
    border-radius: 50%;
    border: 2px solid var(--color-brand-600);
    outline-offset: 2px;
    transform-origin: 0;
    accent-color: var(--color-brand-600);
    appearance: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: relative;
  }

  & input[type="checkbox"]::before {
    content: "";
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 50%;
    background-color: var(--color-brand-600);
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
  }

  & input[type="checkbox"]:checked::before {
    opacity: 1;
  }

  & input[type="checkbox"]:disabled {
    border-color: var(--color-grey-400);
    cursor: not-allowed;
  }

  & label {
    flex: 1;
    display: flex;
    align-items: center;
    gap: 0.8rem;
    cursor: pointer;
  }
`;

export default function Checkbox({
  checked,
  onChange,
  disabled = false,
  id,
  children,
}) {
  return (
    <StyledCheckbox className="">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      <label htmlFor={!disabled ? id : ""}>{children}</label>
    </StyledCheckbox>
  );
}

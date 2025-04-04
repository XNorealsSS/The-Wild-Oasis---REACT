// // //
import styled from "styled-components";

const StyledFormRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 24rem 1fr;
  gap: 2rem;
  padding: 1.2rem 0;

  @media (max-width: 650px) {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 0.6rem;
    margin-bottom: 1rem;
  }

  @media (max-width: 950px) {
    grid-template-columns: 20rem 1fr;
  }

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

const Label = styled.label`
  font-weight: 500;
  font-size: 1.8rem;

  @media (max-width: 950px) {
    font-size: 1.6rem;
  }
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: #e9e9e9;
  background-color: #ff0000c0;
  border-radius: 1.4rem;
  padding: 2px 8px;
  width: max-content;
`;

export default function FormRow({ label, error, children }) {
  return (
    <StyledFormRow className="relative">
      {label && <Label htmlFor={children.props.id}>{label}</Label>}
      {/* ⏺ mane children er id prop k nibo */}

      <div className="relative w-[100%]">
        {children}

        {error && (
          <Error className="shadow shadow-gray-300 absolute -bottom-[30%] left-10">
            {error}
          </Error>
        )}
      </div>
    </StyledFormRow>
  );
}

// // //
import styled from "styled-components";

const StyledSelect = styled.select`
  font-size: 1.4rem;
  padding: 0.9rem 1.2rem;
  width: fit-content;
  font-weight: 500;

  @media (max-width: 650px) {
    width: 74px;
  }
`;

export default function Select({ options, value, onChange, ...props }) {
  // console.log(props);

  return (
    <StyledSelect
      value={value}
      {...props}
      onChange={onChange}
      className="rounded-lg shadow shadow-gray-400 bg-[var(--color-grey-200)]!"
    >
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </StyledSelect>
  );
}

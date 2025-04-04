// // //
import styled from "styled-components";

const StyledDataItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  padding: 0.8rem 0;
`;

const Label = styled.span`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-weight: 600;

  & svg {
    width: 2.3rem;
    height: 2.3rem;
    color: var(--color-brand-600);
  }
`;

export default function DataItem({ icon, label, children, className }) {
  return (
    <StyledDataItem className={className}>
      <Label className="shadow shadow-gray-400 py-2! px-4! rounded-lg">
        {icon}
        <span>{label}</span>
      </Label>
      {children}
    </StyledDataItem>
  );
}

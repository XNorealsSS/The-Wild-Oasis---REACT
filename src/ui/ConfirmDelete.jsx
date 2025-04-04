// // //
import styled from "styled-components";
import Button from "./Button";
import Heading from "./Heading";

const StyledConfirmDelete = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  & p {
    color: var(--color-grey-500);
    margin-bottom: 1.2rem;
  }

  & div {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

export default function ConfirmDelete({ resourceName, onConfirm, disabled }) {
  return (
    <StyledConfirmDelete>
      <Heading
        as="h3"
        className="font-bold text-red-400 uppercase tracking-wide"
      >
        Delete {resourceName}
      </Heading>
      <p className="text-3xl text-wrap">
        Are you sure you want to delete this {resourceName} permanently? This
        action cannot be undone!
      </p>

      <div>
        <Button variations="danger" disabled={disabled} onClick={onConfirm}>
          Delete
        </Button>
      </div>
    </StyledConfirmDelete>
  );
}

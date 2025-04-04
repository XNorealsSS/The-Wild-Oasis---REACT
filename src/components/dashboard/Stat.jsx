// // //
import styled from "styled-components";

const StyledStat = styled.div`
  /* Box */
  background-color: var(--color-grey-100);
  border: 1px solid var(--color-grey-200);
  border-radius: var(--border-radius-md);

  padding: 1.6rem;
  display: grid;
  grid-template-columns: 6.4rem 1fr;
  grid-template-rows: auto auto;
  column-gap: 1.6rem;
  row-gap: 0.4rem;

  @media (max-width: 500px) {
    grid-template-columns: 5.4rem 1fr;
  }

  @media (max-width: 425px) {
    grid-template-columns: 4.4rem 1fr;
  }

  @media (max-width: 400px) {
    column-gap: 1.2rem;
  }
`;

const Icon = styled.div`
  grid-row: 1 / -1;
  aspect-ratio: 1;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  /* Make these dynamic, based on the received prop */
  background-color: var(--color-${(props) => props.color}-100);

  & svg {
    width: 3.2rem;
    height: 3.2rem;
    color: var(--color-${(props) => props.color}-700);
  }

  @media (max-width: 500px) {
    & svg {
      width: 2.8rem;
      height: 2.8rem;
      color: var(--color-${(props) => props.color}-700);
    }
  }
`;

const Title = styled.h5`
  align-self: end;
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 700;
  color: var(--color-grey-500);

  @media (max-width: 400px) {
    font-size: 1.1rem;
  }
`;

const Value = styled.p`
  font-size: 2.4rem;
  line-height: 1;
  font-weight: 500;
`;

export default function Stat({ icon, title, value, color }) {
  return (
    <StyledStat className="shadow shadow-gray-400">
      <Icon color={color} className="shadow shadow-gray-300">
        {icon}
      </Icon>
      <Title>{title}</Title>
      <Value className="max-[425px]:text-2xl! max-[950px]:text-3xl!">
        {value}
      </Value>
    </StyledStat>
  );
}

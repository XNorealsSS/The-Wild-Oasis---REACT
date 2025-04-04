// // //

import styled from "styled-components";
import { useMoveBack } from "../hooks/useMoveBack";
import Heading from "../ui/Heading";

const StyledPageNotFound = styled.main`
  height: 100vh;
  background-color: var(--color-grey-200);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4.8rem;
`;

const Box = styled.div`
  /* box */
  background-color: var(--color-grey-100);
  border: 2px solid var(--color-grey-200);
  border-radius: var(--border-radius-md);
  padding: 5rem 4rem;
  flex: 0 1 96rem;
  text-align: center;

  @media (max-width: 768px) {
    padding: 2.8rem;
  }

  @media (max-width: 550px) {
    padding: 2.8rem 2rem;
  }

  & h1 {
    margin-bottom: 3.2rem;
  }
`;

export default function PageNotFound() {
  const moveBack = useMoveBack();

  return (
    <StyledPageNotFound>
      <Box className="shadow! shadow-gray-400!">
        <Heading as="h1" className="text-4xl! md:text-5xl!">
          The page you are looking for could not be found 😢
        </Heading>
        <button
          onClick={moveBack}
          size="large"
          className="bg-[var(--color-grey-200)] shadow shadow-gray-400 rounded-lg hover:bg-[var(--color-grey-100)] py-4! px-8! transition-all"
        >
          &larr; Go back
        </button>
      </Box>
    </StyledPageNotFound>
  );
}

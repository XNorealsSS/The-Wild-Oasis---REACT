// // //
import styled from "styled-components";
import Heading from "./Heading";
import GlobalStyles from "../styles/GlobalStyles";
import Button from "./Button";

const StyledErrorFallback = styled.main`
  height: 100vh;
  background-color: var(--color-grey-100);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4.8rem;
`;

const Box = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  padding: 4.8rem;
  flex: 0 1 96rem;
  text-align: center;

  & h1 {
    margin-bottom: 1.6rem;
  }

  & p {
    margin-bottom: 3.2rem;
    color: var(--color-grey-500);
  }
`;
export default function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <>
      <GlobalStyles />
      <StyledErrorFallback>
        <Box className="shadow! shadow-gray-400!">
          <Heading as="h1">Something went wrong! 🧐</Heading>
          <p>{error.message}</p>
          <div className="flex justify-center">
            <Button sizes="large" onClick={resetErrorBoundary}>
              Try again
            </Button>
          </div>
        </Box>
      </StyledErrorFallback>
    </>
  );
}

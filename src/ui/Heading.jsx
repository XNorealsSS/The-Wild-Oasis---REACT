// // //
import styled, { css } from "styled-components";

const Heading = styled.h1`
  ${(props) => {
    return (
      (props.as === "h1" || props.type === "h1") &&
      css`
        font-size: 3.6rem;
        font-weight: 600;

        @media (max-width: 1060px) {
          font-size: 2.5rem;
        }

        @media (max-width: 450px) {
          font-size: 2.4rem;
        }

        @media (max-width: 375px) {
          font-size: 2.2rem;
        }
      `
    );
  }}

  ${(props) => {
    return (
      props.as === "h2" &&
      css`
        font-size: 2rem;
        font-weight: 400;
      `
    );
  }}

${(props) => {
    return (
      props.as === "h3" &&
      css`
        font-size: 2.2rem;
        font-weight: 400;
        color: var(--color-grey-600);

        @media (max-width: 768px) {
          font-size: 1.8rem;
        }
      `
    );
  }}



  ${(props) => {
    return (
      props.as === "h4" &&
      css`
        font-size: 3.2rem;
        font-weight: 600;
        text-align: center;
      `
    );
  }}
`;

export default Heading;

// // //
import styled, { css } from "styled-components";

const RowStyles = styled.div`
  display: flex;

  ${(props) => {
    return (
      props.type === "horizontal" &&
      css`
        justify-content: space-between;
        align-items: center;
      `
    );
  }}

  ${(props) => {
    return (
      props.type === "vertical" &&
      css`
        flex-direction: column;
        gap: 1.6rem;
      `
    );
  }}
`;

const Row = ({ type = "vertical", children }) => {
  return <RowStyles type={type}>{children}</RowStyles>;
};

export default Row;

// // //
import { createContext, useContext } from "react";
import styled from "styled-components";

const StyledTable = styled.div`
  border: 2px solid var(--color-grey-400);
  font-size: 1.4rem;
  background-color: var(--color-grey-100);
  border-radius: 1.2rem;
  overflow: hidden;
`;

const CommonRow = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.$columns};
  column-gap: 2.4rem;
  align-items: center;
  transition: none;
  justify-content: end;
`;

const StyledHeader = styled(CommonRow)`
  padding: 1.6rem 0rem;
  background-color: var(--color-grey-200);
  text-transform: uppercase;
  letter-spacing: 0.2px;
  font-weight: 700;
  color: var(--color-grey-600);
  justify-items: center;
`;

const StyledRow = styled(CommonRow)`
  justify-items: center;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-300);
  }
`;

const StyledBody = styled.section`
  margin: 0.4rem 0;
`;

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  padding: 1.2rem;
  background-color: var(--color-grey-200);

  /* ⏺ This will hide the footer when it contains no child elements. Possible thanks to the parent selector :has 🎉 */
  &:not(:has(*)) {
    display: none;
  }
`;

const Empty = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
  margin: 2.4rem;
`;

// ⏺ Compound Component Pattern
const TableContext = createContext();

export default function Table({ $columns, children, className }) {
  return (
    <TableContext.Provider value={{ $columns }}>
      <StyledTable role="table" className={className}>
        {children}
      </StyledTable>
    </TableContext.Provider>
  );
}

function Header({ children, className }) {
  const { $columns } = useContext(TableContext);
  return (
    <StyledHeader
      role="row"
      $columns={$columns}
      className={className}
      as="header"
    >
      {children}
    </StyledHeader>
  );
}

function Row({ children, className }) {
  const { $columns } = useContext(TableContext);
  return (
    <StyledRow role="row" $columns={$columns} className={className}>
      {children}
    </StyledRow>
  );
}

function Body({ data, render }) {
  if (!data.length) return <Empty>No data to show at the moment!</Empty>;
  return <StyledBody>{data.map(render)}</StyledBody>;
}

Table.Header = Header;
Table.Row = Row;
Table.Body = Body;
Table.Footer = Footer;

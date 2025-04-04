// // //
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CabinTable from "../components/cabins/CabinTable";
import AddCabin from "../components/cabins/AddCabin";
import CabinTableOperation from "../components/cabins/CabinTableOperations";

export default function Cabins() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <CabinTableOperation />
      </Row>

      <Row>
        <CabinTable />
        <AddCabin />
      </Row>
    </>
  );
}

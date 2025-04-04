// // //
import Row from "../ui/Row";
import Heading from "../ui/Heading";
import BookingTable from "../components/bookings/BookingTable";
import BookingTableOperations from "../components/bookings/BookingTableOperations";

export default function Bookings() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All bookings</Heading>
        <BookingTableOperations />
      </Row>

      <BookingTable />
    </>
  );
}

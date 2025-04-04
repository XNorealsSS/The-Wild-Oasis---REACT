// // //
import BookingRow from "./BookingRow";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import Empty from "../../ui/Empty";
import { useBookings } from "../../hooks/bookings/useBookings";
import Spinner from "../../ui/Spinner";
import Pagination from "../../ui/Pagination";

export default function BookingTable() {
  const { bookings, isLoading, count } = useBookings();

  if (isLoading) return <Spinner />;
  if (!bookings.length) return <Empty resource="bookings" />;

  return (
    <Menus>
      <div className="overflow-x-auto! w-full!">
        <Table
          $columns="0.8fr 2fr 2.4fr 1.4fr 1fr 0.6fr"
          className="min-w-[750px] md:min-w-[800px]!"
        >
          <Table.Header className="shadow! shadow-gray-400! text-2xl!">
            <div className="border-b-2 w-fit border-b-gray-400">Cabin</div>
            <div className="border-b-2 w-fit border-b-gray-400">Guest</div>
            <div className="border-b-2 w-fit border-b-gray-400">Dates</div>
            <div className="border-b-2 w-fit border-b-gray-400">Status</div>
            <div className="border-b-2 w-fit border-b-gray-400">Amount</div>
            <div></div>
          </Table.Header>

          <Table.Body
            data={bookings}
            render={(booking) => (
              <BookingRow key={booking.id} booking={booking} />
            )}
          />

          <Table.Footer className="border-t-2 border-t-[var(--color-grey-200)]">
            <Pagination count={count} />
          </Table.Footer>
        </Table>
      </div>
    </Menus>
  );
}

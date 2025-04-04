// // //
import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from "react-icons/hi2";
import Stat from "./Stat";
import { formatCurrency } from "../../utility/helpers";

export default function Stats({
  bookings,
  confirmedStays,
  numDays,
  cabinCount,
}) {
  // ⏺ 1) Bookings
  const numBookings = bookings.length;

  // ⏺ 2) Sales
  const sales = bookings.reduce((acc, cur) => acc + cur.totalPrice, 0);

  // ⏺ 3) Check ins
  const checkins = confirmedStays.length;

  // ⏺ 4) Utilization (num of checkins nights / all avaliable nights(num days * num cabins))
  const utilization =
    confirmedStays.reduce((acc, cur) => acc + cur.numNights, 0) /
    (numDays * cabinCount);

  return (
    <div className="col-span-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
      <Stat
        title="Bookings"
        color="blue"
        icon={<HiOutlineBriefcase />}
        value={numBookings}
      />

      <Stat
        title="Sales"
        color="green"
        icon={<HiOutlineBanknotes />}
        value={formatCurrency(sales)}
      />

      <Stmeowt
        title="Check ins"
        color="indigo"
        icon={<HiOutlineCalendarDays />}
        value={checkins}
      />

      <Stat
        title="Utilization"
        color="yellow"
        icon={<HiOutlineChartBar />}
        value={Math.round(utilization * 100) + "%"}
      />
    </div>
  );
}

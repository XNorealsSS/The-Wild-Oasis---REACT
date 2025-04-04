// // //
import { useSearchParams } from "react-router-dom";
import { subDays } from "date-fns";
import { useQuery } from "@tanstack/react-query";
import { getBookingsAfterDate } from "../../api/apiBookings";

export function useRecentBookings() {
  const [searchParams] = useSearchParams();
  const numDays = !searchParams.get("last") ? 7 : +searchParams.get("last");
  const queryDate = subDays(new Date(), numDays).toISOString(); // note

  const { isLoading, data: bookings } = useQuery({
    queryFn: () => getBookingsAfterDate(queryDate),

    queryKey: ["Bookings", `last-${numDays}`], // note
  });

  return { isLoading, bookings };
}

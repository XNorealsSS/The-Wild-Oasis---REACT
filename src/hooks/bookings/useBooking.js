// // //
import { useQuery } from "@tanstack/react-query";
import { getBooking } from "../../api/apiBookings";
import { useParams } from "react-router-dom";

export function useBooking() {
  const { bookingId } = useParams();

  const {
    isLoading,
    data: booking,
    error,
  } = useQuery({
    queryKey: ["Booking", bookingId],
    queryFn: () => getBooking(bookingId),
    retry: false, // ⏺ it's by default true, here it won’t try again if the query fails at the first time
  });

  return {
    isLoading,
    booking,
    error,
  };
}

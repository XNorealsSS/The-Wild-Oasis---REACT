// // //
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../api/apiBookings";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useCheckin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: checkin, isPending: isCheckingIn } = useMutation({
    mutationFn: ({ bookingId, breakfast }) => {
      return updateBooking(bookingId, {
        status: "checked-in",
        isPaid: true,
        ...breakfast,
      });
    },

    onSuccess: (data) => {
      toast.success(`Booking #${data.id} successfully checked in!`);
      queryClient.invalidateQueries({ active: true });
      navigate(`/bookings/${data.id}`);
    },

    onError: () => toast.error("There was an error while checking in!"),
  });

  return {
    checkin,
    isCheckingIn,
  };
}

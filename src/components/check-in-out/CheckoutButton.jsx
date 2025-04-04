// // //
import { useCheckout } from "../../hooks/check-in-out/useCheckout";
import Button from "../../ui/Button";

export default function CheckoutButton({ bookingId }) {
  const { checkout, isCheckingOut } = useCheckout();

  return (
    <Button
      variations="primary"
      sizes="small"
      onClick={() => checkout(bookingId)}
      disabled={isCheckingOut}
    >
      Check out
    </Button>
  );
}

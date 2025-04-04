// // //
import { useLogout } from "../../hooks/authentication/useLogout";
import ButtonIcon from "../../ui/ButtonIcon";
import { HiArrowRightOnRectangle } from "react-icons/hi2";
import SpinnerMini from "../../ui/SpinnerMini";

export default function Logout() {
  const { logout, isPending } = useLogout();

  return (
    <ButtonIcon
      className="shadow shadow-gray-400"
      disabled={isPending}
      onClick={logout}
    >
      {!isPending ? <HiArrowRightOnRectangle /> : <SpinnerMini />}
    </ButtonIcon>
  );
}

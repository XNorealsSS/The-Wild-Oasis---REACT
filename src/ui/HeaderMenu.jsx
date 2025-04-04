// // //
import styled from "styled-components";
import Logout from "../components/authentication/Logout";
import ButtonIcon from "./ButtonIcon";
import { HiOutlineUser } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

const StyledHeaderMenu = styled.ul`
  display: flex;
  gap: 0.8rem;
  align-items: center;
`;

export default function HeaderMenu() {
  const navigate = useNavigate();

  return (
    <StyledHeaderMenu>
      <li>
        <ButtonIcon
          onClick={() => navigate("/account")}
          className="shadow shadow-gray-400"
        >
          <HiOutlineUser />
        </ButtonIcon>
      </li>

      <li>
        <DarkModeToggle className="shadow shadow-gray-400" />
      </li>

      <li>
        <Logout />
      </li>
    </StyledHeaderMenu>
  );
}

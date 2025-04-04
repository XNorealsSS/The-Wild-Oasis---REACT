import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";
import { AiOutlineClose } from "react-icons/ai";
import Uploader from "../data/Uploader";

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-100);
  padding: 3.2rem 2.4rem;
  border-right: 2px solid var(--color-grey-300);

  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    height: 85vh;
    width: 26rem;
    z-index: 20;
    transform: ${(props) =>
      props.$isVisible ? "translateX(0)" : "translateX(-100%)"};
    transition: transform 0.3s ease-in-out;
    border-bottom-right-radius: 1.6rem;
  }
`;

const CloseButton = styled.button`
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: none;
    border: none;
    font-size: 2rem;
    color: var(--color-grey-700);
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }
`;

export default function SideBar({ $isVisible, onClose }) {
  return (
    <StyledSidebar $isVisible={$isVisible}>
      <CloseButton
        onClick={onClose}
        className="bg-red-500! text-red-200! rounded-lg shadow hover:bg-red-600! shadow-gray-300"
      >
        <AiOutlineClose size={36} />
      </CloseButton>

      <Logo />
      <MainNav />
    </StyledSidebar>
  );
}

// // //
import { HiXMark } from "react-icons/hi2";
import styled, { css } from "styled-components";
import { createPortal } from "react-dom";
import { cloneElement, createContext, useContext, useState } from "react";
import useOutsideClick from "../hooks/useOutsideClick";

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-grey-0);
  padding: 2.6rem;
  transition: all 0.5s;

  @media (max-width: 768px) {
    padding: 2.2rem;
    width: 85%;

    ${(props) => {
      return (
        props.size === "smallModal" &&
        css`
          width: 55%;
        `
      );
    }}
  }

  @media (max-width: 650px) {
    padding: 2.2rem;
    width: 85%;
    /* height: 90vh; */
    overflow-y: scroll;
  }

  @media (max-width: 650px) {
    ${(props) => {
      return (
        props.size === "bigModal" &&
        css`
          height: 90vh;
        `
      );
    }}

    ${(props) => {
      return (
        props.size === "smallModal" &&
        css`
          height: auto;
        `
      );
    }}
  }

  @media (min-width: 1200px) {
    ${(props) => {
      return (
        props.size === "smallModal" &&
        css`
          width: 35%;
        `
      );
    }}
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--backdrop-color);
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 0.5s;
`;

const Button = styled.button`
  padding: 0.4rem;
  transform: translateX(0.8rem);
  position: absolute;

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    /* Sometimes we need both */
    /* fill: var(--color-grey-500);
    stroke: var(--color-grey-500); */
  }

  &:focus {
    outline: none;
  }
`;

// ⏺ Compound Component Pattern
const ModalContext = createContext();

export default function Modal({ children }) {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: openWindowsName }) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => open(openWindowsName) });
}

function Window({ children, name, size = "bigModal" }) {
  const { openName, close } = useContext(ModalContext);
  const ref = useOutsideClick(close);

  if (name !== openName) return null;

  return createPortal(
    <Overlay>
      <StyledModal
        className="rounded-2xl shadow! shadow-gray-400! border-2 border-[var(--color-grey-200)]"
        ref={ref}
        size={size}
      >
        <Button
          className="top-[0.2%]! right-[2.2%] sm:right-[1.4%] md:right-[1.2%]! bg-red-200! border-2! border-red-300! hover:bg-red-300! transition-all! duration-300! rounded-full! shadow shadow-red-300"
          onClick={close}
        >
          <HiXMark className="text-red-800!" />
        </Button>

        <div>{cloneElement(children, { onCloseModal: close })}</div>
      </StyledModal>
    </Overlay>,

    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;

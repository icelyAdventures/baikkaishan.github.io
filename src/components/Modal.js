import React from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../context";

const Modal = () => {
  const { isModalOpen, closeModal } = useGlobalContext();
  return (
    <div className={`modal-overlay show-modal`}>
      <div className="modal-container"></div>
      <h3>modal-content</h3>
      <button className="close-modal btn">
        <FaTimes />
      </button>
    </div>
  );
};
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../context";

export default Modal;

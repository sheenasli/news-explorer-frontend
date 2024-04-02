import { useRef } from "react";
import "./SuccessModal.css";
import "../ModalWithForm/ModalWithForm.css";

const SuccessModal = ({
  onClose,
  onSubmit,
  handleLoginModal,
  handleOverlay,
}) => {
  // const ref = useRef();
  return (
    <div className="modal" onClick={handleOverlay}>
      <div className="modal__container">
        <button
          type="button"
          onClick={onClose}
          className="modal__close-button"
        />
        <form className="modal__form" onSubmit={handleLoginModal}>
          <h3 className="modal__title">Registration successfully completed!</h3>

          <button
            className="modal__alt_button"
            type="button"
            onClick={onSubmit}
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default SuccessModal;

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
    <div className="success-modal" onClick={handleOverlay}>
      <div className="success-modal__container">
        <button
          type="button"
          onClick={onClose}
          className="success-modal__close-button"
        />
        <form className="success-modal__form" onSubmit={handleLoginModal}>
          <h3 className="success-modal__title">
            Registration successfully completed!
          </h3>

          <button
            className="success-modal__alt-button"
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

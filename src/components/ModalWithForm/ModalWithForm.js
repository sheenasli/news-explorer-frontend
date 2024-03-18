import { useEffect } from "react";
import "./ModalWithForm.css";

const ModalWithForm = ({
  onClose,
  name,
  children,
  buttonText,
  title,
  onSubmit,
  altButtonText,
  altButtonOnClick,
  ...props
}) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  const handleOverlay = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={`modal modal_type_${name}`} onClick={handleOverlay}>
      <div className="modal__container">
        <button
          type="button"
          onClick={onClose}
          className="modal__close-button"
        />
        <form className="modal__form" onSubmit={onSubmit}>
          <h3 className="modal__title">{title}</h3>
          {children}
          <button type="submit" className="modal__button">
            {buttonText}
          </button>
          <div className="modal__alt_container">
            <p>or</p>
            <button
              className="modal__alt_button"
              type="button"
              onClick={altButtonOnClick}
            >
              {altButtonText}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;

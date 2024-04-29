import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useFormWithValidation } from "../hooks/useForm";

const RegisterModal = ({
  handleRegistration,
  handleAltClick,
  isLoading,
  serverError,
  onClose,
}) => {
  const { values, errors, isValid, handleChange } = useFormWithValidation({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegistration(values);
  };

  return (
    <ModalWithForm
      title="Sign up"
      buttonText={isLoading ? "Loading..." : "Sign Up"}
      altButtonText="Sign in"
      onClose={onClose}
      onSubmit={handleSubmit}
      handleAltClick={handleAltClick}
      isDisabled={!isValid}
    >
      <div className="modal__input-container">
        <label>
          Email
          <input
            className="modal__input"
            type="email"
            name="email"
            minLength="4"
            maxLength="50"
            placeholder="Enter email"
            value={values.email || ""}
            required
            onChange={handleChange}
          />
          <span className="modal__error">
            {errors.email} {""}
          </span>
        </label>
        <label>
          Password
          <input
            className="modal__input"
            type="password"
            name="password"
            minLength="8"
            maxLength="30"
            placeholder="Enter password"
            value={values.password || ""}
            required
            onChange={handleChange}
          />
          <span className="modal__error">{errors.password}</span>
        </label>
        <label>
          Username
          <input
            className="modal__input"
            type="name"
            name="name"
            minLength="2"
            maxLength="30"
            placeholder="Enter your username"
            value={values.name || ""}
            required
            onChange={handleChange}
          />
          <span className="modal__error">{errors.name}</span>
          <span className="modal__error-register">{serverError}</span>
        </label>
      </div>
    </ModalWithForm>
  );
};

export default RegisterModal;

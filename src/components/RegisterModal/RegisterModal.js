import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useForm } from "../hooks/useForm";

const RegisterModal = ({
  handleCloseModal,
  handleLoginModal,
  handleSuccessModal,
  onSubmit,
  isLoading,
  onClose,
}) => {
  const { values, handleChange, setValues } = useForm({});

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(values);
  };

  return (
    <ModalWithForm
      title="Sign up"
      buttonText="Sign up"
      altButtonText="Sign in"
      onClose={onClose}
      onSubmit={handleSuccessModal}
      altButtonOnClick={handleLoginModal}
    >
      <div className="modal__input_container">
        <label>
          Email
          <input
            className="modal__input"
            type="email"
            name="email"
            minLength="1"
            maxLength="30"
            placeholder="Enter email"
            value={values.email || ""}
            // required
            onChange={handleChange}
          />
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
            // required
            onChange={handleChange}
          />
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
            //   required
            onChange={handleChange}
          />
        </label>
      </div>
    </ModalWithForm>
  );
};

export default RegisterModal;

import "./App.css";

import { Route, Switch } from "react-router-dom";
import { useState } from "react";

import Header from "../Header/Header";
import Main from "../Main/Main";
import About from "../About/About";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";
import NotFound from "../NotFound/NotFound";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import SavedNews from "../SavedNews/SavedNews";
import SuccessModal from "../SuccessModal/SuccessModal";

function App() {
  const [activeModal, setActiveModal] = useState("");

  const handleLoginModal = () => {
    setActiveModal("loginModal");
  };

  const handleRegisterModal = () => {
    setActiveModal("registerModal");
  };

  const handleSuccessModal = () => {
    setActiveModal("successModal");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  return (
    <div className="page">
      <div className="header-main">
        <Header
          handleLoginModal={handleLoginModal}
          handleRegisterModal={handleRegisterModal}
          handleSuccessModal={handleSuccessModal}
        />
        {/* <SavedNewsHeader /> */}

        <Switch>
          <Route exact path="/">
            <Main />
          </Route>

          <Route path="/saved-news">
            <SavedNews />
          </Route>
        </Switch>
      </div>
      {/* <Preloader /> */}
      {/* <NotFound /> */}
      <About />
      <Footer />
      {activeModal === "loginModal" && (
        <LoginModal
          isOpen={activeModal === "create"}
          onClose={handleCloseModal}
          handleRegisterModal={handleRegisterModal}
        />
      )}
      {activeModal === "registerModal" && (
        <RegisterModal
          isOpen={activeModal === "create"}
          onClose={handleCloseModal}
          // handleLoginModal={handleLoginModal}
          handleSuccessModal={handleSuccessModal}
          onSubmit={handleSuccessModal}
        />
      )}
      {activeModal === "successModal" && (
        <SuccessModal
          isOpen={activeModal === "create"}
          onClose={handleCloseModal}
          // handleSuccessModal={handleSuccessModal}
          handleLoginModal={handleLoginModal}
          onSubmit={handleLoginModal}
        />
      )}
    </div>
  );
}

export default App;

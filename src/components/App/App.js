import "./App.css";

import { useLocation } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { getSearchResults } from "../../utils/newsApi";
import { registration, checkToken, authorization } from "../../utils/auth";
import {
  getSavedArticles,
  addSavedArticle,
  removeSavedArticle,
} from "../../utils/Api";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import SavedNews from "../SavedNews/SavedNews";
import SuccessModal from "../SuccessModal/SuccessModal";

import { CurrentPageContext } from "../../contexts/CurrentPageContext";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { HasSearchedContext } from "../../contexts/HasSearchedContext";
import { KeywordContext } from "../../contexts/KeywordContext";
import { SavedArticlesContext } from "../../contexts/SavedArticlesContext";
import { SearchResultContext } from "../../contexts/SearchResultContext";
import { MobileContext } from "../../contexts/MobileContext";

//Protected Route

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [searchError, setSearchError] = useState(false);
  const [savedArticles, setSavedArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location.pathname]);
  //Checking for token
  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      checkToken(jwt)
        .then((res) => {
          if (res && res.data) {
            setCurrentUser(res.data);
            setIsLoggedIn(true);
          }
        })
        .then(() => {
          getSavedArticles(jwt).then((articles) => {
            setSavedArticles(articles);
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [isLoggedIn]);

  //universal handle for handling any submit
  const handleSubmit = (request) => {
    setIsLoading(true);
    request()
      .then(() => {
        if (activeModal === "registerModal") {
          setServerError(false);
        } else {
          setServerError(false);
          handleCloseModal();
        }
      })
      .catch((error) => {
        console.log(error);
        setServerError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  //esc and overlay modal close
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        handleCloseModal();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  useEffect(() => {
    const handleOverlay = (e) => {
      if (e.target.classList.contains("modal")) {
        handleCloseModal();
      }
    };
    document.addEventListener("click", handleOverlay);
    return () => document.removeEventListener("click", handleOverlay);
  }, []);

  //Callback function to login user
  const handleLogin = (email, password) => {
    setIsLoading(true);
    authorization(email, password)
      .then((res) => {
        if (res) {
          localStorage.setItem("jwt", res.token);
          checkToken(res.token).then((data) => {
            setCurrentUser(data);
            setIsLoggedIn(true);
          });
        }
        handleCloseModal();
      })
      .catch((err) => {
        console.error("Login failed", err);
      })
      .finally(() => {
        setIsLoading(false);
      });

    // const data = { name: "fake user" };
    // setCurrentUser(data);
    // setIsLoggedIn(true);
    // setIsLoading(false);
  };

  //Callback function to register new user
  const handleRegistration = (values) => {
    const makeRequest = () => {
      return registration(values).then((user) => {
        if (user) {
          handleSuccessModal();
        }
      });
    };
    handleSubmit(makeRequest);
  };

  const handleLoginModal = () => {
    if (mobileMenuOpen) {
      closeMobileMenu();
    }
    setActiveModal("loginModal");
  };

  const handleRegisterModal = () => {
    if (mobileMenuOpen) {
      closeMobileMenu();
    }
    setActiveModal("registerModal");
  };

  const handleSuccessModal = () => {
    setActiveModal("successModal");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleSearch = ({ keyword }) => {
    setKeyword(keyword);
    setIsSearching(true);
    getSearchResults(keyword)
      .then((res) => {
        setSearchResults(res.articles);
        setHasSearched(true);
        setIsSearching(false);
        setSearchError(false);
      })
      .catch((err) => {
        console.error(err);
        setIsSearching(false);
        setSearchError(true);
      });
  };

  const handleAltClick = () => {
    if (activeModal === "loginModal") {
      handleCloseModal();
      handleRegisterModal();
    } else {
      handleCloseModal();
      handleLoginModal();
    }
  };

  //callback for logging a user out
  const history = useHistory("");
  const handleLogout = () => {
    if (mobileMenuOpen) {
      closeMobileMenu();
    }
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
    setCurrentUser({});
    history.push("/");
  };

  const openMobileMenu = () => {
    setMobileMenuOpen(true);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  //callback for saving article
  const handleSaveArticle = ({ newsData, keyword, token }) => {
    if (!savedArticles.some((article) => article.link === newsData.url)) {
      addSavedArticle(newsData, keyword, token)
        .then((data) => {
          setSavedArticles([data.data, ...savedArticles]);
          const savedArticleId = data.data._id;
          const newArticle = { ...newsData, _id: savedArticleId };
          const newSearchResults = searchResults.map((article) =>
            article.url === newsData.url ? newArticle : article
          );
          setSearchResults(newSearchResults);
        })
        .catch((err) => console.error(err));
    } else if (savedArticles.some((article) => article.link === newsData.url)) {
      removeSavedArticle(newsData, token)
        .then(() => {
          const unsaveNewsArticles = savedArticles.filter(
            (article) => article._id !== newsData._id
          );
          setSavedArticles(unsaveNewsArticles);

          const newArticle = { ...newsData, _id: "" };
          const newSearchResults = searchResults.map((article) =>
            article.url === newsData.url ? newArticle : article
          );
          setSearchResults(newSearchResults);
        })
        .catch((err) => console.error(err));
    }
  };

  //callback to remove article
  const handleRemoveArticle = ({ newsData, token }) => {
    removeSavedArticle(newsData, token)
      .then(() => {
        const unsaveNewsArticles = savedArticles.filter(
          (article) => article._id !== newsData._id
        );
        setSavedArticles(unsaveNewsArticles);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div
      className={`page ${location.pathname === "/saved-news" ? "no-bg" : ""}`}
    >
      {" "}
      <CurrentPageContext.Provider
        value={{ currentPage, setCurrentPage, activeModal }}
      >
        <CurrentUserContext.Provider value={{ isLoggedIn, currentUser }}>
          <HasSearchedContext.Provider value={{ hasSearched }}>
            <SearchResultContext.Provider value={{ searchResults }}>
              <SavedArticlesContext.Provider
                value={{ savedArticles, setSavedArticles }}
              >
                <KeywordContext.Provider value={{ keyword, setKeyword }}>
                  <MobileContext.Provider
                    value={{ mobileMenuOpen, openMobileMenu, closeMobileMenu }}
                  >
                    <Header
                      // handleLoginModal={handleLoginModal}
                      handleRegisterModal={handleRegisterModal}
                      handleSuccessModal={handleSuccessModal}
                      onLogin={handleLoginModal}
                      onLogout={handleLogout}
                    />

                    <Switch>
                      <Route exact path="/">
                        <Main
                          onSignUp={handleRegisterModal}
                          handleSaveArticle={handleSaveArticle}
                          handleRemoveArticle={handleRemoveArticle}
                          searchError={searchError}
                          handleSearch={handleSearch}
                        />
                      </Route>

                      <ProtectedRoute path="/saved-news">
                        <SavedNews handleRemoveArticle={handleRemoveArticle} />
                      </ProtectedRoute>
                    </Switch>
                    <Footer />

                    {activeModal === "loginModal" && (
                      <LoginModal
                        isOpen={activeModal === "create"}
                        onClose={handleCloseModal}
                        handleLogin={handleLogin}
                        handleRegisterModal={handleRegisterModal}
                        isLoading={isLoading}
                        handleAltClick={handleAltClick}
                      />
                    )}
                    {activeModal === "registerModal" && (
                      <RegisterModal
                        isOpen={activeModal === "create"}
                        onClose={handleCloseModal}
                        // handleLoginModal={handleLoginModal}
                        // handleSuccessModal={handleSuccessModal}
                        onSubmit={handleLoginModal}
                        isLoading={isLoading}
                        handleAltClick={handleAltClick}
                        handleRegistration={handleRegistration}
                      />
                    )}
                    {activeModal === "successModal" && (
                      <SuccessModal
                        isOpen={activeModal === "create"}
                        onClose={handleCloseModal}
                        onSubmit={handleLoginModal}
                      />
                    )}
                  </MobileContext.Provider>
                </KeywordContext.Provider>
              </SavedArticlesContext.Provider>
            </SearchResultContext.Provider>
          </HasSearchedContext.Provider>
        </CurrentUserContext.Provider>
      </CurrentPageContext.Provider>
    </div>
  );
}

export default App;

import { useEffect, useRef, useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { MdOutlineTranslate } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { useTranslation } from "react-i18next";
import { FaBars, FaSearch } from "react-icons/fa";
import SignUpModal from "../SignUpModal/SignUpModal";
import SignInModal from "../SignInModal/SignInModal";
import Logo from "../../assets/logo.webp";
import "./NavBar.css";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const { i18n } = useTranslation();
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);

  // Separate states for web and mobile language menus
  const [isWebMenuOpen, setIsWebMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const webMenuRef = useRef<HTMLDivElement | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);

  const navigate = useNavigate();

  // Click outside handler for desktop language menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        webMenuRef.current &&
        !webMenuRef.current.contains(event.target as Node)
      ) {
        setIsWebMenuOpen(false);
      }
    };

    if (isWebMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isWebMenuOpen]);

  // Click outside handler for mobile language menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const [searchRequest, setSearchRequest] = useState("");

  return (
    <>
      <div className="nav-overlay"></div>
      <nav className="container">
        <div className="web-nav">
          <header className="navbar">
            <div className="main-nav">
              <div className="left-section">
                <FaBars className="icon" size={25} />
                <div className="search-box">
                  <input
                    type="search"
                    placeholder="Search"
                    value={searchRequest}
                    onChange={(e) => setSearchRequest(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        console.log(searchRequest);
                      }
                    }}
                  />
                  <FaSearch className="search-icon" />
                </div>
              </div>

              <div
                className="logo"
                onClick={() => {
                  navigate("/");
                  window.scrollTo(0, 0);
                }}
              >
                <img src={Logo} alt="Logo" />
              </div>

              <div className="right-section">
                {/* Web Language Dropdown */}
                <div
                  ref={webMenuRef}
                  className="manage nav-box nav-section web-manage"
                  onClick={() => setIsWebMenuOpen(!isWebMenuOpen)}
                  style={{ cursor: "pointer" }}
                >
                  <MdOutlineTranslate className="icon-lang" size={25} />
                  <div
                    className={
                      isWebMenuOpen
                        ? "manage-menu active-manage"
                        : "manage-menu"
                    }
                  >
                    <ul>
                      <li onClick={() => handleLanguageChange("fr")}>
                        <span>Français</span>
                      </li>
                      <li onClick={() => handleLanguageChange("en")}>
                        <span>English</span>
                      </li>
                      <li onClick={() => handleLanguageChange("ar")}>
                        <span>Arabic</span>
                      </li>
                      <li onClick={() => handleLanguageChange("es")}>
                        <span>Spanish</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <button className="black-btn">
                  Ajouter votre établissement
                </button>
                <button
                  className="white-btn"
                  onClick={() => setIsSignUpOpen(true)}
                >
                  Login / Register
                </button>
                <SignUpModal
                  open={isSignUpOpen}
                  handleClose={() => setIsSignUpOpen(false)}
                  onSwitchToSignIn={() => {
                    setIsSignUpOpen(false);
                    setIsSignInOpen(true);
                  }}
                />
                <SignInModal
                  open={isSignInOpen}
                  handleClose={() => setIsSignInOpen(false)}
                  onSwitchToSignUp={() => {
                    setIsSignInOpen(false);
                    setIsSignUpOpen(true);
                  }}
                />
              </div>
            </div>
          </header>
        </div>

        <div className="mobile-nav">
          <IoMdMenu className="nav-box nav-menu" />
          <div className="nav-sections">
            <div
              ref={mobileMenuRef}
              className="manage nav-box nav-section"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              style={{ cursor: "pointer" }}
            >
              <MdOutlineTranslate size={24} />
              <div
                className={
                  isMobileMenuOpen ? "manage-menu active-manage" : "manage-menu"
                }
              >
                <ul>
                  <li onClick={() => handleLanguageChange("fr")}>
                    <span>Français</span>
                  </li>
                  <li onClick={() => handleLanguageChange("en")}>
                    <span>English</span>
                  </li>
                  <li onClick={() => handleLanguageChange("ar")}>
                    <span>Arabic</span>
                  </li>
                  <li onClick={() => handleLanguageChange("es")}>
                    <span>Spanish</span>
                  </li>
                </ul>
              </div>
            </div>
            <CgProfile
              className="nav-box nav-section"
              onClick={() => setIsSignUpOpen(true)}
              style={{ cursor: "pointer" }}
            />
            <SignUpModal
              open={isSignUpOpen}
              handleClose={() => setIsSignUpOpen(false)}
              onSwitchToSignIn={() => {
                setIsSignUpOpen(false);
                setIsSignInOpen(true);
              }}
            />
            <SignInModal
              open={isSignInOpen}
              handleClose={() => setIsSignInOpen(false)}
              onSwitchToSignUp={() => {
                setIsSignInOpen(false);
                setIsSignUpOpen(true);
              }}
            />
          </div>
        </div>
      </nav>
    </>
  );
}

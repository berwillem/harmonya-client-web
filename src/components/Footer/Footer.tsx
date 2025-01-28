import React, { useEffect, useState } from "react";
import { BiLogoFacebook, BiLogoInstagram } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { BsArrowUpCircle } from "react-icons/bs";
import logo from "../../assets/logo.webp";
import ppl from "../../assets/ppl.png";
import cb from "../../assets/cb.png";
import dhbya from "../../assets/dhbya.jpg";
import { useTranslation } from "react-i18next";
import "./Footer.css";

export default function Footer() {
  const { t } = useTranslation();
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = e.currentTarget.email.value;
    console.log(email);
    e.currentTarget.email.value = "";
  };

  return (
    <div className="footer">
      {/* Top Footer */}
      <div className="top-footer">
        <div className="left-top">
          <h5>{t("SIGN UP")} LOREM IPSUM DOLOR SIT AMET</h5>
          <p>
            {t("SIGN UP")} Lorem ipsum dolor sit amet consectetur adipisicing
            elit
          </p>
        </div>
        <div className="right-top">
          <div className="email">
            <span className="email-text">{t("email")}</span>
            <form className="email-check" onSubmit={handleSubscribe}>
              <input type="email" name="email" id="newsletter" required />
              <button>{t("SIGN UP")}</button>
            </form>
          </div>
          <div className="social">
            <BiLogoInstagram />
            <FaXTwitter />
            <BiLogoFacebook />
          </div>
        </div>
      </div>

      {/* Mid Footer */}
      <div className="mid-footer">
        <div className="list-footer">
          {[...Array(3)].map((_, index) => (
            <ul key={index}>
              <li className="titleF">TITLE</li>
              {[...Array(5)].map((_, i) => (
                <li key={i}>Links</li>
              ))}
            </ul>
          ))}
          <div className="linkfooter">
            <div className="app-text">
              <div className="app">
                <img src={logo} alt="App Logo" />
              </div>
              <span className="title2">{t("our app")}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bottom-footer">
        <ul className="policy">
          <li className="logo">
            <img src={logo} alt="Logo" />
          </li>
          <li>
            <a href="/" target="_blank" rel="noopener noreferrer">
              {t("Terms & Conditions")}
            </a>
          </li>
          <li>
            <a href="/" target="_blank" rel="noopener noreferrer">
              {t("Privacy Policy")}
            </a>
          </li>
          <li>
            <a href="/" target="_blank" rel="noopener noreferrer">
              {t("Other Policies")}
            </a>
          </li>
        </ul>
        <div className="copyright">
          <div className="payment">
            <img src={dhbya} alt="Payment Option" />
            <img src={cb} alt="Payment Option" />
            <img src={ppl} alt="Payment Option" />
          </div>
          <p>
            Copyright © XXXXXXX (t/a HARMONYA.) 2023 | All Rights Reserved
            <br />
            Company registration number: XXXXXXX | VAT number: XX XXXXXXXXX
          </p>
        </div>
        {showScrollButton && (
          <button className="up-btn" onClick={() => window.scrollTo(0, 0)}>
            <BsArrowUpCircle />
          </button>
        )}
      </div>
    </div>
  );
}

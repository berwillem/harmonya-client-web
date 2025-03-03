import { IoArrowBackOutline } from "react-icons/io5";
import "./NavTop.css"
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.webp";
export default function NavTop() {
  const navigate = useNavigate();
  return (
    <div className="nav-top">
      <div className="left-nav-top">
        <div className="back" onClick={() => {
          navigate(-1);

        }}><IoArrowBackOutline /></div>
        <h2>Réservez votre place</h2>
      </div>

      <div
        className="logo-top"
        onClick={() => {
          navigate("/");
          window.scrollTo(0, 0);
        }}
      >
        <img src={Logo} alt="Logo" />
      </div>


    </div>
  )
}

import "./NavBar.css";
import { IoMdMenu } from "react-icons/io";
import { MdOutlineTranslate } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
export default function NavBar() {
  return (
    <>
      <nav className="container">
        <IoMdMenu className="nav-box nav-menu" />
        <div className="nav-sections">
          <MdOutlineTranslate className="nav-box nav-section" />
          <CgProfile className="nav-box nav-section" />
        </div>
      </nav>
    </>
  );
}

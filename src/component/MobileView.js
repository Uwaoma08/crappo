import Logo from "./Logo";
import {  FaTimes } from "react-icons/fa";

const MobileView = ({closeMobileMenu, isOpen}) => {
  return (
    <>
      <div className="menu-banner">
        <Logo />
        {isOpen == true &&<button className="hide-button" onClick={closeMobileMenu}>
            <FaTimes className="menu-bar"/>
        </button>}

        <ul className="menu-items">
          <li>Products</li>
          <li>Features</li>
          <li>Abouts</li>
          <li>Contact</li>
          <li>Login</li>
          <li>Register</li>
        </ul>
        <img className="vector" src="../images/vector.svg"/>
      </div>
    </>
  );
};

export default MobileView;

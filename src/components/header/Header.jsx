import React from "react";
import HeaderSocials from "./HeaderSocials";
import "./header.css";

import ME from "../../assets/me.png";

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>David Gallula</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;

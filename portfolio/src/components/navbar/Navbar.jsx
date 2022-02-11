import React from "react";
import "./navbar.css";
import logo from "../../assets/logo.jpg";

const navbar = () => {
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>

        <div className="gpt3__navbar-links_container">
          <p>
            <a href="#home">Home</a>
            <a href="#home">Home</a>
            <a href="#home">Home</a>
            <a href="#home">Home</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default navbar;

import React from "react";
import "./Header.css";
import headerImg from "../../assets/images/header.png";
const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <p className="header-hello">Hello, i am</p>
        <h1 className="dev-name">
          {" "}
          &lt;   JOHN <br />
          DOE   /&gt;
        </h1>
        <h2 className="dev-role">BACKEND DEVELOPER</h2>
        <div className="header-left-info">
            <div className="header-left-subInfo">
                <p className="number">5</p>
                <p className="text">Years of experience</p>
            </div>
            <div className="header-left-subInfo">
               <p className="number">10</p>
               <p className="text">Projects completed around the world</p>
            </div>
        </div>
      </div>
      <div className="header-right">
        <img src={headerImg} alt="" />
      </div>
    </div>
  );
};

export default Header;

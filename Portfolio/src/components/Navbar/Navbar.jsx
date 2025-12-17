import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <h1 className="navbar_logo">
        JOHN<span>DOE</span>
      </h1>
      <ul className="navbar_links">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
      </ul>
      <div className="navbar_social_links">
        <a
          className="navbar_social_link"
          href="https://www.linkedin.com/in/aryaveer-kanwar-13a087239/" target="blank"
        >
          {" "}
         <i class="fa-brands fa-linkedin-in linkedin"></i>
          <p>Linkedin</p>
        </a>

        <a
          className="navbar_social_link"
          href="https://github.com/AryaVeer0505" target="blank"
        >
          {" "}
          <i class="fa-brands fa-github"></i>
          <p>Github</p>
        </a>

        <a
          className="navbar_social_link mail"
          href="mailto:aryaveerkanwat11458@gmail.com"
        >
          {" "}
          <i class="fa-regular fa-envelope"></i>
          <p>Contact me</p>
        </a>
      </div>
    </div>
  );
};

export default Navbar;

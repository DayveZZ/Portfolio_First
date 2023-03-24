import React from "react";
import { HashLink } from "react-router-hash-link";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <h1>Abhijit Deb</h1>

        <div>
          <HashLink to={"/#home"}>Home</HashLink>
          <HashLink to={"/#about"}>About</HashLink>
          <HashLink to={"/#projects"}>Projects</HashLink>
        </div>

        <h6>Follow Me On</h6>
      </div>

      <div className="links">
        <a href="https://www.linkedin.com/in/abhijit-deb-8ba64721a/">
          <AiFillLinkedin />
        </a>
        <a href="https://github.com/DayveZZ">
          <AiFillGithub />
        </a>
      </div>
      <p>@all right reserved</p>
    </footer>
  );
};

export default Footer;

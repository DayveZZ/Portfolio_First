import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <h1>Abhijit Deb</h1>
        <p>@all right reserved</p>
      </div>

      <div>
        <h5>Follow Me</h5>
        <div>
          <a href="https://www.linkedin.com/in/abhijit-deb-8ba64721a/">
            <AiFillLinkedin />
          </a>
          <a href="https://github.com/DayveZZ">
            <AiFillGithub />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

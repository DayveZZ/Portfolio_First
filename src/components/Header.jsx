import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import "../styles/Header.scss";
import React, { useState, useEffect } from "react";

const Header = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else setShow(false);
    });
  }, []);
  return (
    <div className={`header ${show && "headerDark"}`}>
      <HashLink to={"/#home"} className="logo">
        Abhijit
      </HashLink>
      <main>
        <HashLink to={"/#home"}>Home</HashLink>
        <HashLink to={"/#about"}>About</HashLink>
        <HashLink to={"/#projects"}>Projects</HashLink>
        <Link to={"/contact"}>Contact</Link>
      </main>
    </div>
  );
};

export default Header;

import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineArrowRight,
} from "react-icons/ai";
import "../styles/Home.scss";
import { HashLink } from "react-router-hash-link";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import CV from "../assets/CV/Abhijit_Deb_Reume.pdf";
import Me from "../assets/Me2.jpg";
import MeAbout from "../assets/MeAbout2.jpg";
import Netflix_Clone from "../assets/Projects/Netflix_Clone/Home.png";
import Video_Streaming_App from "../assets/Projects/Video_Streaming_App/Home.png";
import Portfolio from "../assets/Projects/Portfolio/About.png";

const Home = () => {
  return (
    <>
      {/* H O M E */}
      <div className="home" id="home">
        <div className="social">
          <a href="https://www.linkedin.com/in/abhijit-deb-8ba64721a/">
            <AiFillLinkedin />
          </a>
          <a href="https://github.com/DayveZZ">
            <AiFillGithub />
          </a>
        </div>
        <img src={Me} alt="Logo" />
        <main className="info">
          <h1>
            Abhijit<h3>Deb</h3>
          </h1>
          <p>— &nbsp; Frontend Developer</p>
          <button className="CV">
            <a href={CV}>Download CV</a>
          </button>
        </main>
      </div>

      {/* A B O U T */}
      <div className="about" id="about">
        <h1>About Me</h1>
        <div className="aboutInside">
          <div>
            {/* 1 S T      P A R A */}
            <h4>Nice to meet you</h4>
            <p className="pAbout">
              I'm a recent graduate with a degree in ECE and a passion for
              Frontend Development, excited to begin my career in Frontend
              Development & committed to continuous learning and growth in this
              dynamic field.
            </p>
            <hr className="solid"></hr>
            {/* 2 N D       P A R A */}
            <div className="Education">
              <div className="gridItem">
                <h4>Name:</h4>
                <p>Abhijit Deb</p>
              </div>
              <div className="gridItem">
                <h4>Email:</h4>
                <p>abhijitdebofficial@gmail.com</p>
              </div>
              <div className="gridItem">
                <h4>Phone No:</h4>
                <p>+91 7001343261</p>
              </div>
              <div className="gridItem">
                <h4>Availability:</h4>
                <p>Open for work</p>
              </div>
            </div>
            <hr className="solid"></hr>
            {/* 3 R D       P A R A */}
            <div className="College">
              {/* <h4>B.Tech: </h4> */}
              <h4>Bachelor in Technology: </h4>
              <p>Electronics and Communication Engineering (ECE)</p>
            </div>
            <div className="Diploma">
              <h4>Diploma in Engineering: </h4>
              <p> Electronics and Telecommunication Engineering (ETCE)</p>
            </div>
            <hr className="solid"></hr>

            <div className="skills">
              <h4>Skill:</h4>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Website Designing</li>
                <li>React JS</li>
                <li>SASS</li>
              </ul>
            </div>
          </div>
          <img src={MeAbout} alt="img" />
        </div>
      </div>

      {/* P R O J E C T S */}
      <div className="projects" id="projects">
        <h1>My Projects</h1>
        <div className="container">
          <div className="slides">
            <img src={Video_Streaming_App} alt="Project_1" />
            <div className="details">
              <h2>DayveHUB</h2>
              <h5>Video Streaming App</h5>
              <p className="tech">
                Used: <p>HTML - Chakra UI - JavaScript - React JS</p>
              </p>

              <div className="btn">
                <button>
                  <a href="https://github.com/DayveZZ/netflix_clone.git">
                    Code <AiOutlineArrowRight />
                  </a>
                </button>
                <button>
                  <a href="https://video-streaming-app-pi.vercel.app/">
                    Demo <AiOutlineArrowRight />
                  </a>
                </button>
              </div>
            </div>
          </div>

          <div className="slides">
            <img src={Netflix_Clone} alt="Netflix_Clone" />
            <div className="details">
              <h2>Netflix</h2>
              <h5>Clone Website using API</h5>
              <p className="tech">
                Used: <p>HTML - SASS - JavaScript - React JS</p>
              </p>

              <div className="btn">
                <button>
                  <a href="https://github.com/DayveZZ/netflix_clone.git">
                    Code <AiOutlineArrowRight />
                  </a>
                </button>
                <button>
                  <a href="https://netflix-clone-sable-one-94.vercel.app/Home">
                    Demo <AiOutlineArrowRight />
                  </a>
                </button>
              </div>
            </div>
          </div>

          <div className="slides">
            <img src={Portfolio} alt="Project_3" />
            <div className="details">
              <h2>Portfolio</h2>
              <h5>Personal Portfolio Website Full Rensponsive</h5>
              <p className="tech">
                Used: <p>HTML - SASS- JavaScript - React JS</p>
              </p>
              <div className="btn">
                <button>
                  <a href="https://github.com/DayveZZ/Portfolio_First.git">
                    Code <AiOutlineArrowRight />
                  </a>
                </button>
                <button>
                  <HashLink to={"/#home"}>Home</HashLink>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

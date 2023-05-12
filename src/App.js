import { useCallback, useEffect, useRef, useState } from "react";
import "./assets/App.css";
import Home from "./components/navigationTabs/Home";
import AboutMe from "./components/navigationTabs/AboutMe";
import Skills from "./components/navigationTabs/Skills";
import Contact from "./components/navigationTabs/Contact";
import Resume from "./components/navigationTabs/Resume";
import ekimCoskun from "./assets/ekimcoskun.jpg";
import {
  AiFillGithub,
  AiOutlineInstagram,
  AiFillFacebook,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  const homeRef = useRef(null);
  const aboutMeRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);
  const resumeRef = useRef(null);

  const handleTabClick = useCallback((tab) => {
    setSelectedTab(tab);
    if (tab === "Home") homeRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    else if (tab === "About Me")
      aboutMeRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    else if (tab === "Skills")
      skillsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    else if (tab === "Contact")
      contactRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    else if (tab === "Resume")
      resumeRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      if (
        scrollPosition >= homeRef.current.offsetTop &&
        scrollPosition < aboutMeRef.current.offsetTop
      ) {
        setSelectedTab("Home");
      } else if (
        scrollPosition >= aboutMeRef.current.offsetTop &&
        scrollPosition < skillsRef.current.offsetTop
      ) {
        setSelectedTab("About Me");
      } else if (
        scrollPosition >= skillsRef.current.offsetTop &&
        scrollPosition < contactRef.current.offsetTop
      ) {
        setSelectedTab("Skills");
      } else if (
        scrollPosition >= contactRef.current.offsetTop &&
        scrollPosition < resumeRef.current.offsetTop
      ) {
        setSelectedTab("Contact");
      } else if (scrollPosition >= resumeRef.current.offsetTop) {
        setSelectedTab("Resume");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <div className="navigation-bar">
        <div className="profile">
          <div className="photo">
            <img src={ekimCoskun} alt="ekimcoskun" />
          </div>
          <p>Ekim Coskun</p>
          <div className="navigation-footer">
            <AiFillGithub
              color="white"
              size={"30px"}
              onClick={() => window.open("https://github.com/ekimcoskun", "_blank")}
              className="icon"
            />
            <AiFillFacebook
              color="white"
              size={"30px"}
              onClick={() => window.open("https://www.facebook.com/trailer07", "_blank")}
              className="icon"
            />
            <AiOutlineInstagram
              color="white"
              size={"30px"}
              onClick={() => window.open("https://www.instagram.com/ekimcoskun", "_blank")}
            />
            <AiFillLinkedin
              color="white"
              size={"30px"}
              onClick={() => window.open("https://www.linkedin.com/in/ekimcoskun/", "_blank")}
              className="icon"
            />
            <AiFillTwitterCircle
              color="white"
              size={"30px"}
              onClick={() => window.open("https://twitter.com/ekim_coskun", "_blank")}
              className="icon"
            />
          </div>
        </div>
        <div className="tabs">
          <p
            onClick={() => handleTabClick("Home")}
            className={selectedTab === "Home" ? "selected" : ""}
          >
            Home
          </p>
          <p
            onClick={() => handleTabClick("About Me")}
            className={selectedTab === "About Me" ? "selected" : ""}
          >
            About Me
          </p>
          <p
            onClick={() => handleTabClick("Skills")}
            className={selectedTab === "Skills" ? "selected" : ""}
          >
            Skills
          </p>
          <p
            onClick={() => handleTabClick("Contact")}
            className={selectedTab === "Contact" ? "selected" : ""}
          >
            Contact
          </p>
          <p
            onClick={() => handleTabClick("Resume")}
            className={selectedTab === "Resume" ? "selected" : ""}
          >
            Resume
          </p>
        </div>
      </div>
      <div className="showing">
        <div ref={homeRef}>
          <Home />
        </div>
        <div ref={aboutMeRef}>
          <AboutMe />
        </div>
        <div ref={skillsRef}>
          <Skills />
        </div>
        <div ref={contactRef}>
          <Contact />
        </div>
        <div ref={resumeRef}>
          <Resume />
        </div>
      </div>
    </div>
  );
}

export default App;

import { useCallback, useState } from "react";
import "./App.css";
import Home from "./components/navigationTabs/Home";
import AboutMe from "./components/navigationTabs/AboutMe";
import Skills from "./components/navigationTabs/Skills";
import Contact from "./components/navigationTabs/Contact";
import Resume from "./components/navigationTabs/Resume";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  const renderComponent = useCallback(() => {
    switch (selectedTab) {
      case "Home":
        return <Home />;
      case "About Me":
        return <AboutMe />;
      case "Skills":
        return <Skills />;
      case "Contact":
        return <Contact />;
      case "Resume":
        return <Resume />;
      default:
        return <Home />;
    }
  }, [selectedTab]);
  return (
    <div className="App">
      <div className="navigation-bar">
        <div className="tabs">
          <p onClick={() => setSelectedTab("Home")}>Home</p>
          <p onClick={() => setSelectedTab("About Me")}>About Me</p>
          <p onClick={() => setSelectedTab("Skills")}>Skills</p>
          <p onClick={() => setSelectedTab("Contact")}>Contact</p>
          <p onClick={() => setSelectedTab("Resume")}>Resume</p>
        </div>
      </div>
      <div className="showing">
        <Home />
        <AboutMe />
        <Skills />
        <Contact />
        <Resume />
      </div>
    </div>
  );
}

export default App;

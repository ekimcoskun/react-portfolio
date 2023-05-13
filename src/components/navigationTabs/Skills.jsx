import javascript from "../../assets/skills/javascript.png";
import react from "../../assets/skills/react.png";
import html from "../../assets/skills/html.png";
import css from "../../assets/skills/css.png";
import nodejs from "../../assets/skills/nodejs.png";
import expressjs from "../../assets/skills/expressjs.png";
import mongodb from "../../assets/skills/mongodb.png";
import mysql from "../../assets/skills/mysql.png";
import git from "../../assets/skills/git.png";
import cplus from "../../assets/skills/c++.png";
import typescript from "../../assets/skills/typescript.png";
import kafka from "../../assets/skills/kafka.png";
import shopify from "../../assets/skills/shopify.png";
import javaspring from "../../assets/skills/javaspring.png";
import java from "../../assets/skills/java.png";
function Skills() {
  return (
    <div className="page-container">
      <div className="skills-container">
        <p className="text-title">Skills</p>
        <div className="skill-logos">
          <img className="skill-logo" src={javascript} alt="javascript" />
          <img className="skill-logo" src={react} alt="react" />
          <img className="skill-logo" src={html} alt="html" />
          <img className="skill-logo" src={css} alt="css" />
          <img className="skill-logo" src={nodejs} alt="nodejs" />
          <img className="skill-logo" src={expressjs} alt="expressjs" />
          <img className="skill-logo" src={mongodb} alt="mongodb" />
          <img className="skill-logo" src={mysql} alt="mysql" />
          <img className="skill-logo" src={git} alt="git" />
          <img className="skill-logo" src={cplus} alt="c++" />
          <img className="skill-logo" src={typescript} alt="typescript" />
          <img className="skill-logo" src={kafka} alt="kafka" />
          <img className="skill-logo" src={shopify} alt="shopify" />
          <img className="skill-logo" src={javaspring} alt="javaspring" />
          <img className="skill-logo" src={java} alt="java" />
        </div>
      </div>
    </div>
  );
}

export default Skills;

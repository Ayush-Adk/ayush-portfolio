import React from "react";
import csharp from '../../assets/csharp.png';
import java from '../../assets/java.png';
import js from '../../assets/js.png';
import python from '../../assets/python.png';
import html from '../../assets/html.png';
import css from '../../assets/css.png';
import tailwind from '../../assets/tailwind.png';
import react from '../../assets/react.png';
import nodejs from '../../assets/nodejs.png';
import express from '../../assets/Express-JS-logo.png';onabort
import mongodb from '../../assets/mongodb.png';
import typescript from '../../assets/ts.png';

import "./Skills.css";

function Skills() {
  return (
    <div className="skills">
      <h1>My Skills</h1>
      <div className="cards">
        <h2>Programming Languages</h2>
        <div className="p-languages">
          <div className="card"><img src={csharp} alt="C#" className="csharp" /></div>
          <div className="card"><img src={java} alt="Java" className="java" /></div>
          <div className="card"><img src={js} alt="JavaScript" className="js" /></div>
          <div className="card"><img src={python} alt="Python" className="python" /></div>
        </div>

        <h2>FrontEnd Development</h2>
        <div className="frontend">
          <div className="card"><img src={html} alt="HTML" className="html" /></div>
          <div className="card"><img src={css} alt="CSS" className="css" /></div>
          <div className="card"><img src={tailwind} alt="Tailwind" className="tailwind" /></div>
          <div className="card"><img src={react} alt="React" className="react" /></div>
        </div>

        <h2>BackEnd Development</h2>
        <div className="backend">
          <div className="card"><img src={nodejs} alt="Node.js" className="nodejs" /></div>
          <div className="card"><img src={express} alt="Express.js" className="express" /></div>
          <div className="card"><img src={mongodb} alt="MongoDB" className="mongodb" /></div>
          <div className="card"><img src={typescript} alt="TypeScript" className="typescript" /></div>
        </div>
      </div>
    </div>
  );
}

export default Skills;

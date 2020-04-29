import React from "react";
import { Link } from "gatsby";
import "../../css/global.css";
import "../../css/reset.css";
import "../../css/type.css";
import Layout from "../layout/layout";
import smiley from "../../images/smileyFace.svg";
import arrowDown from "../../images/arrowDown.svg";
import Pixelator from "../pixelator/pixelator";
import Fade from "react-reveal/Fade";
import "./hero.css";

export default (props) => (
  <>
    <Layout rows={[6, 6, 6]}>
      <Fade delay={1200} duration={350}>
        <main className="hero">
          <p className="hero__brow">MICA GD BFA 2020 Degree Show</p>
          <header className="hero__lead--wrapper">
            <h1 className="hero__lead">
              <Pixelator content="Pixelation" />
              <img
                src={smiley}
                alt="Smiley face"
                className="hero__smiley"
                align="middle"
              />
            </h1>
          </header>
          <h4 className="hero__paragraph">
          Pixelation is a portal between 75 students' new workspaces and their degree projects. We invite you to explore the student-led web exhibition for MICA's Graphic Design BFA Class of 2020.
          </h4>
        </main>
      </Fade>

      <Fade delay={1500} duration={350}>
        <aside className="linkDown">
          <div className="arrowDown--wrapper">
            <img src={arrowDown} alt="" className="arrowDown" />
          </div>
        </aside>
      </Fade>
    </Layout>
  </>
);

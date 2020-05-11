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

function scrollToSearch() {
  document.getElementById("searchScrollPoint").scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default (props) => (
  <>
    <Layout rows={[7, 7, 6]}>
      <Fade delay={1200} duration={350}>
        <main className="hero">
          <p className="hero__brow">MICA GD BFA 2020 Degree Show</p>
          <header className="hero__lead--wrapper">
            <h1 className="hero__lead">
              Pi<span className="header__txt--pixelate">X</span>elation
              <img
                src={smiley}
                alt="Smiley face"
                className="hero__smiley"
                align="middle"
              />
            </h1>
          </header>
          <h4 className="hero__paragraph">
            Pixelation, our MICA Artwalk Exhibition, is a portal between the 75 graduating student's new workspaces and their degree projects. We invite you to explore our webxhibition, a self-initiated and student-led website by MICA's Class of 2020 in the BFA Graphic Design program.
          </h4>
        </main>
      </Fade>

      <Fade delay={1500} duration={350}>
        <aside className="linkDown">
          <div onClick={() => scrollToSearch()} className="arrowDown--wrapper">
            <img src={arrowDown} alt="" className="arrowDown" />
          </div>
        </aside>
      </Fade>
    </Layout>
  </>
);

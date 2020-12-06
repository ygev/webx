import React from "react";
import "../../css/global.css";
import "../../css/reset.css";
import "../../css/type.css";
import Layout from "../layout/layout";
import smiley from "../../images/smileyFace.svg";
import arrowDown from "../../images/arrowDown.svg";
import Fade from "react-reveal/Fade";
import "./hero.css";

function scrollToSearch() {
  document.getElementById("ourPixels").scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default (props) => (
  <>
  <div className="sucker__slipper">
    <Layout rows={[8, 7, 6]}>
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
            Pixelation, the title of our MICA Artwalk Exhibition (Baltimore's largest display of visual art), is a portal between the 75 graduating students' new workspaces and their degree projects. We invite you to explore our webxhibition, a self-initiated and student-led website by MICA's Class of 2020 in the BFA Graphic Design program.
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
    <div id="ourPixels"></div>
  </div>
    </>
);

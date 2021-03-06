import React from "react";
import { Link } from "gatsby";
import "../../css/global.css";
import "../../css/reset.css";
import "../../css/type.css";
import Layout from "../layout/layout";
import heart from "../../images/heart.svg";
import arrowDown from "../../images/arrowDown.svg";
import Pixelator from "../pixelator/pixelator";
import Fade from "react-reveal/Fade";
import "./aboutHero.css";

function scrollToGallery() {
  document
    .getElementById("firstImage")
    .scrollIntoView({ behavior: "smooth", block: "start" });
}

export default (props) => (
  <>
    <Layout rows={[7, 6, 6]}>
      <Fade delay={1200} duration={500}>
        <main className="aboutHero">
          <header className="aboutHero__lead--wrapper">
            <h1 className="aboutHero__lead">
              <Pixelator content="Our Story" />
              <img
                src={heart}
                alt="Heart"
                className="hero__smiley"
                align="middle"
              />
            </h1>
          </header>
          <h4 className="aboutHero__paragraph">
            Historically, MICA's Artwalk Exhibition has been a physical space
            for viewers to come in and experience in-person degree projects by
            our graduating class. Due to COVID-19, this pandemic rejuvenated a
            team of graduating students in the BFA Graphic Design program to
            spearhead, lead, and invent this alternative virtual exhibition for
            their class.
          </h4>
          <p className="aboutHero__social">
            Follow us on Instagram{" "}
            <a
              href={"https://www.instagram.com/mica_gd/?hl=en"}
              className="aboutHero__link"
            >
              @mica_gd
            </a>
          </p>
          <p className="aboutHero__social">Tag us{" "} 
            <a
              href={"https://www.instagram.com/explore/tags/webxhibition/?hl=en"}
              className="aboutHero__link"
            >
              #webxhibition
            </a>
            {"      "}
            <a
              href={
                "https://www.instagram.com/explore/tags/micapixelation/?hl=en"
              }
              className="aboutHero__link"
            >
              #micapixelation
            </a>
            {"      "}
            <a
              href={
                "https://www.instagram.com/explore/tags/micagd2020/?hl=en"
              }
              className="aboutHero__link"
            >
              #micagd2020
            </a>
            {"      "}
            <a
              href={
                "https://www.instagram.com/explore/tags/micaartwalk2020/?hl=en"
              }
              className="aboutHero__link"
            >
              #micaartwalk2020
            </a>
          </p>
        </main>
      </Fade>

      <Fade delay={1500} duration={500}>
        <aside className="aboutLinkDown">
          <div onClick={() => scrollToGallery()} className="arrowDown--wrapper">
            <img src={arrowDown} alt="" className="arrowDown" />
          </div>
        </aside>
      </Fade>
    </Layout>
  </>
);

import React from "react";
import { Link } from "gatsby";
import "../../css/global.css";
import "../../css/reset.css";
import "../../css/type.css";
import Layout from "../layout/layout";
import Linkify from 'react-linkify';
import heart from "../../images/heart.svg";
import arrowDown from "../../images/arrowDown.svg";
import Pixelator from "../pixelator/pixelator";
import Fade from "react-reveal/Fade";
import "./aboutHero.css";

export default (props) => (
  <>
    <Layout rows={[6, 6, 6]}>
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
          Historically, MICA's Artwalk Exhibition has been a physical space for viewers to come in and experience in-person degree projects by our graduating class. Due to COVID-19, this pandemic rejuvenated a team of graduating students in the BFA Graphic Design program to spearhead, lead, and invent this alternative virtual exhibition for their class.{" "}
        </h4>
        </main>
      </Fade>
    </Layout>
  </>
);

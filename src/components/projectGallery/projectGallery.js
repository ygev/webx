import React from "react"
import { Link } from "gatsby"
import Layout from "../layout/layout"
import Pixelator from "../pixelator/pixelator"
import "../../css/global.css"
import "../../css/reset.css"
import "../../css/type.css"
import "./projectGallery.css"
import imgA from "../../images/_sample-data/projects/final-1.png"
import imgB from "../../images/_sample-data/projects/final-2.png"
import imgC from "../../images/_sample-data/projects/final-3.png"
import Fade from 'react-reveal/Fade';

export default props => (
    <>
    <Fade delay={0} duration={350} bottom>
          <section className="projectGallery">
              <img src={imgA} alt="" className="projectGallery__item"/>
              <img src={imgB} alt="" className="projectGallery__item"/>
              <img src={imgC} alt="" className="projectGallery__item"/>
          </section>
    </Fade>
    </>
);  

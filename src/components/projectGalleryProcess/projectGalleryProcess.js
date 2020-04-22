import React from "react"
import { Link } from "gatsby"
import Layout from "../layout/layout"
import Pixelator from "../pixelator/pixelator"
import "../../css/global.css"
import "../../css/reset.css"
import "../../css/type.css"
import "./projectGalleryProcess.css"
import imgA from "../../images/_sample-data/projects/process-1.png"
import imgB from "../../images/_sample-data/projects/process-2.png"
import imgC from "../../images/_sample-data/projects/process-3.png"
import imgD from "../../images/_sample-data/projects/process-4.png"
import Fade from 'react-reveal/Fade';

export default props => (
    <>
    <Fade delay={0} duration={350} bottom>
          <section className="projectGalleryProcess">
              <img src={imgA} alt="" className="projectGalleryProcess__item"/>
              <img src={imgB} alt="" className="projectGalleryProcess__item"/>
              <img src={imgC} alt="" className="projectGalleryProcess__item"/>
              <img src={imgD} alt="" className="projectGalleryProcess__item"/>
          </section>
    </Fade>
    </>
);  

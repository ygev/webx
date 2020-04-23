import React from "react"
import { Link } from "gatsby"
import Layout from "../layout/layout"
import Pixelator from "../pixelator/pixelator"
import "../../css/global.css"
import "../../css/reset.css"
import "../../css/type.css"
import "./projectGalleryProcess.css"
import Fade from 'react-reveal/Fade';

export default props => (
    <>
    <Fade delay={0} duration={350} bottom>
          <section className="projectGalleryProcess">
              <img src={props.processImgA} alt="" className="projectGalleryProcess__item"/>
              <img src={props.processImgB} alt="" className="projectGalleryProcess__item"/>
              <img src={props.processImgC} alt="" className="projectGalleryProcess__item"/>
              <img src={props.processImgD} alt="" className="projectGalleryProcess__item"/>
          </section>
    </Fade>
    </>
);  

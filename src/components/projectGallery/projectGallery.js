import React from "react"
import { Link } from "gatsby"
import Layout from "../layout/layout"
import Pixelator from "../pixelator/pixelator"
import "../../css/global.css"
import "../../css/reset.css"
import "../../css/type.css"
import "./projectGallery.css"
import Fade from 'react-reveal/Fade';

export default props => (
    <>
          <section className="projectGallery">
              <img src={props.projectImgA} alt="" className="projectGallery__item"/>
              <img src={props.projectImgB} alt="" className="projectGallery__item"/>
              <img src={props.projectImgC} alt="" className="projectGallery__item"/>
              <img src={props.projectImgA} alt="" className="projectGallery__item"/>
              <img src={props.projectImgB} alt="" className="projectGallery__item"/>
              <img src={props.projectImgC} alt="" className="projectGallery__item"/>
          </section>
    </>
);  

import React from "react"
import { Link } from "gatsby"
import Layout from "../layout/layout"
import "../../css/global.css"
import "../../css/reset.css"
import "../../css/type.css"
import "./projectContent.css"
import Fade from 'react-reveal/Fade';
import { Slide } from 'react-slideshow-image';

const slideImages = [
    "../../images/_sample-data/projects/final-1.png",
    "../../images/_sample-data/projects/final-2.png",
    "../../images/_sample-data/projects/final-3.png"
];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true
}

export default (props) => (
    <>
    {/* <Layout rows={[0, 1, 1]}> */}
        <Slide {...properties}>
            <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
                <span>Slide 1</span>
            </div>
            </div>
            <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
                <span>Slide 2</span>
            </div>
            </div>
            <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
                <span>Slide 3</span>
            </div>
            </div>
        </Slide>
    {/* </Layout> */}
    </>
)
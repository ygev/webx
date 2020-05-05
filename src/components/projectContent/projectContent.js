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
    "https://via.placeholder.com/500/11EDD3/000.png",
    "https://via.placeholder.com/500/11EDD3/000.png",
    "https://via.placeholder.com/500/11EDD3/000.png"
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
        <Slide {...properties}>
            <div className="each-slide">
                <div style={{'backgroundImage': `url(${slideImages[0]})`}}></div>
            </div>
            <div className="each-slide">
                <div style={{'backgroundImage': `url(${slideImages[1]})`}}></div>
            </div>
            <div className="each-slide">
                <div style={{'backgroundImage': `url(${slideImages[2]})`}}></div>
            </div>
        </Slide>
        
        <Layout rows={[1, 1, 1]}>
            <h4 className="project__label project__label--outcome project__label--active">Outcome</h4>
            <h4 className="project__label project__label--process project__label--inactive">Process</h4>
        </Layout>
            <p className="project__text project__text--outcome">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat elit, consequat habitasse convallis. Tempus vitae ac, nulla sed massa, tempor. Velit maecenas tortor quis consequat elementum commodo et. Nulla egestas non sagittis, aliquam. Mauris, tincidunt nulla ut arcu egestas suspendisse ipsum, ornare mattis. Placerat pharetra, viverra habitant fringilla nec odio maecenas lectus faucibus. Facilisis sem mauris, ullamcorper senectus. Sed quisque pulvinar id tortor, euismod. Sapien arcu nisi tristique pharetra in. Pretium posuere sem faucibus adipiscing enim nulla velit se ipsum, ornare  enim, mae.</p>
    </>
)
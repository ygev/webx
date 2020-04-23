import React from "react"
import { Link } from "gatsby"
import Layout from "../layout/layout"
import Pixelator from "../pixelator/pixelator"
import "../../css/global.css"
import "../../css/reset.css"
import "../../css/type.css"
import "./projectPreFooter.css"
import arrowLeft from "../../images/arrowLeft.svg"
import randomizerPixel from "../../images/randomizer--pixel.svg"
import Fade from 'react-reveal/Fade'

export default props => (
    <>
        <Layout rows={[2, 2, 2]}>
        <Fade delay={500} duration={500}>
                <section className="projectPreFooter__back--wrapper">
                    <Link to="/">
                <section className="projectPreFooter__back--wrapper">
                        <img src={arrowLeft} alt="Go Back to the Home Page" className="projectPreFooter__back"/>
                </section>
                    </Link>
                </section>
        </Fade>
        <Fade delay={800} duration={500}>
                <section className="projectPreFooter__random--wrapper">
                    <h3 className="projectPreFooter__random--txt"><Pixelator content="Random Pixel" /></h3>
                    <div className="projectPreFooter__random--imgwrapper">
                        <img src={randomizerPixel} alt="" className="projectPreFooter__random--img"/>
                    </div>
                </section>
        </Fade>
        </Layout>    
    </>
);  

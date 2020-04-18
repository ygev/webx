import React from "react"
import { Link } from "gatsby"
import "../../css/global.css"
import "../../css/reset.css"
import "../../css/type.css"
import Layout from "../layout/layout"
import smiley from "../../images/smileyFace.svg" 
import arrowDown from "../../images/arrowDown.svg" 
import Pixelator from "../pixelator/pixelator"
import Fade from 'react-reveal/Fade';
import "./hero.css"

export default props => (
  <>
    <Layout rows="6">
        <Fade delay={500} duration={350} left>
            <main className="hero">
                <p className="hero__brow">MICA GD BFA 2020 Degree Show</p>
                <header className="hero__lead--wrapper">
                    <h1 className="hero__lead"><Pixelator content="Welcome to Our Webxhibition"/><img src={smiley} alt="Smiley face" className="hero__smiley" align="middle"/></h1>
                </header>
                <h4 className="hero__paragraph">Welcome to our MICA Graphic Design degree show consisting of over 70 students of Class of 2020.  We are the pixels of MICA grid!</h4>
            </main>
        </Fade>

        <Fade delay={500} duration={350} right>
            <aside className="linkDown"> 
                <div className="arrowDown--wrapper">
                    <img src={arrowDown} alt="" className="arrowDown"/>
                </div>
            </aside>
        </Fade>
    </Layout>
  </>
);

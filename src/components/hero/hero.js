import React from "react"
import { Link } from "gatsby"
import "../../css/global.css"
import "../../css/reset.css"
import "../../css/type.css"
import Layout from "../layout/layout"
import smiley from "../../images/smileyFace.svg" 
import arrowLeft from "../../images/arrowLeft.svg" 
// import Pixelator from "../pixelator/pixelator"
import "./hero.css"

export default props => (
  <>
    <Layout rows="8">
        <main className="hero">
            <p className="hero__brow">MICA GD BFA 2020 Degree Show</p>
            <header className="hero__lead--wrapper">
                <h1 className="hero__lead">Pixels</h1>
                <img className="hero__smiley" src={smiley} alt=""/>
            </header>
            <h4 className="hero__paragraph">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh</h4>
        </main>
        <aside className="linkLeft"> 
            <Link to=""><h3 className="linkLeft__txt">See Our Story</h3></Link>
            <div className="arrowLeft--wrapper">
                <img src={arrowLeft} alt="" className="arrowLeft"/>
            </div>
        </aside>
    </Layout>
  </>
);

import React from "react"
import { Link } from "gatsby"
import Pixelator from "../pixelator/pixelator"
import "../../css/global.css"
import "../../css/reset.css"
import "../../css/type.css"
import "./search.css"
import randomize from "../../images/randomize.svg"
import profile from "../../images/_sample-data/profiles/yana.png"
import previewA from "../../images/_sample-data/projects--previews/mood.png"
import previewB from "../../images/_sample-data/projects--previews/blur.png"
import arrowLeftTeal from "../../images/arrowLeft--teal.svg"

export default props => (
  <>
    <section className="search__title">
        <h3 className="search__title--txt"><Pixelator content="Sort by Last Name"/></h3>
    </section>

    <div className="glossary--scroller">
        <section className="glossary">
            <div className="glossary__item glossary__item--active glossary__randomize">
                <img src={randomize} alt="" className="glossay__randomize--img"/>
            </div>
            <p className="glossary__item glossary__letter">A</p>
            <p className="glossary__item glossary__letter glossary__letter--ghost">B</p>
            <p className="glossary__item glossary__letter">C</p>
            <p className="glossary__item glossary__letter">D</p>
            <p className="glossary__item glossary__letter">E</p>
            <p className="glossary__item glossary__letter">F</p>
            <p className="glossary__item glossary__letter">G</p>
            <p className="glossary__item glossary__letter">H</p>
            <p className="glossary__item glossary__letter">I</p>
            <p className="glossary__item glossary__letter">J</p>
        </section>
    </div>

    <section className="photo__grid">
        <img src={previewA} alt="" className="photo__grid--img"/>
        <img src={previewB} alt="" className="photo__grid--img"/>
        <img src={previewB} alt="" className="photo__grid--img"/>
        <img src={previewA} alt="" className="photo__grid--img"/>
        <img src={previewA} alt="" className="photo__grid--img"/>
        <img src={previewB} alt="" className="photo__grid--img"/>
    </section>

    <section className="cta">
        <div className="cta__txt">
            <h3 className="cta__name"><Pixelator content="Amanda Yeh"/></h3>
            <h4 className="cta__project">My Leetl Project</h4>
        </div>
        <img src={arrowLeftTeal} alt="" className="cta__arrow"/>
    </section>
  </>
);  

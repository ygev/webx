import React from "react"
import { Link } from "gatsby"
import Pixelator from "../pixelator/pixelator"
import "../../css/global.css"
import "../../css/reset.css"
import "../../css/type.css"
import "./search.css"
import randomize from "../../images/randomize.svg"
import profile from "../../images/_sample-data/profiles/tony.png"
import profilePlaceholder from "../../images/_sample-data/profiles/profile--placeholder.svg"
import previewA from "../../images/_sample-data/projects--previews/mood.png"
import previewB from "../../images/_sample-data/projects--previews/blur.png"
import arrowRightTeal from "../../images/arrowRight--teal.svg"

export default props => (
  <>
    <section className="searchglossary--wrapper">
        <div className="search__title">
            <h3 className="search__title--txt"><Pixelator content="Our Pixels"/></h3>
        </div>
        <div className="glossary--scroller">
            <section className="glossary">
                <div aria-label="Randomize Projects" className="glossary__item glossary__item--active glossary__randomize">
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
                <p className="glossary__item glossary__letter">K</p>
                <p className="glossary__item glossary__letter">L</p>
                <p className="glossary__item glossary__letter">M</p>
                <p className="glossary__item glossary__letter">N</p>
                <p className="glossary__item glossary__letter">O</p>
                <p className="glossary__item glossary__letter">P</p>
                <p className="glossary__item glossary__letter">R</p>
                <p className="glossary__item glossary__letter">S</p>
                <p className="glossary__item glossary__letter">T</p>
                <p className="glossary__item glossary__letter">U</p>
                <p className="glossary__item glossary__letter">V</p>
                <p className="glossary__item glossary__letter">W</p>
                <p className="glossary__item glossary__letter">X</p>
                <p className="glossary__item glossary__letter">Y</p>
                <p className="glossary__item glossary__letter">Z</p>
            </section>
        </div>
    </section>
    <div className="search__info--wrapper">
        <div className="search__desktop--wrapper">
            <section className="search__profile">
                <div className="search__profile--frame"></div>
                <img src={profilePlaceholder} alt="" className="search__profile--img"/>
            </section>
            <section className="search__name">
                <h3 className="cta__name"><Pixelator content="MIA KARLIN-CAPELLO"/></h3>
                <h4 className="cta__project">My Leetl Project</h4>
            </section>
        </div>
        <section className="photo__grid">
            <img src={previewA} alt="" className="photo__grid--img"/>
            <img src={previewB} alt="" className="photo__grid--img"/>
            <img src={previewB} alt="" className="photo__grid--img"/>
            <img src={previewA} alt="" className="photo__grid--img"/>
            <img src={previewA} alt="" className="photo__grid--img"/>
            <img src={previewB} alt="" className="photo__grid--img"/>
            <img src={previewB} alt="" className="photo__grid--img"/>
            <img src={previewA} alt="" className="photo__grid--img"/>
            <img src={previewB} alt="" className="photo__grid--img"/>
            <img src={previewA} alt="" className="photo__grid--img"/>
            <img src={previewB} alt="" className="photo__grid--img"/>
            <img src={previewA} alt="" className="photo__grid--img"/>
        </section>  
    </div>
    <section className="cta">
        <div className="cta__txt">
            <h3 className="cta__name"><Pixelator content="MIA KARLIN-CAPELLO"/></h3>
            <h4 className="cta__project">My Leetl Project</h4>
        </div>
        <img src={arrowRightTeal} alt="" className="cta__arrow"/>
    </section>
  </>
);  

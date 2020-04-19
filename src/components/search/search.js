import React from "react"
import { Link } from "gatsby"
import Pixelator from "../pixelator/pixelator"
import "../../css/global.css"
import "../../css/reset.css"
import "../../css/type.css"
import "./search.css"
import randomize from "../../images/randomize.svg"

export default props => (
  <>
    <section className="search__title">
        <h3 className="search__title--txt"><Pixelator content="Search by Last Name"/></h3>
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
  </>
);  

import React from "react"
import { Link } from "gatsby"
import "../../css/global.css"
import "../../css/reset.css"
import "../../css/type.css"
import Layout from "../layout/layout"
// import Pixelator from "../pixelator/pixelator"
import "./hero.css"

export default props => (
  <>
    <Layout rows="8">
        <main className="hero">
            <p className="hero__brow">MICA GD BFA 2020 Degree Show</p>
            <h1 className="hero__lead">Pixels</h1>
            <h4 className="hero__paragraph">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh</h4>
        </main>
    </Layout>
  </>
);

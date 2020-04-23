import React from "react"
import { Link } from "gatsby"
import Layout from "../layout/layout"
import Pixelator from "../pixelator/pixelator"
import "../../css/global.css"
import "../../css/reset.css"
import "../../css/type.css"
import "./projectTxt.css"
import Fade from 'react-reveal/Fade';

export default props => (
    <>
        <Layout rows={[3, 4, 3]}>
        <Fade delay={500} duration={350}>
          <section className="projectTxt">
            <p>{props.projectTxt}</p>
          </section>
        </Fade>
        </Layout>    
    </>
);  

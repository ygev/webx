import React from "react"
import { Link } from "gatsby"
import Layout from "../layout/layout"
import Pixelator from "../pixelator/pixelator"
import "../../css/global.css"
import "../../css/reset.css"
import "../../css/type.css"
import "./projectProcess.css"
import Fade from 'react-reveal/Fade';

export default props => (
    <>
        <Layout rows={[5, 5, 5]}>
        <Fade delay={500} duration={350}>
          <section className="projectProcess">
            <h3 className="projectProcess__title"><Pixelator content="How It's Made"/></h3>
            <p>{props.projectProcess}</p>
          </section>
          </Fade>
        </Layout>    
    </>
);  

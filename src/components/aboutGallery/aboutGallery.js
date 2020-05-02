import React from "react"
import { Link } from "gatsby"
import Layout from "../layout/layout"
import "../../css/global.css"
import "../../css/reset.css"
import "../../css/type.css"
import "./aboutGallery.css"
import Fade from 'react-reveal/Fade';

export default props => (
    <>
    <Fade delay={0} duration={350}>
        <Layout rows={[6, 6, 8]}>
          <section className="aboutGallery">
              <img src={props.img} alt="" className="aboutGallery__img"/>
          </section>
        </Layout>
    </Fade>
    </>
);

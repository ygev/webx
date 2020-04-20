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
        <Layout rows={[3, 3, 3]}>
        <Fade delay={500} duration={350} right>
          <section className="projectTxt">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat elit, consequat habitasse convallis. Tempus vitae ac, nulla sed massa, tempor. Velit maecenas tortor quis consequat elementum commodo et. Nulla egestas non sagittis, aliquam. Nulla egestas non sagittis, aliquam. Nulla egestas non sagittis, aliquam. Nulla egestas non sagittis, aliquam.</p>
          </section>
        </Fade>
        </Layout>    
    </>
);  

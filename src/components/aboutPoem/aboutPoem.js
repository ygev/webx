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
import "./aboutPoem.css"

export default props => (
  <>
    <Layout rows={[12, 12, 13]}>
        <Fade delay={500} duration={350} left>
            <section className="aboutPoem--wrapper">
                <h3 className="aboutPoem__title"><Pixelator content="Pixels"/></h3>
                <ul className="aboutPoem__poem">
                    <li className="aboutPoem__line"><p>A pixel within a vast universe.</p></li>
                    <br></br>
                    <li className="aboutPoem__line"><p>Not knowing what to do,</p></li>
                    <li className="aboutPoem__line"><p>wanders around aimlessly.</p></li>
                    <br></br>
                    <li className="aboutPoem__line"><p>Worrying about</p></li>
                    <li className="aboutPoem__line"><p>its importance,</p></li>
                    <li className="aboutPoem__line"><p>its placement,</p></li>
                    <li className="aboutPoem__line"><p>its purpose,</p></li>
                    <li className="aboutPoem__line"><p>within this cruel</p></li>
                    <li className="aboutPoem__line"><p>big bad world.</p></li>
                    <br></br>
                    <li className="aboutPoem__line"><p>But one day,</p></li>
                    <li className="aboutPoem__line"><p>the pixel felt assured</p></li>
                    <li className="aboutPoem__line"><p>knowing that the pixel</p></li>
                    <li className="aboutPoem__line"><p>was not alone.</p></li>
                    <br></br>
                    <li className="aboutPoem__line"><p>Because without the other pixels,</p></li>
                    <li className="aboutPoem__line"><p>the single block of pixel was nothing.</p></li>
                    <br></br>
                    <li className="aboutPoem__line"><p>The world became full</p></li>
                    <li className="aboutPoem__line"><p>when all the pixels gathered together</p></li>
                    <li className="aboutPoem__line"><p>to create a complete picture.</p></li>
                    <br></br>
                    <li className="aboutPoem__line"><p>Our goals, our values, our beauty, </p></li>
                    <li className="aboutPoem__line"><p>our people, us, you, and me,</p></li>
                    <li className="aboutPoem__line"><p>extend out of the two-dimensional </p></li>
                    <li className="aboutPoem__line"><p>plane and into infinity.</p></li>
                    <br></br>
                    <li className="aboutPoem__line"><p>Because together, </p></li>
                    <li className="aboutPoem__line"><p>We can share eternal love</p></li>
                    <li className="aboutPoem__line"><p>and wholesomeness to each other</p></li>
                    <li className="aboutPoem__line"><p>to help create a beautiful world.</p></li>
                    <br></br>
                    <li className="aboutPoem__line"><p>Together.</p></li>
                </ul>
            </section>
        </Fade>
    </Layout>
  </>
);

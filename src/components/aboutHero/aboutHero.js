import React from "react"
import { Link } from "gatsby"
import "../../css/global.css"
import "../../css/reset.css"
import "../../css/type.css"
import Layout from "../layout/layout"
import heart from "../../images/heart.svg" 
import arrowDown from "../../images/arrowDown.svg" 
import Pixelator from "../pixelator/pixelator"
import Fade from 'react-reveal/Fade'
import "./aboutHero.css"

export default props => (
  <>
    <Layout rows={[6, 6, 6]}>
        <Fade delay={1200} duration={500}>
            <main className="aboutHero">
                <header className="aboutHero__lead--wrapper">
                    <h1 className="aboutHero__lead"><Pixelator content="Our Story"/><img src={heart} alt="Heart" className="hero__smiley" align="middle"/></h1>
                </header>
                <h4 className="aboutHero__paragraph">Mesothelioma👏is👏a👏rare👏cancer👏linked👏to👏asbestos👏exposure👏Exposure👏to👏asbestos👏in👏the👏Navy👏shipyards👏mills👏heating👏construction👏or👏the👏automotive👏industries👏may👏put👏you👏at👏risk👏please👏don't👏wait👏call👏1-800-99 LAW USA👏today👏for👏a👏free👏legal👏consultation👏and👏financial👏information👏packet👏mesothelioma👏patients👏call👏NOW👏</h4>
            </main>
        </Fade>

        <Fade delay={1500} duration={500}>
            <aside className="aboutLinkDown"> 
                <div className="arrowDown--wrapper">
                    <img src={arrowDown} alt="" className="arrowDown"/>
                </div>
            </aside>
        </Fade>
    </Layout>
  </>
);

import React from "react"
import Layout from "../layout/layout"
import Pixelator from "../pixelator/pixelator"
import "../../css/global.css"
import "../../css/reset.css"
import "../../css/type.css"
import "./projectHero.css"
import projCover from "../../images/_sample-data/projects/cover.png"
import iconWebsite from "../../images/linkWebsite.svg"
import iconInstagram from "../../images/linkInstagram.svg"
import Fade from 'react-reveal/Fade';

export default props => (
    <>
        <Layout rows={[9, 10, 6]}>
        <Fade delay={500} duration={350} left>
            <img src={projCover} alt="" className="projectHero__cover"/>
            <section className="projectHero__txt">
                <div className="projectHero__info">
                    <h3 className="projectHero__project"><Pixelator content="Sketch Cluse"/></h3>
                    <h4 className="projectHero__name">Yana Gevorgyan</h4>
                </div>
                <div className="projectHero__social">
                    <div className="projectHero__link--wrapper">
                        <img src={iconWebsite} alt="Website Link" className="projectHero__link--icon"/>
                        <p className="projectHero__link--paragrapher"><a href="htps://www.kimtony.com" className="projectHero__link">kimtony.com</a></p>
                    </div>
                    <div className="projectHero__link--wrapper">
                        <img src={iconInstagram} alt="Instagram Link" className="projectHero__link--icon"/>
                        <p className="projectHero__link--paragrapher"><a href="httos://instagram.com/1tonxyz" className="projectHero__link">@1tonxyz</a></p>
                    </div>
                </div>
            </section>
        </Fade>
        </Layout>    
    </>
);  

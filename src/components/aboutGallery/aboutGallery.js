import React from "react"
import { Link } from "gatsby"
import Layout from "../layout/layout"
import "../../css/global.css"
import "../../css/reset.css"
import "../../css/type.css"
import "./aboutGallery.css"
import quotations from "../../images/about/quotations.svg";
import img1 from "../../images/about/1.png";
import img2 from "../../images/about/2.png";
import img3 from "../../images/about/3.png";
import img4 from "../../images/about/4.png";
import img5 from "../../images/about/5.png";
import img6 from "../../images/about/6.png";
import img7 from "../../images/about/7.png";
import img8 from "../../images/about/8.png";
import img9 from "../../images/about/9.png";
import img10 from "../../images/about/10.png";
import img11 from "../../images/about/11.png";
import img12 from "../../images/about/12.png";
import img13 from "../../images/about/13.png";
import img14 from "../../images/about/14.png";
import img15 from "../../images/about/15.png";
import img16 from "../../images/about/16.png";
import img17 from "../../images/about/17.png";
import Fade from 'react-reveal/Fade';

export default props => (
    <>
    <Fade delay={0} duration={350}>
        <Layout rows={[100,47,64]}>
            <img src={img1} alt="" className="aboutGallery__img aboutGallery__img--1 "/>
            <img src={img2} alt="" className="aboutGallery__img aboutGallery__img--2 "/>
            <section className="aboutGallery__quote aboutGallery__quote--1">
                <img src={quotations} alt="" className="aboutGallery__quote--img"/>
                <div className="aboutGallery__quote--wrapper">
                    <p className="aboutGallery__quote--text">Because without the other pixels, the single block of pixel is nothing.</p>
                    <p className="aboutGallery__quote--name">Tony Kim</p>
                </div>
            </section>
            <section className="aboutGallery__quote aboutGallery__quote--2">
                <img src={quotations} alt="" className="aboutGallery__quote--img"/>
                <div className="aboutGallery__quote--wrapper">
                    <p className="aboutGallery__quote--text">The thing that has inspired me most during my time here are my peers both in GD and out! I feel like I would not have been the designer I am today without the healthy internal competition I had to strive to be on the same level as my cohorts! Everyone here is such a talented artist and designer and being around this energy has been absolutely incredible, I look up to a lot of people here and I don’t think we will ever experience an environment like this again so we should savor it.</p>
                    <p className="aboutGallery__quote--name">Xena Brar</p>
                </div>
            </section>
            {/* <img src={img3} alt="" className="aboutGallery__img aboutGallery__img--3 "/> */}
            {/* <img src={img4} alt="" className="aboutGallery__img aboutGallery__img--4 "/> */}
            {/* <img src={img5} alt="" className="aboutGallery__img aboutGallery__img--5 "/> */}
            {/* <img src={img6} alt="" className="aboutGallery__img aboutGallery__img--6 "/> */}
            {/* <img src={img7} alt="" className="aboutGallery__img aboutGallery__img--7 "/> */}
            {/* <img src={img8} alt="" className="aboutGallery__img aboutGallery__img--8 "/> */}
            {/* <img src={img9} alt="" className="aboutGallery__img aboutGallery__img--9 "/> */}
            {/* <img src={img10} alt="" className="aboutGallery__img aboutGallery__img--10 "/> */}
            {/* <img src={img11} alt="" className="aboutGallery__img aboutGallery__img--11 "/> */}
            {/* <img src={img12} alt="" className="aboutGallery__img aboutGallery__img--12 "/> */}
            {/* <img src={img13} alt="" className="aboutGallery__img aboutGallery__img--13 "/> */}
            {/* <img src={img14} alt="" className="aboutGallery__img aboutGallery__img--14 "/> */}
            {/* <img src={img15} alt="" className="aboutGallery__img aboutGallery__img--15 "/> */}
            {/* <img src={img16} alt="" className="aboutGallery__img aboutGallery__img--16 "/> */}
            {/* <img src={img17} alt="" className="aboutGallery__img aboutGallery__img--17 "/> */}
        </Layout>
    </Fade>
    </>
);

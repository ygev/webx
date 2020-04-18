import React from "react"
import { Link } from "gatsby"
import Slide from 'react-reveal/Slide';
import "../../css/global.css"
import "../../css/reset.css"
import "../../css/type.css"
import "./header.css"

export default props => (
  <>
    <Slide bottom duration={200}>
       <Footer className="footer__wrapper">
        <div className="footer__link--wrapper">
           <Link to="">
               <h3 className="header__txt" data-letters="Pixels">Pixelation</h3>
           </Link>
           <Link to="">
               <h3 className="header__txt" data-letters="Our Story">Our Story</h3>
           </Link>
           <a href=""></a>
        </div>
       </Footer>
    </Slide>
  </>
);  

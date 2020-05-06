import React from "react"
import { Link } from "gatsby"
import Fade from 'react-reveal/Fade';
// import Pixelator from "../pixelator/pixelator"
import "../../css/global.css"
import "../../css/reset.css"
import "../../css/type.css"
import "./header.css"

export default props => (
  <>
    <Fade duration={1000}>
       <header className="header__wrapper">
           <Link to="/">
               <h3 className="header__txt">
                <span className="header__txt--pixelate">P</span>ixelation
              </h3>
           </Link>
           <Link to="/about">
               <h3 className="header__txt">
                <span className="header__txt--pixelate">A</span>bout
              </h3>
           </Link>
       </header>
    </Fade>
  </>
);  

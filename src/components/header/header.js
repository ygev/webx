import React from "react"
import { Link } from "gatsby"
import Slide from 'react-reveal/Slide';
import "../../css/global.css"
import "../../css/reset.css"
import "../../css/type.css"
import "./header.css"

export default props => (
  <>
    <Slide top duration={200}>
       <header className="header__wrapper">
           <Link to="">
               <h3 className="header__txt">Pixelation</h3>
           </Link>
           <Link to="">
               <h3 className="header__txt">Our Story</h3>
           </Link>
       </header>
    </Slide>
  </>
);  

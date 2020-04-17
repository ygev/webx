import React from "react"
import { Link } from "gatsby"
import "../../css/global.css"
import "../../css/reset.css"
import "../../css/type.css"
import "./header.css"

export default props => (
  <>
       <header className="header__wrapper">
           <Link to="">
               <h3 className="header__txt" data-letters="Pixels">Pixels</h3>
           </Link>
           <Link to="">
               <h3 className="header__txt" data-letters="Our Story">Our Story</h3>
           </Link>
       </header>
  </>
);  

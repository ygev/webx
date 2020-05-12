import React from "react"
import { Link } from "gatsby"
import Fade from 'react-reveal/Fade';
import "../../css/global.css"
import "../../css/reset.css"
import "../../css/type.css"
import navBar from "../../images/nav.svg";
import "./header.css"

export default props => (
  <>
    <Fade duration={1000}>
       <header className="header__wrapper">
           <Link to="/">
               <h3 aria-label="Pixelation: Home Page" className="header__txt header__txt--major">
                Pi<span className="header__txt--pixelate">X</span>elation
              </h3>
           </Link>
           <nav role="navigation" aria-label="Mobile Navigation" className="link__minor--mobile">
               <img src={navBar} alt="" className="link__minor--img"/>
           </nav>
           <section className="link__minor">
              <Link to="/">
                  <h3 aria-label="All Projects" className="header__txt header__txt--minor">
                    <span className="header__txt--pixelate">O</span>ur <span className="header__txt--pixelate">P</span>ixels
                  </h3>
              </Link>
              <Link to="/about">
                  <h3 aria-label="About Page" className="header__txt header__txt--minor">
                    <span className="header__txt--pixelate">O</span>ur <span className="header__txt--pixelate">S</span>tory
                  </h3>
              </Link>
            </section>
       </header>
    </Fade>
  </>
);  

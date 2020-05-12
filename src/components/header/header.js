import React from "react"
import { Link } from "gatsby"
import Fade from 'react-reveal/Fade';
import "../../css/global.css"
import "../../css/reset.css"
import "../../css/type.css"
import navBar from "../../images/nav.svg";
import "./header.css"

function toggleNav() {
  var navIcon = document.getElementsByClassName("link__minor--img")[0];
  var navSquare = document.getElementsByClassName("link__minor--mobile")[0];
  var headerText = document.getElementsByClassName("header__txt")[0];
  var headerWrapper = document.getElementsByClassName("header__wrapper")[0];
  if(navSquare.classList.contains("link__minor--mobile--inactive")){
    navSquare.classList.remove("link__minor--mobile--inactive")
    navIcon.classList.remove("link__minor--img--inactive");
    navSquare.classList.add("link__minor--mobile--active")
    navIcon.classList.add("link__minor--img--active");
    headerText.style.color = 'white';
    headerWrapper.style.backgroundColor = '#161616';
  } else {
    navSquare.classList.add("link__minor--mobile--inactive")
    navIcon.classList.add("link__minor--img--inactive");
    navSquare.classList.remove("link__minor--mobile--active")
    navIcon.classList.remove("link__minor--img--active");
    headerText.style.color = 'initial';
    headerWrapper.style.backgroundColor = 'initial';
  }
}

export default props => (
  <>
    <Fade duration={1000}>
       <header className="header__wrapper">
           <Link to="/">
               <h3 aria-label="Pixelation: Home Page" className="header__txt header__txt--major">
                Pi<span className="header__txt--pixelate">X</span>elation
              </h3>
           </Link>
           <nav onClick={() => toggleNav()} role="navigation" aria-label="Mobile Navigation" className="link__minor--mobile link__minor--mobile--inactive">
               <img src={navBar} alt="" className="link__minor--img link__minor--img--inactive"/>
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

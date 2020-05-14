import React from "react";
import SEO from "../components/seo";
import Header from "../components/header/header";
import Hero from "../components/hero/hero";
import Search from "../components/search/search";
import HomePreFooter from "../components/homePreFooter/homePreFooter";
import profilePlaceholder from "../images/_data/profiles/profile--placeholder.svg";
import Footer from "../components/footer/footer";




class Index extends React.Component {

  scrollOurPixels() {
    var hash = window.location.hash || "";
    if (hash === "#about"){
      console.log("i am still running")
      window.onload = function(){document.getElementById("searchScrollPoint").scrollIntoView({ behavior: 'smooth', block: 'start' });};
    }
  }

  render() {
    return (
      <>
        <SEO title="Pixelation" />
        <Header />
        <Hero />
        <Search studentName="Our Pixels" projectName="Pick a pixel to view." profilePicture={profilePlaceholder}/>
        <HomePreFooter />
        <Footer />
      </>
    );
  }
}

export default Index;

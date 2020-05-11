import React from "react"
import SEO from "../../components/seo"
import Header from "../../components/header/header"
import AboutHero from "../../components/aboutHero/aboutHero"
import AboutPoem from "../../components/aboutPoem/aboutPoem"
import AboutGallery from "../../components/aboutGallery/aboutGallery"
import ProjectPreFooter from "../../components/projectPreFooter/projectPreFooter"
import img1 from "../../images/about/1.png"
import img2 from "../../images/about/2.png"
import img3 from "../../images/about/3.png"
import img4 from "../../images/about/4.png"
import img5 from "../../images/about/5.png"
import Footer from "../../components/footer/footer"


class Index extends React.Component {
    render() {
      return (
            <>
                <SEO title="Our Story" />
                <Header />
                <AboutHero/>
                <AboutPoem/>
                <AboutGallery img={img1}/>
                <AboutGallery img={img2}/>
                <AboutGallery img={img3}/>
                <AboutGallery img={img4}/>
                <AboutGallery img={img5}/>
                <ProjectPreFooter/>
                <Footer/>
            </>
        )
    }
}


export default Index

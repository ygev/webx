import React from "react"
import SEO from "../../components/seo"
import Header from "../../components/header/header"
import AboutHero from "../../components/aboutHero/aboutHero"
import AboutPoem from "../../components/aboutPoem/aboutPoem"
import AboutGallery from "../../components/aboutGallery/aboutGallery"
import ProjectPreFooter from "../../components/projectPreFooter/projectPreFooter"
import Footer from "../../components/footer/footer"


class Index extends React.Component {
    render() {
      return (
            <>
                <SEO title="Our Story" />
                <Header />
                <AboutHero/>
                <AboutGallery />
                <ProjectPreFooter/>
                <Footer/>
            </>
        )
    }
}


export default Index

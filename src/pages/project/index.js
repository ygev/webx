import React from "react"
import SEO from "../../components/seo"
import Header from "../../components/header/header"
import ProjectHero from "../../components/projectHero/projectHero"
import ProjectTxt from "../../components/projectTxt/projectTxt"
import ProjectGallery from "../../components/projectGallery/projectGallery"
import ProjectProcess from "../../components/projectProcess/projectProcess"
import ProjectPreFooter from "../../components/projectPreFooter/projectPreFooter"
import Footer from "../../components/footer/footer"


class Index extends React.Component {
    render() {
      return (
            <>
                <SEO title="Project Name" />
                <Header />
                <ProjectHero />
                <ProjectTxt />
                <ProjectGallery />
                <ProjectProcess />
                <ProjectPreFooter />
                <Footer/>
            </>
        )
    }
}


export default Index

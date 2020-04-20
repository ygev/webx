import React from "react"
import SEO from "../../components/seo"
import Header from "../../components/header/header"
import ProjectHero from "../../components/projectHero/projectHero"
import ProjectTxt from "../../components/projectTxt/projectTxt"
import ProjectGallery from "../../components/projectGallery/projectGallery"
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
                <Footer/>
            </>
        )
    }
}


export default Index

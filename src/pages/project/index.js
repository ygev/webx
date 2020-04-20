import React from "react"
import SEO from "../../components/seo"
import Header from "../../components/header/header"
import ProjectHero from "../../components/projectHero/projectHero"
import Footer from "../../components/footer/footer"


class Index extends React.Component {
    render() {
      return (
            <>
                <SEO title="Pixelation" />
                <Header />
                <ProjectHero />
                <Footer/>
            </>
        )
    }
}


export default Index

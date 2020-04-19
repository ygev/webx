import React from "react"
import SEO from "../../components/seo"
import Header from "../../components/header/header"
import Hero from "../../components/hero/hero"
import Search from "../../components/search/search"
import Footer from "../../components/footer/footer"


class Index extends React.Component {
    render() {
      return (
            <>
                <SEO title="Pixelation" />
                <Header />
                <Hero/>
                <Search/>
                <Footer/>
            </>
        )
    }
}


export default Index

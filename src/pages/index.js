import React from "react"
import SEO from "../components/seo"
import Header from "../components/header/header"
import Hero from "../components/hero/hero"
import Search from "../components/search/search"
import Footer from "../components/footer/footer"

const Index = () => (
  <>
    <SEO title="Pixelation" />
    <Header />
    <Hero/>
    {/* <Search/> */}
    <Footer/>
  </>
)

export default Index

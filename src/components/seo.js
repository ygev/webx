import React from "react"
import { Helmet } from "react-helmet"


export default props =>  (
  <Helmet titleTemplate="%s · MICA GD 2020">
    <meta charSet="utf-8" />
    <title>{props.title}</title>
    <link rel="canonical" href="http://mysite.com/example" />
  </Helmet>
)
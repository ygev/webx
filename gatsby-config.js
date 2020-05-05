module.exports = {
  pathPrefix: "/windowlicker",
  siteMetadata: {
    title: `Pixelation · MICA GD 2020`,
    description: `Pixelation is an online exhibition for the Maryland Insititute College of Art's Graphic Design Class of 2020.`,
    author: `Yana Gevorgyan & Amanda Yeh`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#11EDD3`,
        theme_color: `#11EDD3`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};

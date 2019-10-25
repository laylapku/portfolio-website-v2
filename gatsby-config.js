module.exports = {
  siteMetadata: {
    title: "Layla Ouyang's Developer Website",
    name: "Layla Ouyang",
    email: "ouyangleilei515@gmail.com",
    pic: "./src/images/profile.png",
    year: "2019"
  },
  plugins: [
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto`,
            variants: [
              `400`,
              `500`,
              `400italic`,
              `300italic`,
              `300`,
              `500italic`,
              `700`,
              `700italic`,
              `900`,
              `900italic`
            ]
          }
        ]
      }
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data/`
      }
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    }
  ]
};

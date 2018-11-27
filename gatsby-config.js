module.exports = {
    plugins: [
      {
        resolve: `gatsby-plugin-prefetch-google-fonts`,
        options: {
          fonts: [
            {
              family: `Roboto`,
              variants: [`400`, `500`, `400italic` , `300italic`, `300`, `500italic`, `700`, `700italic`, `900`, `900italic`],
            },
          ],
        },
      },
      `gatsby-transformer-json`,
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: `${__dirname}/src/data/`,
        },
      },
    ]
}
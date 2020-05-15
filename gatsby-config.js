/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require("dotenv").config({

  path: `.env.${process.env.NODE_ENV}`,
  
  })

module.exports = {
  /* Your site config here */

  siteMetadata: {
    title: "CJ's Photo Club",
    author: "Christian Jay Baiza"
  },

  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1440,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    }
  ]
}

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Starter Gatsby Blog`,
    titleTemplate: "%s · Starter bolg",
    description: `Gatsby and Tailwindcss starter`,
    keywords: [`gatsby`, `tailwind`, `react`, `tailwindcss`],
    author: `@doe`,
    siteUrl: "https://www.doe.com", // No trailing slash allowed!
    image: "/images/site-image.jpg", // Path to your image you placed in the 'static' folder
    twitterUsername: "@doe",
    lang: "en",
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/images/w129-icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/`, `/blog/*`, `/about`],
      },
    },
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: "/images/svg-icons/" 
        }
      }
    }
  ],
};

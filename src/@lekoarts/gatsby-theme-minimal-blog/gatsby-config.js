const newsletterFeed = require(`./src/utils/newsletterFeed`)

module.exports = options => ({
  siteMetadata: {
    siteTitle: `Kelena Mori`,
    siteTitleAlt: `The Zettelkasten of Kelena Mori`,
    siteHeadline: `The Zettelkasten of Kelena Mori`,
    siteUrl: `https://kelena-mori.netlify.com`,
    siteDescription: `A hyper-linked collection of notes, thoughts, and reflections primarily related to design, computer science, programming, and web development.`,
    siteLanguage: `en`,
    siteImage: `/banner.jpg`,
    author: `kelena mori`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog-core`,
      options,
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: newsletterFeed,
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-theme-ui`,
  ],
})

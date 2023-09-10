/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: "Weronika Strzyżewska - Portfolio",
    menuLinks: [
      {
        name: "about",
        link: "/about",
      },
    ],
  },
  plugins: [`gatsby-plugin-sass`],
};

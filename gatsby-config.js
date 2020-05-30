const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"
console.log(`Using environment config: '${activeEnv}'`)
require("dotenv").config({
  path: `.env.${activeEnv}`,
})

require("dotenv").config({
  path: `.env.${activeEnv}`,
})

module.exports = {
  siteMetadata: {
    title: "My Personal Site",
    author: "Joshua Selfe",
    linkedInPofileUrl: "https://www.linkedin.com/in/joshuaselfe/",
    twitterProfileUrl: "https://twitter.com/joshua_selfe",
  },
  plugins: ["gatsby-plugin-sass"],
}

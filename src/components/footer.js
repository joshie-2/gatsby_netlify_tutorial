import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import footerStyles from "./footer.module.scss"

const Footer = () => {
  const today = new Date()
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <footer className={footerStyles.footer}>
      <p>
        Created by {data.site.siteMetadata.author},{" "}
        <span role="img" aria-label="copyright symbol">
          ©️
        </span>{" "}
        {today.getFullYear()}{" "}
      </p>
      <p>
        {" "}
        <span role="img" aria-label="heart icon">
          ❤️
        </span>{" "}
        Baltimore
      </p>
    </footer>
  )
}

export default Footer

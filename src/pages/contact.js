import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"
import Head from "../components/head"

const ContactPage = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          linkedInPofileUrl
          twitterProfileUrl
        }
      }
    }
  `)
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact</h1>
      <p>
        Send me a message! on
        <a href={data.site.siteMetadata.linkedInPofileUrl}>LinkedIn</a>
        or
        <a href={data.site.siteMetadata.twitterProfileUrl}>Twitter</a>
      </p>
    </Layout>
  )
}
export default ContactPage

import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
export const query = graphql`
  query($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      timeToRead
      html
    }
  }
`
const Blog = props => {
  return (
    <Layout>
      <h2>{props.data.markdownRemark.frontmatter.title}</h2>
      <p>Time to Read: {props.data.markdownRemark.timeToRead} min</p>
      <p>{props.data.markdownRemark.frontmatter.date}</p>
      <div
        dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
      ></div>
    </Layout>
  )
}

export default Blog

import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"
const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              author
              date
            }
            timeToRead
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <h1>Blog</h1>
      <ol>
        {data.allMarkdownRemark.edges.map(post => {
          return (
            <li>
              <h2>{post.node.frontmatter.title}</h2>
              <p>{post.node.frontmatter.date}</p>
              <p>time to read: {post.node.timeToRead} min</p>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage

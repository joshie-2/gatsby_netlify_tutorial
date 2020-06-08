import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const NotFound = () => {
  return (
    <Layout>
      <h1>Ops! 😫😫 Not a Page on My Site </h1>
      <h3>
        👉 <Link to="/">click here to go home</Link> 👈
      </h3>
    </Layout>
  )
}

export default NotFound

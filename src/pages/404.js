import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const NotFound = () => {
  return (
    <Layout>
      <Head title="Not Found 404" />
      <h1>
        Ops!
        <span role="img" aria-label="mad face">
          😫
        </span>
        <span role="img" aria-label="mad face">
          😫
        </span>{" "}
        Not a Page on My Site{" "}
      </h1>
      <h3>
        <span role="img" aria-label="hand pointing right">
          👉
        </span>
        <Link to="/">click here to go home</Link>
        <span role="img" aria-label="hand pointing left">
          👈
        </span>
      </h3>
    </Layout>
  )
}

export default NotFound

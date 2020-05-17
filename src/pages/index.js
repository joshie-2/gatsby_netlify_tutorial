import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
export default function Home() {
  return (
    <div style={{ color: `purple` }}>
      <Link to="/contact/">Contact</Link>
      <Header headerText="Hello Gatsby" />
      <p>What a world</p>
      <img
        src="https://images.unsplash.com/photo-1544890225-2f3faec4cd60?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=60"
        alt=""
        srcset=""
      />
    </div>
  )
}

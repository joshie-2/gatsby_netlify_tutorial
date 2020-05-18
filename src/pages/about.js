import React from "react"
import NavBar from "../components/navBar"
import Header from "../components/header"
export default function About() {
  return (
    <div style={{ color: `purple` }}>
      <NavBar />
      <Header headerText="About Page" />
      <p>this is my place holder for my about page</p>
    </div>
  )
}

import React from "react"
import NavBar from "../components/navBar"
import Header from "../components/header"

export default function Contact() {
  return (
    <div style={{ color: `purple` }}>
      <NavBar />
      <Header headerText="Contact Page" />
      <p>Send us a message!</p>
    </div>
  )
}

import React from "react"
import NavBar from "../components/navBar"
import Header from "../components/header"
export default function Home() {
  return (
    <div style={{ color: `purple` }}>
      <NavBar />
      <Header headerText="Home Page" />
      <p>What a world</p>
    </div>
  )
}

import React from "react"
import NavBar from "../components/navBar"
const Header = props => {
  return (
    <header>
      <NavBar />
      <h1>{props.headerText}</h1>
    </header>
  )
}

export default Header

import React from "react"
import { Link } from "gatsby"
const Header = props => {
  return (
    <header>
      <h1>Joshua Selfe</h1>
      <nav>
        <ul>
          <li>
            <Link to="/"> Home</Link>
          </li>
          <li>
            <Link to="/about/">About</Link>
          </li>
          <li>
            <Link to="/contact/">Contact</Link>
          </li>
          <li>
            <Link to="/blog/">Blog</Link>
          </li>
        </ul>
      </nav>
      <h1>{props.headerText}</h1>
    </header>
  )
}

export default Header

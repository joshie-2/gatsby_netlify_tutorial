import React from "react"
import { Link } from "gatsby"
const NavBar = () => {
  return (
    <nav>
      <div>
        <Link to="/"> Home</Link>
      </div>
      <div>
        <Link to="/about/">About</Link>
      </div>
      <div>
        <Link to="/contact/">Contact</Link>
      </div>
    </nav>
  )
}
export default NavBar

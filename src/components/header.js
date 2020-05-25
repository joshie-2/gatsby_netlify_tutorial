import React from "react"
import { Link } from "gatsby"
import headerStyles from "./header.module.scss"
const Header = props => {
  return (
    <header className={headerStyles.header}>
      <Link
        className={headerStyles.title}
        activeClassName={headerStyles.activeNavItem}
        to="/"
      >
        <h1>Joshua Selfe</h1>
      </Link>

      <nav>
        <ul className={headerStyles.navList}>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/about/"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/contact/"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/blog/"
            >
              Blog
            </Link>
          </li>
        </ul>
      </nav>
      <h1>{props.headerText}</h1>
    </header>
  )
}

export default Header

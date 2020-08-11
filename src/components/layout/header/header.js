import React from "react"
import { Link } from "gatsby"
import Gradient from "./Gradient"
import Logo from "../header/logo"

const Header = () => {
  return (
    <>
      <Gradient />
      <header>
        <div className="outer-container">
          <div className="inner-width header-main-container">
            <Link className="logo" to="/">
              <Logo />
            </Link>
            <ul id="menu-items">
              <li>
                <a data-scroll href="#contact">
                  <small>Contact</small>
                </a>
              </li>
              <li>
                <Link to="/portfolio">
                  <small>Portfolio</small>
                </Link>
              </li>
              <li className="hidden">
                <Link to="/blog">
                  <small>Blog</small>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  )
}
export default Header

import React from "react"
import { Link } from "gatsby"
import HeaderScripts from "../header/headerscripts"
import Gradient from "./Gradient"
import Logo from "../header/logo"

const Header = () => {
  return (
    <>
      <HeaderScripts />
      <Gradient />
      <header>
        <div className="outer-container">
          <div className="inner-width header-main-container">
            <Link className="logo" to="/">
              <Logo />
            </Link>
            <ul id="menu-items">
              <li>
                <a
                  data-scroll
                  href="#contact"
                  activeClassName="menu-item-active"
                >
                  <small>Contact</small>
                </a>
              </li>
              <li className="hidden">
                <Link to="#" activeClassName="menu-item-active">
                  <small>Portfolio</small>
                </Link>
              </li>
              <li className="hidden">
                <Link to="#" activeClassName="menu-item-active">
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

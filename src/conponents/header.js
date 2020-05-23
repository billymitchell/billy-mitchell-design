import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const HeaderStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .logo {
  }
  .menu-items {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .menu-items a:hover {
    color: #000000;
  }
  .menu-item-active {
    text-decoration: underline;
    color: #000000;
  }
`

const Header = () => {
  return (
    <div className="main-width">
      <header>
        <HeaderStyle>
          <Link className="logo" to="/">
            <h1>Billy Mitchell</h1>
          </Link>
          <ul className="menu-items">
            <li>
              <Link to="/blog" activeClassName="menu-item-active">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/contact" activeClassName="menu-item-active">
                Contact Me
              </Link>
            </li>
          </ul>
        </HeaderStyle>
      </header>
    </div>
  )
}
export default Header

import React from "react"
//import { useStaticQuery, graphql } from "gatsby"
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

/*const Header = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <header>
      <HeaderStyle>
        <Link className="logo" to="/">
          <h1>{site.siteMetadata.title}</h1>
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
  )
}*/

const Header = () => {
  return (
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
  )
}
export default Header

import React from "react"
import Header from "./header/header"
import HeaderScripts from "../layout/header/headerscripts"
import Footer from "./footer"
import "../../styles/global.scss"

const Layout = ({ children }) => {
  return (
    <>
      <HeaderScripts />
      <div className="outer-wrapper">
        <div className="main-container">
          <Header />
          {children}
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Layout

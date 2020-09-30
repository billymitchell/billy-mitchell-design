import React from "react"
import Header from "./header/header"
import HeaderScripts from "../layout/header/headerscripts"
import Footer from "./footer"
import "../../styles/global.scss"
import styled from "styled-components"

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const MainContainer = styled.div`
  flex-grow: 1;
  padding-bottom: 15px;
`

const Layout = ({ children }) => {
  return (
    <>
      <HeaderScripts />
      <Wrapper>
        <MainContainer>
          <Header />
          {children}
        </MainContainer>
        <Footer />
      </Wrapper>
    </>
  )
}

export default Layout

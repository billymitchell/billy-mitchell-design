import React from "react"
import Header from "./header"
import Footer from "./footer"
import "../../styles/reset.scss"
import "../../styles/global.scss"
import styled from "styled-components"
import { Helmet } from "react-helmet"

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const MainContainer = styled.div`
  flex-grow: 1;
`

const Layout = props => {
  return (
    <>
      <Helmet>
        <script src="http://billymitchell.design/Homepage-custom-js-css/moble-height.js"></script>
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      </Helmet>
      <Wrapper>
        <MainContainer>
          <Header />
          {props.children}
        </MainContainer>
        <Footer />
      </Wrapper>
    </>
  )
}

export default Layout

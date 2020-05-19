import React from "react"
import Header from "./header"
import Footer from "./footer"
import "../styles/reset.scss"
import "../styles/global.scss"
import styled from "styled-components"

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const MainContainer = styled.div`
  flex-grow: 1;
`

const Layout = props => {
  return (
    <Wrapper>
      <MainContainer>
        <Header />
        {props.children}
      </MainContainer>
      <Footer />
    </Wrapper>
  )
}

export default Layout

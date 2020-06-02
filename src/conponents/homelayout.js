import React from "react"
import Footer from "../conponents/footer"
import "../styles/global.scss"
import styled from "styled-components"

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const MainContainer = styled.div`
  flex-grow: 1;
`

const Homelayout = props => {
  return (
    <>
      <Wrapper>
        <MainContainer>{props.children}</MainContainer>
        <Footer />
      </Wrapper>
    </>
  )
}

export default Homelayout

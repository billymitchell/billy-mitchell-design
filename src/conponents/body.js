import React from "react"
import styled from "styled-components"
import "../../styles/global.scss"

const StyledBody = styled.div`
  background-color: var(--main-bg-color);
`

const Body = props => {
  return <StyledBody>{props.children}</StyledBody>
}

export default Body

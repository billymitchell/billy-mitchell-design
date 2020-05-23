import React from "react"
import styled, { keyframes } from "styled-components"

const fadein = keyframes`
0% {
    opacity: 0
}
100% {
    opacity: 1
}
`

const StyledButton = styled.button`
  padding: 10px 15px;
  background-color: ${({ primary }) => (primary ? "#000000" : "gray")};
  color: #ffffff;
  border-radius: 5px;
  border: ${({ primary }) =>
    primary ? "1px solid rgba(255,255,255,0)" : "1px solid rgba(0,0,0,1);"};
  font-size: 16px;
  box-sizing: content-box;
  &:hover {
    background-color: #ffffff;
    border: 1px solid #000000;
    color: #000000;
  }
  animation: 0.5 ${fadein} ease-in-out;
`

const Button = ({ margin, primary, children }) => {
  return (
    <StyledButton margin={margin} primary={primary}>
      {children}
    </StyledButton>
  )
}

export default Button

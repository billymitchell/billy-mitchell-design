import React from "react"
import Button from "../conponents/button"
import styled from "styled-components"

const PaginationWrapper = styled.div`
  display: flex;
  width: 100%;
`

const Footer = () => {
  return (
    <div>
      <a href="https://twitter.com/designbilly">
        <Button primary>Twitter</Button>
      </a>
      <br />
      <br />
      <a href="https://www.linkedin.com/in/billymitchelldesign/">
        <PaginationWrapper>
          <Button margin="30px">Linkedin</Button>
        </PaginationWrapper>
      </a>
      <br />
      <br />
      443-765-8265
      <br />© 2020
    </div>
  )
}
export default Footer

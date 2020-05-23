import React from "react"
import styled from "styled-components"
import GetCurrentDate from "../conponents/getcurrentdate"

const FooterStyle = styled.div`
  background-color: #000000;
  color: #ffffff;
  text-align: center;
  padding: 15px;
`

const Footer = () => {
  return (
    <FooterStyle>
      <footer>
        <div className="main-width">
          <div className="primary-contact-info">
            <p>
              <a value="email" href="mailto:hello@billymitchell.design">
                hello@billymitchell.design
              </a>
              <br></br>
              <a value="phone" href="callto:443-765-8265">
                443-765-8265
              </a>
            </p>
          </div>
          <div className="external-links">
            <a
              value="Instagram"
              href="https://www.instagram.com/billymitchelldesign/"
            >
              <span>Instagram</span>
            </a>
            <a value="Twitter" href="https://twitter.com/designbilly">
              <span>Twitter</span>
            </a>
            <a
              value="Linkedin"
              href="https://www.linkedin.com/in/billymitchelldesign/"
            >
              <span>Linkedin</span>
            </a>
            <a
              value="Codepen"
              href="https://codepen.io/Billymitchell/pens/popular/"
            >
              <span>Codepen</span>
            </a>
            <a value="github" href="https://github.com/billymitchelldesign">
              <span>Github</span>
            </a>
          </div>
          <br />
          Made with ♥ on a rock in space.
          <br />
          Copyright © <GetCurrentDate /> Billy Mitchell Design Co.
        </div>
      </footer>
    </FooterStyle>
  )
}
export default Footer

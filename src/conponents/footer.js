import React from "react"
import styled from "styled-components"
import GetCurrentDate from "./getcurrentdate"

const FooterStyle = styled.div`
  text-align: center;
  .external-social-links {
    font-size: 35px;
    padding-top: 15px;
    padding-bottom: 15px;
  }
  .external-social-links a {
    margin-left: 10px;
    margin-right: 10px;
  }
`

const Footer = () => {
  return (
    <FooterStyle>
      <footer>
        <div className="main-container-width">
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
          <div className="external-social-links">
            <a
              value="Instagram"
              href="https://www.instagram.com/billymitchelldesign/"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a value="Twitter" href="https://twitter.com/designbilly">
              <i className="fab fa-twitter"></i>
            </a>
            <a
              value="Linkedin"
              href="https://www.linkedin.com/in/billymitchelldesign/"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              value="Codepen"
              href="https://codepen.io/Billymitchell/pens/popular/"
            >
              <i className="fab fa-codepen"></i>
            </a>
            <a value="github" href="https://github.com/billymitchelldesign">
              <i className="fab fa-github"></i>
            </a>
          </div>
          <div className="footer-bottom">
            <small>
              Made with ♥ on a rock in space.
              <br />
              Copyright © <GetCurrentDate /> Billy Mitchell Design Co.
            </small>
          </div>
        </div>
      </footer>
    </FooterStyle>
  )
}
export default Footer

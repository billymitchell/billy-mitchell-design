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
      <footer className="bg-brand-dark">
        <div className="outer-container">
          <div className="inner-width">
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
                Made with <span style={{ color: "red" }}>♥</span> on a rock in
                space
                <br />
                Copyright © <GetCurrentDate /> Billy Mitchell Design Co.
                <br />
              </small>
              <span className="block padding-5">
                <small>
                  <a href="https://github.com/billymitchelldesign/gatsby">
                    <i className="fab fa-osi"></i>
                  </a>{" "}
                  <a href="https://github.com/billymitchelldesign/gatsby">
                    Open Source
                  </a>
                </small>
              </span>
            </div>
          </div>
        </div>
      </footer>
    </FooterStyle>
  )
}
export default Footer

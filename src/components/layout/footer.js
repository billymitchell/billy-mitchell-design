import React from "react"
import styled from "styled-components"
import GetCurrentDate from "../utilities/getcurrentdate"
import Resume from "../../../static/downloads/Billy-Mitchell-Resume-2021.pdf"

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
                <a value="email" href="mailto:info@billymitchell.design">
                  info@billymitchell.design
                </a>
                <br></br>
                <a value="phone" href="tel:4437658265">
                  443-765-8265
                </a><br></br>
                <a href={Resume}>Resume</a>
              </p>
            </div>
            <div className="external-social-links">

              <a target="_blank" value="Twitter" href="https://twitter.com/designbilly" rel="noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a
                target="_blank" value="Linkedin"
                href="https://www.linkedin.com/in/billymitchelldesign/"
                rel="noreferrer"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>

              <a target="_blank" value="github" href="https://github.com/billymitchell" rel="noreferrer">

                <i className="fab fa-github"></i>
              </a>
            </div>
            <div className="footer-bottom">
              <small>
                Made with <span style={{ color: "red" }}>♥</span> on a rock in
                space
                <br />
                Copyright © <GetCurrentDate /> Billy Mitchell Design LLC
                <br />
              </small>
              <span className="block padding-5">
                <small>
                  <a href="https://github.com/billymitchell/main-website">
                    This website code is Open Source!
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

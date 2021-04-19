import React from "react"
import GetCurrentDate from "../utilities/getcurrentdate"
import Resume from "../../../static/downloads/Billy-Mitchell-Resume-2021.pdf"
import Obfuscate from 'react-obfuscate';



const Footer = () => {
  return (

    <footer className="bg-brand-dark-5">
      <div className="outer-container">
        <div className="inner-width">
          <div className="primary-contact-info">
            <p>
            <i class="fas fa-paper-plane"></i><Obfuscate
                email="hello@billymitchell.design"
              />
              <br></br>
              <i class="fas fa-phone-alt"></i><Obfuscate tel="4437658265" /><br></br>
              <i class="fas fa-file-alt"></i><a href={Resume}>Resume</a>
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

  )
}
export default Footer

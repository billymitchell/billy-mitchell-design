import React from "react"
import Homelayout from "../conponents/homelayout"
import Button from "../conponents/button"
import { Link } from "gatsby"
import Homesplash from "../conponents/homesplash"
import Body from "../conponents/body"
import { Helmet } from "react-helmet"
import { useSiteMetadata } from "../conponents/query-site-metadata"

export default function IndexPage() {
  const { title } = useSiteMetadata()
  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <script src="http://billymitchell.design/Homepage-custom-js-css/moble-height.js"></script>
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      </Helmet>
      <Homelayout>
        <Homesplash />
        <Body>
          <div className="main-width">
            <section>
              <h1
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
              >
                Hi, I’m Billy – a multidisciplinary designer.
              </h1>
              <br />
              <p
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
              >
                I create value, meaningful engagement and strengthen visual
                communication through strategy and effective design.
              </p>
              <Link to="/contact">
                <Button>Contact Me</Button>
              </Link>
              <Link to="/blog">
                <Button primary>Twitter</Button>
              </Link>
            </section>
          </div>
        </Body>
      </Homelayout>
    </div>
  )
}

import React from "react"
import HeaderTags from "../conponents/headertags"
import Homelayout from "../conponents/homelayout"
import Homesplash from "../conponents/homesplash"
import Contact from "../conponents/contact"

export default function IndexPage() {
  return (
    <div>
      <HeaderTags />
      <Homelayout>
        <Homesplash />
        <section>
          <div className="text-container-width">
            <div className="animate">
              <Contact />
            </div>
          </div>
        </section>
      </Homelayout>
    </div>
  )
}

import React from "react"
import HeaderTags from "../conponents/headertags"
import HomePageLayout from "../conponents/home-page-layout"
import Homesplash from "../conponents/homesplash"
import FullStack from "../conponents/full-stack-design"
import ContactSection from "../conponents/contact-section"
import TechStack from "../conponents/techstack"
import Companies from "../conponents/companies"
import Gradient from "../conponents/Gradient"
import Separator from "../conponents/separator"
import { ParallaxProvider } from "react-scroll-parallax"

export default function IndexPage() {
  return (
    <>
      <ParallaxProvider>
        <Gradient />
        <HeaderTags />
        <HomePageLayout>
          <Homesplash />
          <FullStack />
          <Separator className="bg-white" />
          <TechStack />
          <Separator className="bg-blue" />
          <Companies />
          <Separator className="bg-black" />
          <ContactSection />
        </HomePageLayout>
      </ParallaxProvider>
    </>
  )
}

import React from "react"
import HeaderTags from "../conponents/headertags"
import HomePageLayout from "../conponents/home-page-layout"
import Homesplash from "../conponents/homesplash"
import FullStack from "../conponents/full-stack-design"
import ContactSection from "../conponents/contact-section"
import TechStack from "../conponents/techstack"

export default function IndexPage() {
  return (
    <>
      <HeaderTags />
      <HomePageLayout>
        <Homesplash />
        <FullStack />
        <TechStack />
        <ContactSection />
      </HomePageLayout>
    </>
  )
}

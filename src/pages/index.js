import React from "react"
import Layout from "../components/layout/layout"
import { ParallaxProvider } from "react-scroll-parallax"

import Homesplash from "../components/home/homesplash"
import FullStack from "../components/home/full-stack-design"
import ContactSection from "../components/home/contact-section"
import TechStack from "../components/home/techstack"
import Companies from "../components/home/companies"

import Separator from "../components/separator"

export default function IndexPage() {
  return (
    <div id="home">
      <ParallaxProvider>
        <Layout>
          <Homesplash />
          <FullStack />
          <Separator className="bg-white" />
          <TechStack />
          <Separator className="bg-blue" />
          <Companies />
          <Separator className="bg-black" />
          <ContactSection />
        </Layout>
      </ParallaxProvider>
    </div>
  )
}

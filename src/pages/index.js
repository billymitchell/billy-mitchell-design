import React from "react"
import Layout from "../components/layout/layout"
import MetaData from "../components/layout/header/mettadata"

import { ParallaxProvider } from "react-scroll-parallax"

import Homesplash from "../components/home/homesplash"
import FullStack from "../components/home/full-stack-design"
import ContactSection from "../components/home/contact-section"
import TechStack from "../components/home/techstack"
import Companies from "../components/home/companies"


import About from "../components/home/about"
import Services from "../components/home/services"

import Separator from "../components/separator"

export default function IndexPage() {
  return (
    <>
      <MetaData
        title="Billy Mitchell Design"
        description="Full-Stack Design"
        socialimg="https://res.cloudinary.com/billymitchell/image/upload/v1600977107/home/Logo-Simplified-Shair-link_i281z4.jpg"
      />
      <div id="home">
        <ParallaxProvider>
          <Layout>
            <Homesplash />
            <FullStack />
            <Separator className="bg-white" />
            <TechStack />
            <Separator className="bg-blue" />
            <Companies />
            <Separator className="bg-green-dark" />
            <Services />
            <Separator className="bg-gray-1" />
            <About />
            <Separator className="bg-black" />
            <ContactSection />
          </Layout>
        </ParallaxProvider>
      </div>
    </>
  )
}

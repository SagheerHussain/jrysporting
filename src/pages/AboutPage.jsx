import React from 'react'
import Header from '../components/About Components/Header'
import Info from '../components/About Components/Info'
import SportingClayCards from '../components/About Components/SportingClayCards'
import Footer from '../components/Footer'
import aboutBanner from '/Images/about-banner.webp'

const AboutPage = () => {
  return (
    <>
      <Header title="Coyoto Valley" banner={aboutBanner} />
      <Info />
      <SportingClayCards />
      <Footer />
    </>
  )
}

export default AboutPage

import React from 'react'
import Header from '../components/About Components/Header'
import Pricing from '../components/Pricing'
import Footer from '../components/Footer'
import Reviews from '../components/Reviews'
import pricingBanner from '/Images/Pricing/banner.webp'
import AmmuPricing from '../components/AmmuPricing'

const PricingPage = () => {
  return (
    <>
      <Header title="Pricing" banner={pricingBanner} />
      <Pricing />
      <AmmuPricing />
      <Reviews />
      <Footer />
    </>
  )
}

export default PricingPage

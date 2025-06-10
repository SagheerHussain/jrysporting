import React from 'react'
import Header from "../components/About Components/Header";
import Events from '../components/Events Components/Events';
import Footer from '../components/Footer';
import eventsBanner from '/Images/Events/banner.webp'

const EventsPage = () => {
  return (
    <>
      <Header title="Events & Venues" banner={eventsBanner} />
      <Events />
      <Footer />
    </>
  )
}

export default EventsPage

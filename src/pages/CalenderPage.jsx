import React from 'react'
import Header from "../components/About Components/Header";
import Footer from '../components/Footer';
import calenderBanner from '/Images/Calender/banner.webp'
import Calender from '../components/Calender';
import CTABanner from '../components/CTABanner';
import MonthCalender from '../components/MonthCalender';

const CalenderPage = () => {
  return (
    <>
      <Header title="Calender" banner={calenderBanner} />
      <MonthCalender />
      <Calender />
      <CTABanner />
      <Footer />
    </>
  )
}

export default CalenderPage

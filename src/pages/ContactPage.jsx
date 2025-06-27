import React from 'react'
import Header from "../components/About Components/Header";
import contactBanner from "/Images/contact/8.webp"
import ContactInfo from '../components/Contact Components/ContactInfo';
import Footer from "../components/Footer";
import ContactForm from '../components/Contact Components/ContactForm';

const ContactPage = () => {
  return (
    <>
      <Header title="Contact Us" banner={contactBanner} />
      {/* <ContactInfo /> */}
      <ContactForm />
      <Footer />
    </>
  )
}

export default ContactPage

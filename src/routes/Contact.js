import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BackgroundImg from '../components/BackgroundImg'
import Form from '../components/Form'

const Contact = () => {
  return (
    <div>
      <Navbar />
      <BackgroundImg heading="CONTACT" text="Let's chat"/>
      <Form />
      <Footer />
    </div>
  )
}

export default Contact
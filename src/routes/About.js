import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BackgroundImg from '../components/BackgroundImg'

const About = () => {
  return (
    <div>
      <Navbar />
      <BackgroundImg heading="ABOUT" text="An aspiring Developer" />
      <Footer />
    </div>
  )
}

export default About
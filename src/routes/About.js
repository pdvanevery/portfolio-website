import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BackgroundImg from '../components/BackgroundImg'
import AboutContent from '../components/AboutContent'

const About = () => {
  return (
    <div>
      <Navbar />
      <BackgroundImg heading="About" text="An aspiring Developer" />
      <AboutContent />
      <Footer />
    </div>
  )
}

export default About
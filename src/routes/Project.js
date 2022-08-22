import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BackgroundImg from '../components/BackgroundImg'
import Work from '../components/Work'

const Project = () => {
  return (
    <div>
      <Navbar />
      <BackgroundImg heading="Projects" text="Some of my most recent works" />
      <Work />
      <Footer />
    </div>
  )
}

export default Project
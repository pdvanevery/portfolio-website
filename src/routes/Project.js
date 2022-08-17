import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BackgroundImg from '../components/BackgroundImg'

const Project = () => {
  return (
    <div>
      <Navbar />
      <BackgroundImg heading="PROJECTS" text="Some of my most recent works" />
      <Footer />
    </div>
  )
}

export default Project
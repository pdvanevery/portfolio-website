import "./AboutContentStyles.css"
import React from 'react'
import { Link } from "react-router-dom"
import Profilepic from "../assets/profilepic.jpeg"

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who am I?</h1>
            <p>My name is Parker and I am an aspiring Full Stack Developer.  I was born and raised in San Diego, CA, living there until I left home to attend San Jose State University. While there, I graduated with my Bachelor's in Entrepreneurship as well as made San Jose my new home. </p>
                
            <p>Shortly after graduating, I decided to go back to school to learn to code as it was a growing profession that had always been of interest to me, but had not pursued until now. After 10 months, or 473 hours of classes, not counting the countless hours spent studying, I am officially a graduate of San Diego State University's Professional Certificate Program for Software Development.   
            </p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>

        </div>
        <div className="right">
            <div className="img-container">
                    <img src={Profilepic} className="img" alt="profile-pic" />
            </div>
        </div>
    </div>
  )
}

export default AboutContent
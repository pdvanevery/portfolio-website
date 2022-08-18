import "./HomeImgStyles.css"
import React from 'react'
import LandingImg from "../assets/home-img.jpeg"
import { Link } from "react-router-dom"

function HomeImg() {
  return (
    <div className="home-img">
        <div className="bckground">
            <img className="landing-img" src={LandingImg} alt="LandingImg" />
        </div>
        <div className="content">
            <p>Parker Van Every</p>
            <h1>Full Stack Developer</h1>
            <div>
                <Link to="/project" className="btn">Projects</Link>
                <Link to="/contact" className="btn btn-light">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default HomeImg
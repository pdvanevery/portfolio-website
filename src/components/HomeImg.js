import "./HomeImgStyles.css"
import React from 'react'
import LandingImg from "../assets/homeimg2.jpeg"
import { Link } from "react-router-dom"

function HomeImg() {
  return (
    <div className="home-img">
        <div className="bckground">
            <img className="landing-img" src={LandingImg} alt="LandingImg" />
        </div>
        <div className="content">
            <p>Hi, my name is</p>
            <br></br>
            <h1 className="my-name">Parker Van Every.</h1>
            <h1> I'm a Full Stack Developer.</h1>
            <br></br>
            <div>
                <Link to="/project" className="btn">Projects</Link>
                <Link to="/contact" className="btn btn-light">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default HomeImg
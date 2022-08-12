import "./FooterStyles.css"
import React from 'react'
import { FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{ color:"#fff", marginRight: "2rem" }}/>
                    <div>
                        <p>San Jose, CA</p>
                        <p>Open to Remote Opportunities</p>
                    </div>
                </div>
                <div className="phone">
                    <h4>
                        <FaPhone size={20} style={{ color:"#fff", marginRight: "2rem" }}/>
                        619-750-4673
                    </h4>
                </div>
                <div className="email">
                    <h4>
                        <FaMailBulk size={20} style={{ color:"#fff", marginRight: "2rem" }}/>
                        pdvanevery@gmail.com
                    </h4>
                </div>
            </div>
            <div className="right">
                <h4>About the company</h4>
                <p>Welcome to my portfolio website! My name is Parker and I am an aspiring Full-Stack Developer. I developed a love for coding because it allows me to tackle new challenges daily as well as keep my mind sharp through continuous learning.</p>
                <div className="socials">
                <FaLinkedin size={30} style={{ color:"#fff", marginRight: "1rem" }}/>
                <FaGithub size={30} style={{ color:"#fff", marginRight: "1rem" }}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
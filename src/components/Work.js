import "./WorkCardStyles.css"
import WorkCard from "./WorkCard"
import ProjectCardData from "./WorkCardData"
import React from 'react'
import restrant from "../assets/rest-rant.png"
import { NavLink } from "react-router-dom"

const Work = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
            {ProjectCardData.map((val, index) => {
                return(
                    <WorkCard 
                    key={index}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    text={val.text}
                    view={val.view}
                    source={val.source}
                    />
                )
            })}
        </div>
    </div>
  )
}

export default Work
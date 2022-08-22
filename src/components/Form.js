import "./FormStyles.css"
import React from 'react'

const Form = () => {
  return (
    <div className="form">
        <form>
            <label>Your Name</label>
            <input type="text" placeholder="Enter Name"></input>
            <label>Email</label>
            <input type="email" placeholder="Enter Email"></input>
            <label>Subject</label>
            <input type="text" placeholder="Enter Email Subject"></input>
            <label>Message</label>
            <textarea rows="6" placeholder="Enter Message Here" />
            <button className="btn">Submit</button>
        </form>
    </div>
  )
}

export default Form
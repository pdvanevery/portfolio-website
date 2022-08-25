import "./FormStyles.css"
import React, { useRef } from 'react';
import emailjs, { send } from '@emailjs/browser';

const Form = () => {

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault() //prevent refresh

    emailjs.sendForm('service_ja76yzv', 'template_64b6kgg', form.current, 'ytfiAM8e8PjSbM0bu')
    .then((result) => {
      console.log(result.text)
      console.log("message sent")
      alert("Message sent!")
    }, (error) => {
      console.log(error.text)
    })
  }

  return (
    <div className="form">
        <form ref={form} onSubmit={sendEmail}>
            <label>Your Name</label>
            <input type="text" name="user_name" placeholder="Enter Name"></input>
            <label>Email</label>
            <input type="email" name="user_email" placeholder="Enter Email"></input>
            <label>Message</label>
            <textarea rows="6" name="message" placeholder="Enter Message Here" />
            <button className="btn" type="submit" value="Send">Submit</button>
        </form>
    </div>
  )
}

export default Form
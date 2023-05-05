import React, { useState } from 'react'
import axios from 'axios';
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  
  const handleSubmit = async(event) => {
    event.preventDefault();
    // Send form data to server or external API
    
    const detail={userName:name,UserEmail:email,Message:message}
     console.log(detail);
     const res= await axios.post("https://dynamic-web-api.vercel.app/message",detail);
     alert("Sent!");
     setName("");
     setEmail("");
     setMessage("");
   console.log(res.data);
  };
  return (
    <div className='contact'>
        <div className='contact-card'>
            <h1>Feel Free To Contact</h1>
            <form onSubmit={handleSubmit} className='form'>
      <label className='lable'>
        <>Name:</>
        <input className='contactInput'
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label className='lable'>
        Email:
        <input className='contactInput'
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label className='lable'>
        Message:
        <textarea  className='contactInput'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </label>
      <button type="submit" className='contactBtn'>Submit</button>
    </form>
            
        </div>
    </div>
  )
}

export default Contact
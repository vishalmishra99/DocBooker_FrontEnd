import React, { useState } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';

const MessageForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleMessage = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://docbooker-backend-2.onrender.com/api/v1/message/send",
        { firstName, lastName, phone, email, message },
        {
          withCredentials: true,
        }
      )
        .then((response) => {
          toast.success(response.data.message);
          setFirstName("");
          setLastName("");
          setEmail("");
          setPhone("");
          setMessage("");
        })
    }
    catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className='container form-component message-form'>
      <h2>Send us a message</h2>
      <form onSubmit={handleMessage}>
        <div>
          <input
            type="text"
            placeholder='First Name'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder='Last Name'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="number"
            placeholder='Phone Number'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <textarea
          rows={7}
          placeholder='Message'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <div style={{ justifyContent: "center", alignItems: "center" }}>
          <button type='submit'>Send</button>
        </div>
      </form>
    </div>
  )
}

export default MessageForm

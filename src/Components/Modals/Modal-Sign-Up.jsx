import "./Modal.css"
import Button from '@mui/material/Button';
import React, { useState } from "react";
import { doRegister } from "../../services/RegisterFunction";
  
function SignUpModal(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword ] = useState("");
  const [username, setUsername] = useState("");

  const doRegistering = async (event) => {
    event.preventDefault()
    console.log("Registering...")
    doRegister(email, username, password)
  };

  const handleChange = async (event) => {
    if (event.target.id === "email") {
      setPassword(event.target.value)
    }
    if (event.target.id === "password") {
      setEmail(event.target.value)
    }
    if (event.target.id === "username") {
      setUsername(event.target.value)
    }
  }


  if (!props.show) {
    return null
  }
  return (
    <div className="modal-signup" onClick={props.onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
        <div className="modal-exit">
          </div>
          <h1 className="modal-title">Sign Up</h1>
          <form onSubmit={doRegistering}>
          <input className='modal-input' id = "username" onChange={handleChange} placeholder='Create Username'></input>
          <input className='modal-input' id = "email" onChange={handleChange} placeholder='Email'></input>
          <input className='modal-input' id = "password" onChange={handleChange} placeholder='Create Password'></input>
          <input type="submit" className="modal-button" value="Sign Up" />
          <Button onClick={props.onClose} className="modal-button">Close</Button>
          </form>  
          </div>
        </div>
      </div>
  )
}

export default SignUpModal;

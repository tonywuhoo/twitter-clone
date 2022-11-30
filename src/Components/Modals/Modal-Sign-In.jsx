import "./Modal.css"
import Button from '@mui/material/Button';
import { doLogin } from "../../services/LoginFunction";
import React, { useState } from "react";

function Modal(props) {
  const [Inputmail, setEmail] = useState("");
  const [Inputpassword, setPassword] = useState("");
  if (!props.show) {
    return null
  }
  const doLogging = async (event) => {
    event.preventDefault()
    try {
      const credentials = {
        email: Inputmail,
        password: Inputpassword,
      }
      const response = await doLogin(credentials)
      console.log(response)
    } catch (error) {
      console.error(error)
    }
  };
  const handleChange = async (event) => {
    if (event.target.id === "email") {
      setEmail(event.target.value)
      console.log(event.target.value)
    }
    if (event.target.id === "password") {
      setPassword(event.target.value)
      console.log(event.target.value)
    }

  };
  return (
    <div className="modal" onClick={props.onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-body">
          <h2 className="modal-title">Sign In To Shills</h2>
          <form onSubmit={doLogging}>
            <input className='modal-input' onChange={handleChange} id="email" placeholder="Email"></input>
            <input className='modal-input' type="password" onChange={handleChange} id="password" placeholder="Password"></input>
            <input type="submit" className="modal-button" value="Sign In" />
            <Button onClick={props.onClose} className="modal-button">Close</Button>
          </form>
        </div>

      </div>
    </div>
  )
}
export default Modal;


import { Link } from 'react-router-dom'

function Modal({show, onClose}) {
  if (!show) {
    return null
  }
  
  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
        <div className="modal-exit">
          <button onClick={onClose} className="Xbutton">X</button>
          </div>
          <h1>Sign Up</h1>
          <input className='create-Username' placeholder='Create Username'></input>
          <input className='create-Email' placeholder='Email'></input>
          <input className='create-Password' placeholder='Create Password'></input>
          <input className='profile-Description' placeholder='Profile Description'></input>

          </div>
        
            <button className="create-profile-button">Create Profile</button>
          
        </div>
      </div>
  )

}

export default Modal
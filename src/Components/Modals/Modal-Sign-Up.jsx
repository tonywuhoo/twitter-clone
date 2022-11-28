import "./Modal.css"

function SignUpModal(props) {
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
          <input className='input' placeholder='Create Username'></input>
          <input className='input' placeholder='Email'></input>
          <input className='input' placeholder='Create Password'></input>
          <input className='input' placeholder='Profile Description'></input>
          <button className="button">Sign Up</button>
          <button onClick={props.onClose} className="button">Close</button>

          </div>
        
            {/* <button className="create-profile-button">Create Profile</button> */}
          
        </div>
      </div>
  )

}

export default SignUpModal
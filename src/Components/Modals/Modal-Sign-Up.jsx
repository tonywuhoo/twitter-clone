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
          <input className='modal-input' placeholder='Create Username'></input>
          <input className='modal-input' placeholder='Email'></input>
          <input className='modal-input' placeholder='Create Password'></input>
          <input className='modal-input' placeholder='Profile Description'></input>
          <button className="modal-button">Sign Up</button>
          <button onClick={props.onClose} className="modal-button">Close</button>
          </div>
        </div>
      </div>
  )

}

export default SignUpModal
import "./Modal.css"

function Modal(props) {
  if (!props.show) {
    return null
  }
  return (
    <div className="modal" onClick={props.onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>

        <div className="modal-body">
        <h2 className="modal-title">Sign In</h2>
          <input className="input" placeholder="username"></input>
          <input className="input" placeholder="password"></input>
          <button className="button">submit</button>
          <button onClick={props.onClose} className="button">Close</button>
        </div>
      
      </div>
    </div>
  )

}

export default Modal
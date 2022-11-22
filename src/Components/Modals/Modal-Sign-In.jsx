import "./Modal.css"


function Modal(props) {
  if (!props.show) {
    return null
  }
  return (
    <div className="modal" onClick={props.onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">Sign In!</h2>
        </div>
        <div className="modal-body">
          <input placeholder="username"></input>
          <input placeholder="password"></input>
          <button>submit</button>
        </div>
        
        <div className="modal-footer">
          <button onClick={props.onClose} className="button">Close</button>
        </div>
      </div>
    </div>
  )

}

export default Modal
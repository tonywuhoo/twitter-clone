import "./Modal.css"
import Button from '@mui/material/Button';


function Modal(props) {
  if (!props.show) {
    return null
  }
  return (
    <div className="modal" onClick={props.onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-body">
        <h2 className="modal-title">Sign In To Shills</h2>
          <input className='modal-input' placeholder="Username"></input>
          <input className='modal-input' placeholder="Password"></input>
          <Button className="modal-button">Sign In</Button>
          <Button onClick={props.onClose} className="modal-button">Close</Button>
        </div>
      
      </div>
    </div>
  )

}

export default Modal
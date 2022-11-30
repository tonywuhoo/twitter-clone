import "./Modal.css";
import Button from "@mui/material/Button";

function SignUpModal(props) {
	if (!props.show) {
		return null;
	}

	return (
		<div className="modal" onClick={props.onClose}>
			<div className="modal-content">
				<div className="modal-header" onClick={(e) => e.stopPropagation()}>
					<h1 className="modal-title">Sign Up</h1>
					<input className="modal-input" placeholder="Create Username"></input>
					<input className="modal-input" placeholder="Email"></input>
					<input className="modal-input" placeholder=" Password"></input>
					<input
						className="modal-input2"
						placeholder="Profile Description"></input>
					<Button className="modal-button">Sign Up</Button>
					<Button onClick={props.onClose} className="modal-button2">
						Close
					</Button>
				</div>
			</div>
		</div>
	);
}

export default SignUpModal;

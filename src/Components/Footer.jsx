import SignUpModal from "../Components/Modals/Modal-Sign-Up";
import Modal from "../Components/Modals/Modal-Sign-In";
import { useState } from "react";
import './Modals/Modal.css'

function Footer() {
  const [showModal, setShowModal] = useState(false);
  const [showSignUpModal, setSignUpModal] = useState(false);
  return (
    <>
    <div className="sign-in">
    <Modal onClose={() => setShowModal(false)} show={showModal} />
    <button onClick={() => setShowModal(true)}>Sign in!</button>
  </div>
  <div className="sign-up">
    <SignUpModal
      onClose={() => setSignUpModal(false)}
      show={showSignUpModal}
    />
    <button onClick={() => setSignUpModal(true)}>Sign up!</button>
  </div>
    </>
  )
}

export default Footer
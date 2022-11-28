import SignUpModal from "../Components/Modals/Modal-Sign-Up";
import Modal from "../Components/Modals/Modal-Sign-In";
import { useState } from "react";
import './Modals/Modal.css'

function Footer() {
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [showSignUpModal, setSignUpModal] = useState(false);
  return (
    <>
    <div className="sign-in">
    <Modal onClose={() => setShowSignInModal(false)} show={showSignInModal} />
    <button onClick={() => setShowSignInModal(true)}>Sign in!</button>
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
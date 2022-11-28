import SignUpModal from "../Components/Modals/Modal-Sign-Up";
import Modal from "../Components/Modals/Modal-Sign-In";
import { useState } from "react";
import './Modals/Modal.css'
import './Footer.css'

function Footer() {
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [showSignUpModal, setSignUpModal] = useState(false);
  return (
    <>
<div className="footer-sign-in-up-container">
     <div className="footer-sign-in">
      <Modal onClose={() => setShowSignInModal(false)} show={showSignInModal} />
        <button className="footer-sign-in-up-button" onClick={() => setShowSignInModal(true)}>Sign in!</button>
  </div>
  <div className="footer-sign-up">
        <SignUpModal
          onClose={() => setSignUpModal(false)}
            show={showSignUpModal}
    />
        <button className="footer-sign-in-up-button" onClick={() => setSignUpModal(true)}>Sign up!</button>
        </div>
</div>
    </>
  )
}

export default Footer
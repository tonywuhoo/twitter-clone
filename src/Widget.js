import React from "react";
import "./Widget.css";
import SignUpModal from "./Components/Modals/Modal-Sign-Up";
import Modal from "./Components/Modals/Modal-Sign-In";
import { useState } from "react";

function Widget() {
  const [showModal, setShowModal] = useState(false);
  const [showSignUpModal, setSignUpModal] = useState(false);

  return (
    <>
      <div className="widgets">
        <h2>widgets</h2>
      </div>
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
  );
}

export default Widget;

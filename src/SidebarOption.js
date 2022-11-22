import React from "react";
import "./SidebarOption.css";
// import Modal from "./Components/Modals/Modal-Sign-In";
// import { useState } from "react";

function SidebarOption({ active, text, Icon }) {
  // const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className={`sidebarOption ${active && "sidebarOption--active"}`}>
        {Icon}

        <h2>{text}</h2>
      </div>
      {/* <div className="sign-in">
        <Modal onClose={() => setShowModal(false)} show={showModal} />
        <button onClick={() => setShowModal(true)}>Sign in!</button>
      </div> */}
    </>
  );
}

export default SidebarOption;

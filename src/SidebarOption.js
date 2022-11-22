import React from "react";
import "./SidebarOption.css";
import SignUpModal from "./Components/Modals/Modal-Sign-Up";

function SidebarOption({ active, text, Icon }) {
  return (
    <div className={`sidebarOption ${active && "sidebarOption--active"}`}>
      {Icon}
      
      <h2>{text}</h2>
    </div>
  );
}

export default SidebarOption;
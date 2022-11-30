import React from "react";
import Widget from "../Widget";
import "./ProfilePage.module.css"

function ProfilePage() {
  return (
  <>
      <h1>Profile Page</h1>
      
      <div className="profile-page-widget-container">
      <Widget /> 
      </div>
      </>
  )
} 

export default ProfilePage
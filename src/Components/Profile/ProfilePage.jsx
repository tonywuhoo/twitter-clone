import React from "react";
import Sidebar from "../../Sidebar";
import Feed from "../Screens/Feed";
import Widget from "../Widgets/Widget";
import "./ProfilePage.module.css";

function ProfilePage() {
	return (
		<div className="profile-page">
			<Sidebar />
			<Feed />
			<Widget />
		</div>
	);
}

export default ProfilePage;

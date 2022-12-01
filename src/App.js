import ProfilePage from "./Components/Profile/ProfilePage";
import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./Components/Screens/Home";
import Cookies from "js-cookie";
import { getPosts } from "./services/PostCrud";
import Sidebar from "./Sidebar";
import Feed from "./Components/Screens/Feed";
import Widget from "./Components/Widgets/Widget";

function App() {


	useEffect(() => {
		if (Cookies.get("AccessToken") === undefined) {
			Cookies.set("AccessToken", "loggedout");
		}
	}, []);

	return (
		<>
			<div className="app">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/profile" element={<ProfilePage />} />
				</Routes>
			</div>
		</>
	);
}

export default App;


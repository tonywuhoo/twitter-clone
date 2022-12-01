// import ProfilePage from './Components/Profile/ProfilePage';
// import { Routes, Route } from 'react-router-dom';
import React from "react";
import Sidebar from "../Components/Sidebar";
import Feed from "../Screens/Feed";
import Widget from "../Components/Widget";
import "./Home.css";


function Home({setToggleApiCall, post , toggleApiCall}) {
	return (
		<div className="home">
			<Sidebar />
      <Feed
        setToggleApiCall = {setToggleApiCall}
        post = {post}
        toggleApiCall = {toggleApiCall}
      />
			<Widget />
		</div>
	);
}

export default Home;

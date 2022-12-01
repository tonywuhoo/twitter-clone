import React from "react";
import Sidebar from "../../Sidebar";
import Feed from "./Feed";
import Widget from "../Widgets/Widget";
import "./Home.css";

function Home() {

	return (
		<div className="home">
			<Sidebar />
			<Feed />
			<Widget />
</div>
	);
}

export default Home;

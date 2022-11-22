import React from 'react';
import './SidebarOption.css';
// import { useState } from "react";

function SidebarOption({ active, text, Icon }) {
	// const [showModal, setShowModal] = useState(false);
	return (
		<>
			<div className={`sidebarOption ${active && 'sidebarOption--active'}`}>
				{Icon}

				<h2>{text}</h2>
			</div>
		</>
	);
}

export default SidebarOption;

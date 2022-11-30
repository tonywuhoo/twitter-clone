import "./Modal.css";
import React, { useState } from "react";
import Button from "@mui/material/Button";

function CreateTweetModal(props) {
	// props = {
	//  profile-image: "https://www.pic.com",
	//  profile-username: "aalonso",
	// }
	const [characterCount, setCharacterCount] = useState(0);
	const [tweet, setTweet] = useState("");

	function handleChange(event) {
		setTweet(event.target.value);
		setCharacterCount(tweet.length);
	}

	if (!props.show) {
		return null;
	}
	return (
		<div className="modal" onClick={props.onClose}>
			<div className="modal-content">
				{/* <div className="modal-header">
					<img src={props.profile-image} alt="the users profile image"></img>
					<h1>@{props.profile - username}</h1>
				</div> */}
				<div className="modal-body" onClick={(e) => e.stopPropagation()}>
					<input
						className="modal-input"
						type="text"
						id="tweetMessage"
						name="tweetMessage"
						placeholder="What's Happening?"
						maxLength="280"
						onChange={handleChange}></input>
				</div>
				<div className="modal-footer">
					<p>{characterCount}/280</p>
					<Button className="button">Post</Button>
				</div>
			</div>
		</div>
	);
}

export default CreateTweetModal;

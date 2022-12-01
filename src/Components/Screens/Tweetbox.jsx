import React from "react";
import "./TweetBox.css";
import Button from "@mui/material/Button";
import Avatar from "react-avatar";
import { createPost } from "../../services/PostCrud";
import { IconButton } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useState } from "react";
import Cookies from "js-cookie";

function Tweetbox() {
	const [imageURL, setImageURL] = useState("");
	const [text, setText] = useState("");

	const doSubmit = async (event) => {
		event.preventDefault();
		try {
			const content = {
				text: text,
				title: imageURL,
			};
			await createPost(content);
		} catch (error) {
			throw error;
		}
	};

	const handleChange = (event) => {
		if (event.target.id === "text") {
			setText(event.target.value);
		}
		if (event.target.id === "image") {
			setImageURL(event.target.value);
		}
	};

	return (
		<div className="tweetBox">
<<<<<<< HEAD:src/Components/Screens/Tweetbox.jsx
			<form onSubmit={doSubmit}>
				<div className="tweetBox-input">
					<input
						id="text"
						className="tweetBox-input"
						placeholder="What's happening, tweed?"
						type="text"
						size="2rem"
						onChange={handleChange}
					/>
=======
			<form onSubmit={ doSubmit }>
        <div className="tweetBox-input">
          <textarea
            id = "text"
            className="tweetBox-input"
            placeholder="What's happening, tweed?"
            type="text"
            size="2rem"
            onChange={handleChange}/>
>>>>>>> development:src/Components/Tweetbox.jsx
				</div>
				<input
					id="image"
					className="tweetBox-inputImage"
					placeholder="Enter image URL"
					type="text"
					onChange={handleChange}
				/>

				<Button
					variant="outlined"
					className="feed_tweet_BTN"
					type="submit"
					// onClick={sendTweet}
					fullWidth>
					Post
				</Button>
			</form>
		</div>
	);
}

export default Tweetbox;

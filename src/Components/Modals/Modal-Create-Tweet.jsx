import "./Modal.css";
// import { TextInput } from 'react-native';
import React, { useState } from "react";
import Cookies from 'js-cookie';
import { createPost } from "../../services/PostCrud";

function ModalCreateTweet(props) {
	const [characterCount, setCharacterCount] = useState(0);
	const [tweet, setTweet] = useState("");

	function handleChange(event) {
		setTweet(event.target.value);
		setCharacterCount(event.target.value.length);
	}

  async function doSubmit(event){
    event.preventDefault()
    try {
      const content = {
        text: tweet,
        title: "Title",
      }
      await createPost(content)
    } catch (error) {
      throw error;
    }
    return props.onClose;
  };

	if (!props.show) {
		return null;
	}
	return (
		<div className="modal" onClick={props.onClose}>
			<div className="modal-content" onClick={(e) => e.stopPropagation()}>
				<div className="modal-header">
					<img
						className="profile-image"
						src="https://imageio.forbes.com/specials-images/imageserve/5ceec355142c500008f42068/Rihanna-Diamond-Ball-Forbes-Women/0x0.jpg?format=jpg&crop=1950,1950,x32,y257,safe&height=1950&width=1950"
						alt="Test profile"></img>
					<h1>@{Cookies.get("User")}</h1>
				</div>
        <div className="modal-body">
          <textarea
            className="text-area"
            id="tweetMessage"
            name="tweetMessage"
            placeholder="What's Happening?"
            maxLength="280"
            onChange={handleChange}>
          </textarea>
				</div>
				<div className="modal-footer">
					<p className="character-counter">{characterCount}/280</p>
          <button className="modal-button" onClick={doSubmit}>
						Post
					</button>
				</div>
			</div>
		</div>
	);
}

export default ModalCreateTweet;

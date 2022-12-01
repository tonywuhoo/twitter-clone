import React from "react";
import "./TweetBox.css";
import Button from "@mui/material/Button";
import { createPost } from "../../services/PostCrud";
import { useState } from "react";

function Tweetbox({ setToggleApiCall, toggleApiCall, post }) {
  const [imageURL, setImageURL] = useState("");
  const [text, setText] = useState("");

  function getData() {
    console.log("Refreshing Feed")
    if (toggleApiCall === true) {
      setToggleApiCall(false)
    }
    if (toggleApiCall === false) {
      setToggleApiCall(true)
    }
  }

  const doSubmit = async (event) => {
    event.preventDefault();
    try {
      const content = {
        text: text,
        title: imageURL,
      };
      await createPost(content);
      getData()
      document.getElementById("image").value = ""
      document.getElementById("text").value = ""
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
      <form onSubmit={doSubmit}>
        <div className="tweetBox-input">
          <textarea
            id="text"
            className="tweetBox-input"
            placeholder="What's happening, tweed?"
            type="text"
            size="2rem"
            onChange={handleChange}
          />
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
          fullWidth
        >
          Post
        </Button>
      </form>
    </div>
  );
}

export default Tweetbox;

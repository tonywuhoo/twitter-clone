import React from "react";
import "./TweetBox.css";
import Button from "@mui/material/Button";
import { createPost } from "../../services/PostCrud";
import { useState } from "react";
import Cookies from 'js-cookie';


function Tweetbox({ setToggleApiCall, toggleApiCall, post,}) {
  const [characterCount, setCharacterCount] = useState(0);
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
      if (imageURL === "") {
        setImageURL("noImage")
        const content = {
          text: text,
          ownerusername : Cookies.get("User").toString()
        };
        await createPost(content);
        getData()
        document.getElementById("image").value = ""
        document.getElementById("text").value = ""
      } else {
        const content = {
          text: text,
          title: imageURL,
          ownerusername : Cookies.get("User").toString()
        };
        await createPost(content);
        getData()
        document.getElementById("image").value = ""
        document.getElementById("text").value = ""
      }
    } catch (error) {
      throw error;
    }
  };

  const handleChange = (event) => {
    if (event.target.id === "text") {
      setText(event.target.value);
      setCharacterCount(event.target.value.length)
    }
    if (event.target.id === "image") {
      setImageURL(event.target.value);
    }
  };

  return (
    <div className="tweetBox">
      <form className = "form" onSubmit={doSubmit}>
        <div className="tweetBox-input">
          <textarea
            id="text"
            className="tweetBox-input"
            placeholder="What's happening, tweed?"
            type="text"
            size="2rem"
            onChange={handleChange}
          />
        <p className="character-counter">{characterCount}/280</p>
        </div>
        <input
					id="image"
					className="tweetBox-inputImage"
					placeholder="Enter image URL"
					type="text"
					onChange={handleChange}
        />
          <input className="submitButton" type="submit"/>
      </form>
    </div>
  );
}

export default Tweetbox;

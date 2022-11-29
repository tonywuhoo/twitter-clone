import "Modal.css"
import React, { useState } from 'react';

function modalCreateTweet(props) {
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
    return null
  }
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <img src={props.profile-image} alt="the users profile image"></img>
          <h1>@{props.profile-username}</h1>
        </div>
        <div className="modal-body">
          <input type="text" id="tweetMessage" name="tweetMessage" placeholder="What's Happening?" maxLength="180" onChange={handleChange}></input>
        </div>
        <div className="modal-footer">
          <p>{characterCount}/180</p>
          <button className="button">Post</button>
        </div>
      </div>
    </div>
  )
}

export default modalCreateTweet;


import "./Modal.css"
import React, { useState } from 'react';

function ModalCreateTweet(props) {
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

  function submitPost() {
    return props.onClose;
  }

  if (!props.show) {
    return null
  }
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <img className="profile-image" src="https://imageio.forbes.com/specials-images/imageserve/5ceec355142c500008f42068/Rihanna-Diamond-Ball-Forbes-Women/0x0.jpg?format=jpg&crop=1950,1950,x32,y257,safe&height=1950&width=1950" alt="Test profile image"></img>
          {/* <img src={props.profileImage} alt="the users profile image"></img> */}
          <h1>@Rihanna</h1>
          {/* <h1>@{props.profileUsername}</h1> */}
        </div>
        <div className="modal-body">
          <input type="text" id="tweetMessage" name="tweetMessage" placeholder="What's Happening?" maxLength="180" onChange={handleChange}></input>
        </div>
        <div className="modal-footer">
          <p className= "character-counter">{characterCount}/180</p>
          <button className="modal-button" onClick={submitPost()}>Post</button>
        </div>
      </div>
    </div>
  )
}

export default ModalCreateTweet;


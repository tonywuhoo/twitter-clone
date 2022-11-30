import React from "react";
import "./TweetBox.css";
import Button from "@mui/material/Button";
import Avatar from "react-avatar";

// or
import { IconButton } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function sendTweet() {
  
}
function Tweetbox() {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox-input">
          <input
            className="tweetBox-input"
            placeholder="What's happening?"
            type="text"
            size="2rem"
          />
        </div>
        <input
          className="tweetBox-inputImage"
          placeholder="Enter image URL"
          type="text"
      
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

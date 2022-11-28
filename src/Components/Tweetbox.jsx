import React from "react";
import "./TweetBox.css";
import Button from "@mui/material/Button";
import Avatar from "react-avatar";

// or
import { IconButton } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Tweetbox() {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar googleId="118096717852922241760" size="50" round={true} />
          <input placeholder="What's happening, tweed?" type="text" />
        </div>

        <Button variant="outlined" className="feed_tweet_BTN" fullWidth>
          Tweed
        </Button>
      </form>
    </div>
  );
}

export default Tweetbox;

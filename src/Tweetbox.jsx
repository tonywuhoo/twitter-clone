import React from "react";
import "./TweetBox.css";
import Button from "@mui/material/Button";

// or
import { IconButton } from "@mui/material";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Tweetbox() {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox-input">
          <input placeholder="What's happening, tweed?" type="text" />
        </div>

        <Button variant="contained">Tweed</Button>
      </form>
    </div>
  );
}

export default Tweetbox;

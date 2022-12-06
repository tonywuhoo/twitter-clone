import React from "react";
import "./Feed.css";
import Tweetbox from "./Tweetbox";
import Post from "./Post.jsx";

function Feed({ setToggleApiCall, toggleApiCall, post,postID,setpostID }) {
	return (
		<div className="feed-container">
        <Tweetbox
          post={post}
          setToggleApiCall={setToggleApiCall}
        toggleApiCall={toggleApiCall} />
    <div className="feed">
        <Post
        setpostID={setpostID}
        postID={postID}
        post={post}
        setToggleApiCall={setToggleApiCall}
        toggleApiCall = {toggleApiCall} />
			</div>
		</div>
	);
}

export default Feed;

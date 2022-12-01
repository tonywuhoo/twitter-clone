import React, { useState, useEffect } from "react";
import "./Feed.css";
import { getPosts } from "../services/PostCrud"
import Tweetbox from "../Components/Tweetbox.jsx";
import Post from "../Components/Post.jsx";

function Feed({setToggleApiCall, post , toggleApiCall}) {  
	return (
		<div className="feed-container">
			<div className="feed">
				<div className="feed-header">
					<h2>Home Page</h2>
				</div>
        <Tweetbox
          setToggleApiCall={setToggleApiCall}
          toggleApiCall= {toggleApiCall}
        />
        <Post
          post={post}
          setToggleApiCall={setToggleApiCall}
          toggleApiCall = {toggleApiCall}
        />
			</div>
		</div>
	);
}

export default Feed;

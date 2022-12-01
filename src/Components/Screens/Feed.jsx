import React, { useState, useEffect } from "react";
import "./Feed.css";
import { getPosts } from "../../services/PostCrud";
import Tweetbox from "./Tweetbox";
import Post from "./Post.jsx";

function Feed() {
	const [post, setPosts] = useState();

	useEffect(() => {
		async function grabPosts() {
			let response = await getPosts();
			// await??
			setPosts(response.data);
			console.log(response.data);
		}

		grabPosts();
	}, []);

	return (
		<div className="feed-container">
			<div className="feed">
			
				<Tweetbox />
				<Post post={post} />
			</div>
			{/* <Tweetbox />
			<Post /> */}
		</div>
	);
}

export default Feed;

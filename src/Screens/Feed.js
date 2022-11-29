import React, { useState, useEffect } from "react";
import "./Feed.css";

import Tweetbox from "../Components/Tweetbox.jsx";
// import FlipMove from "react-flip-move";
import Post from "../Components/Post.js";
// import db from 'our django backend'

function Feed() {
	// const [posts, setPosts] = useState([]);

	// useEffect(() => {
	//   db.collection("posts").onSnapshot((snapshot) =>
	//     setPosts(snapshot.docs.map((doc) => doc.data()))
	//   );
	// }, []);

	return (
		<div className="feed-container">
			<div className="feed">
				<div className="feed-header">
					<h2>Home Page</h2>
				</div>

				<Tweetbox />
				{/* <FlipMove>
        {posts.map((post) => (
          <Post
            key={post.text}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
          />
        ))}
      </FlipMove> */}
				<Post />
			</div>
		</div>
	);
}

export default Feed;

import React, { forwardRef } from "react";
import "./Post.css";
import { getPosts } from "../../services/PostCrud";
import { useState, useEffect } from "react";

function Post(props) {
	function getData() {
		console.log(props.post);
	}
	return (
		<div className="post">
			<button onClick={getData}>Click</button>
		</div>
	);
}

export default Post;

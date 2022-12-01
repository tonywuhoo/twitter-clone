import React from "react";
import "./Post.css";
import { getPosts } from "../services/PostCrud"
import { useState, useEffect } from "react";

function Post({ setToggleApiCall, post , toggleApiCall}) {
  
	return (
    <div className="post">
      { post != null && <>
        {post.map((post) => (
          <div class="post-container">
            <div class="post">
              <div class="username">
                @{post.owner}
              </div>
              <div class="postText"></div>
              {post.text}
              <div class="postText"></div>

              <div class="postImageURL">
                {post.title}
              </div>
              <button>Comments</button>
              {post != null && <>
              <button>Delete Post</button></>}
            </div>
          </div>
      ))}
      </>}
      
      
		</div>
	);
};

export default Post;

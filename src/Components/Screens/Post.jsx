import React from "react";
import "./Post.css";
function Post({ post }) {
  
	return (
    <div className="post">
      { post != null && <>
        {post.map((post,i) => (
          <div key = { i } className="post-container">
            <div className="post">
              <div className="username">
                @{post.owner}
              </div>
              <div className="postText"></div>
              {post.text}
              <div className="postText"></div>

              <div className="postImageURL">
                <img src = {post.title} />
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
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
              <div className ="buttonsContainer"> 
              <button className= 'commentsButton'>Comments</button>
              {post != null && <>
              <button className = "deletePostButton">Delete Post</button></>}
              </div>
              </div>
          </div>
      ))}
      </>}
		</div>
	);
};

export default Post;
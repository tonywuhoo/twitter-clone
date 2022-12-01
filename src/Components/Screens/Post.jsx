import React from "react";
import "./Post.css";
import Cookies from "js-cookie";
import {deletePost} from "../../services/PostCrud"

function Post({ post }) {

  function doDelete(event) {
    deletePost(event.target.id)
  }

  function doEdit(event) {
    deletePost(event.target.id)
  }
  
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
                {post.title != "noImage" && post.owner === Cookies.get("userEmail") && <>
                  <img src={post.title} /></>}
              </div>
              <div className ="buttonsContainer"> 
              <button className= 'commentsButton'>Comments</button>
              {post != null && post.owner === Cookies.get("userEmail") && <>
                <button className = "deletePostButton" id={post.id} onClick={doDelete} >Delete Post</button></>}
              {post != null && post.owner === Cookies.get("userEmail") && <>
                <button id= {post.id} onClick= { doEdit } >Edit Post</button></>}
            </div>
            </div>
          </div>
      ))}
      </>}
		</div>
	);
};

export default Post;
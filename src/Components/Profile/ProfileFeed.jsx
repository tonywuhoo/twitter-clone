import Cookies from 'js-cookie';
import "./ProfileFeed.css";
import dateFormat from 'dateformat';
import { deletePost } from "../../services/PostCrud";
import { editPost } from "../../services/PostCrud";
import ModalEditTweet from "../Modals/Modal-Edit-Post";
import React, { useState, useEffect } from "react";
import axios from "axios";

function ProfileFeed({ setToggleApiCall, toggleApiCall, post}) {
  const [showEdit, setShowEdit] = useState(false);
  const [editID, setEditID] = useState(0);
  const [displayPost, setdisplayPost] = useState()

	function doDelete(event) {
		deletePost(event.target.id);
  }

  useEffect(() => {
    async function displayPost() {
      let response = await axios.get("https://twitter-clone-backend-production-c9cc.up.railway.app/user/"+  parseInt(Cookies.get("AccountID")))
      let totalPosts = response.data.post_owner
      let storePosts = []
      for (let i = 0; i < totalPosts.length; i++){
        console.log(totalPosts)
        let response = await axios.get("https://twitter-clone-backend-production-c9cc.up.railway.app/allposts/" + totalPosts[i])
        storePosts.push(response.data)
      }
      setdisplayPost(storePosts)
    }

    displayPost()
  }, []);


	function doEdit(event) {
		setShowEdit(true);
		setEditID(event.target.id);
	}
  const createdDate = dateFormat(Cookies.get('CreationDate'), "mmmm dS, yyyy");
  const updatedPost = [];

  return (
    <div className="feed-container">
      <div className="feed">
        <div className='profileHeader'>
          <h1 className=''>{Cookies.get("User")}</h1>
        <p>Joined {createdDate}</p>
          <h2 className="tweed-title">Your Tweeds</h2>
          </div>
        <div class="tweetContainer">
        {displayPost != null && <>
          {displayPost.map((displayPost, index) => { 
            return (<div key={index}>
              <div className='postHeader'>
                  <div className='postTitle'><strong>{displayPost.text}</strong></div>
                <div className='postDate'>Posted: {displayPost.date}</div>
                </div>
              {displayPost.title != "Text" && <>
                <div className='ImageContainer'>
                  <img className='Image' src={displayPost.title} />
                  </div>
              </>}
              <div>
              <button id={displayPost.id} onClick={doDelete}>Delete</button>
                </div>
                  <br></br>
            </div>
              )
            })}
          </>}
          </div>

        {displayPost === undefined && <>
          <div>No Tweeds Yet</div>
        </>}

        </div>
      </div>
  );
}

export default ProfileFeed;
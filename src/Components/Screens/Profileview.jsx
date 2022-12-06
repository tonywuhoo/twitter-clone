import React from "react";
import Sidebar from "../../Sidebar"
import Widget from "../Widgets/Widget"
import "./Profileview.css"
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Cookies from 'js-cookie';
import {getUserByUsername} from "../../services/UserFunctions"
import { deletePost } from "../../services/PostCrud";
import { editPost } from "../../services/PostCrud";
import { display } from "@mui/system";

function Profileview() {
  const [currentViewUser, setcurrentViewUser] = useState(null)
  const [userStatus, setuserStatus] = useState("")
  const [displayPost, setdisplayPost] = useState()


	async function doDelete(event) {
		deletePost(event.target.id);
  }

  async function doEdit(event) {
		editPost(event.target.id);
  }

  function sendPostID(event) {
    Cookies.set("currentPost", event.target.id)
  }

  useEffect(() => {
    async function findingUserProfile() {
      let findingProfile = window.location.href.split("/")
      let foundProfile = findingProfile[findingProfile.length - 1]
      let response = await getUserByUsername(foundProfile)
      if (response.length < 1) {
        setuserStatus("Profile Not Found")
      }
      else {
        setuserStatus("Profile Found")
        setcurrentViewUser(response)
      }
      let storePost = []
      let totalPosts = response["post_owner"]
      for (let i = 0; i < totalPosts.length; i++){
        let response = await axios.get("https://twitter-clone-backend-production-c9cc.up.railway.app/allposts/" + totalPosts[i])
        storePost.push(response.data)
      }
      console.log(displayPost)
      setdisplayPost(storePost)
    }
    findingUserProfile()

  }, []);
  return (
    <div className="ProfileviewContainer">
      <Sidebar />
      <div className="ProfileViewUserContainer">
        <div className="noUserStatus">
        {userStatus === "Profile Not Found" && <>
        User doesn't exist</>}</div>
        {userStatus === "Profile Found" && <>
          <div className="profilecontainer">
            <div className="profileheader">
              <h1 className="username">User: <strong>{currentViewUser.username}</strong></h1>
              <p className="username">Joined: {currentViewUser.created_at}</p>
            </div>
            <div className="profilefeed">
              {displayPost != null && <>
                {displayPost.map((displayPost, index) => { 
            return (<div className="postContainer"key={index}>
              <div className='postHeader'>
                  <div className='postTitle'><strong>{displayPost.text}</strong></div>
                <div className='postDate'>Posted: {displayPost.date}</div>
                </div>
              {displayPost.title != "Text" && <>
                  <img className='Image' src={displayPost.title} />
              </>}
              <div className='postOptions'>
                {Cookies.get("User") === currentViewUser.username && <>
                <button id={displayPost.id} onClick={doDelete}>Delete</button>
                <button id={displayPost.id} onClick={doEdit}>Edit</button>
                </>}
                <Link to={`/Post/${displayPost.id}`}><button id={displayPost.id} onClick={sendPostID}>Reply</button></Link>
              </div>
            </div>
            )
          })}
                
              </>}
            </div>
          </div>
        </>}
      </div>
      <Widget />
		</div>
	);
}

export default Profileview;

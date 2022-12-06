import ProfilePage from "./Components/Profile/ProfilePage.jsx"
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Screens/Home";
import React, { useState, useEffect } from "react";
import "./App.css";
import Cookies from "js-cookie";
import { getPosts } from "./services/PostCrud";
import News from "./Components/Screens/News.jsx";
import Postdetail from "./Components/Screens/Postdetail"
import { fetchUserPosts } from "./services/PostCrud"
import Profileview from "./Components/Screens/Profileview"
  
function App() {
  const [post, setPosts] = useState();
  const [toggleApiCall, setToggleApiCall] = useState(false);
  const [postID, setpostID] = useState()
  const [userPosts, setUserPosts] = useState()

  useEffect(() => {
    const grabPosts = async () => {
      const response = await getPosts();
      setPosts(response);
    };
    grabPosts();

    const grabUserPosts = async() => {
      const response = await fetchUserPosts(Cookies.get("User"))
      Cookies.set("AccountID", response)
    }
    grabUserPosts()

  }, [toggleApiCall]);

  useEffect(() => {
    if (Cookies.get("AccessToken") === undefined) {
      Cookies.set("AccessToken", "loggedout");
    }
  }, []);

  return (
    <>
      <div className="app">
        <Routes>
          <Route path="/poop" element={<Profileview />} />
          <Route
            path="/"
            element={
              <Home
                toggleApiCall={toggleApiCall}
                setToggleApiCall={setToggleApiCall}
                post={post}
                setpostID={setpostID}
                postID={postID}
              />
            }
          />
          <Route path="/Post/:id" element={<Postdetail
          setpostID={setpostID}
          postID={postID}/>} />
          <Route path="/news" element=
            {<News/>}
          />
          <Route path="/profile" element={<ProfilePage
            setUserPosts={userPosts}
            userPosts={userPosts} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

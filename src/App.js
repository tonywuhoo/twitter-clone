import ProfilePage from "./Components/Profile/ProfilePage";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Screens/Home";
import React, { useState, useEffect } from "react";
import "./App.css";
import Cookies from "js-cookie";
import { getPosts } from "./services/PostCrud";
import Widget from "./Components/Widgets/Widget";
import News from "./Components/Screens/News.jsx";

function App() {
  const [post, setPosts] = useState();
  const [toggleApiCall, setToggleApiCall] = useState(false);

  useEffect(() => {
    const grabPosts = async () => {
      const response = await getPosts();
      setPosts(response);
    };
    grabPosts();
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
          <Route
            path="/"
            element={
              <Home
                toggleApiCall={toggleApiCall}
                setToggleApiCall={setToggleApiCall}
                post={post}
              />
            }
          />
          <Route path="/profile" element={<ProfilePage toggleApiCall={toggleApiCall}
                setToggleApiCall={setToggleApiCall}
                post={post}/>} />
          <Route path="/crypto" element={<Widget />} />
          {/* <Route path="/news" element={<Widget />} /> */}
          <Route path="/news" element=
            {<News />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;

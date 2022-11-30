// import ProfilePage from './Components/Profile/ProfilePage';
// import { Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./Screens/Home";
import Cookies from 'js-cookie'

function App() {
  const [commentCrud, setCommentCrud] = useState([]);
  const [postCrud, setPostCrud] = useState([]);
  const [userCrud, setUserCrud] = useState([]);
  const [toggleApiCall, setToggleApiCall] = useState(false);

  // useEffect(() => {
  //   const callApi = async () => {
  //     const response = await getArtists();
  //     setArtists(response);
  //     const res = await getAlbums();
  //     setAlbums(res);
  //   };
  //   callApi();
  // }, [toggleApiCall]);

  useEffect(() => {
    if (Cookies.get("AccessToken") === undefined) {
      Cookies.set("AccessToken", "loggedout")
    }
    
  }, []);
  

  return (
    // BEM
    <>
      <div className="app">
        <Home />
      </div>
    </>
  );
}

export default App;

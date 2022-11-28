// import ProfilePage from './Components/Profile/ProfilePage';
// import { Routes, Route } from 'react-router-dom';
import React, { useState, useEffect} from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import Feed from "./Screens/Feed";
import Widget from "./Components/Widget";
import Home from "./Screens/Home";

function App() {
  // useEffect(() => {
  //   const callApi = async () => {
  //     const response = await getArtists();
  //     setArtists(response);
  //     const res = await getAlbums();
  //     setAlbums(res);
  //   };
  //   callApi();
  // }, [toggleApiCall]);

  return (
    // BEM
    <div className="app">
      <Home />
      {/* <Sidebar />
      <Feed /> */}
      {/* Widget if we decide to popular */}

      {/* <Widget /> */}
    </div>
  );
}

export default App;

// import ProfilePage from './Components/Profile/ProfilePage';
// import { Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import "./App.css";
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
    </div>
  );
}

export default App;

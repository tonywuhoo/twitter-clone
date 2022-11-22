
// import ProfilePage from './Components/Profile/ProfilePage';
// import { Routes, Route } from 'react-router-dom';
import React from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import Feed from "./Screens/Feed";
import Widget from "./Components/Widget";
// import Footer from "./Components/Footer";

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

      <h1>$hill</h1>
      <Sidebar />
      <Feed />

      
      
      {/* Widget if we decide to popular */}

      <Widget />
    </div>
  );
}

export default App;

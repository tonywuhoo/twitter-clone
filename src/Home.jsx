// import ProfilePage from './Components/Profile/ProfilePage';
// import { Routes, Route } from 'react-router-dom';
import React from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import Feed from "./Screens/Feed";
import Widget from "./Components/Widget";
import Footer from "./Components/Footer";
import "./Home.css"

function Home() {
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
    <div className="home">
      
      <Sidebar />
      <Feed />
      {/* Widget if we decide to popular */}

      <Widget />
      <Footer />
    </div>
  );
}

export default Home;

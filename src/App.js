import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widget from './Widget';
import Footer from './Footer';
import ProfilePage from './Components/Profile/ProfilePage';
import { Routes, Route } from 'react-router-dom';

function App() {

  const [toggleApiCall, setToggleApiCall] = useState(false)
  
 
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
      <h1>Twotter</h1>


      
      <Sidebar />
      <Feed />

      
      
      {/* Widget if we decide to popular */}

      <Widget />
    </div>
  );
}

export default App;

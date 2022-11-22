import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widget from './Widget';

function App() {
  return (
    // BEM
    <div className="app">
      <h1>Tweedr Clone</h1>


      
      <Sidebar />
      <Feed />

      
      
      {/* Widget if we decide to popular */}

      <Widget />
    </div>
  );
}

export default App;

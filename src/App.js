import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widget from './Widget';
import { Routes, Route } from 'react-router-dom';

function App() {
	return (
		// BEM
		<div className='app'>
			<h1>Twotter</h1>

			<Sidebar />
			<Routes></Routes>
			<Feed />

			{/* Widget if we decide to popular */}

			<Widget />
		</div>
	);
}

export default App;

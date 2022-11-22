import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widget from './Widget';
import Footer from './Footer';
import ProfilePage from './Components/Profile/ProfilePage';
import { Routes, Route } from 'react-router-dom';

function App() {
	return (
		// BEM
		<div className='app'>
			<h1>Twotter</h1>
			<Sidebar />
			<Routes>
				<Route path='/profile' element={<ProfilePage />} />
			</Routes>
			<Feed />
			{/* Widget if we decide to popular */}
			<Widget />
			<Footer />
		</div>
	);
}

export default App;

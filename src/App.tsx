/** @format */

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import HomePage from './Components/HomePage/HomePage';
import ProductPage from './Components/ProductPage/ProductPage';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<HomePage />} />
					{/* <Route path="/electronics" element={<Electronic />} />
					<Route path="/jewelry" element={<Jewelry />} />
					<Route path="/mensclothing" element={<Mensclothing />} />
					<Route path="/womensclothing" element={<Womensclothing />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="/register" element={<Register />} />
					<Route path="/useraccount" element={<UserAccount />} /> */}
				</Routes>
			</BrowserRouter>
			<ProductPage category={'electronics'} />
			{/* <HomePage /> */}
		</div>
	);
}

export default App;

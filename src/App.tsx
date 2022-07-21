/** @format */

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import HomePage from './Components/HomePage/HomePage';
import ProductPage from './Components/ProductPage/ProductPage';
import Cart from './Components/Cart/Cart';
import LoginPage from './Components/LoginPage/LoginPage';
import Register from './Components/Register/Register';
import UserAccount from './Components/UserAccount/UserAccount';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route
						path="/electronics"
						element={<ProductPage category={'electronics'} />}
					/>
					<Route
						path="/jewelry"
						element={<ProductPage category={'jewelery'} />}
					/>
					<Route
						path="/mensclothing"
						element={<ProductPage category={"men's clothing"} />}
					/>
					<Route
						path="/womensclothing"
						element={<ProductPage category={"women's clothing"} />}
					/>
					<Route path="/cart" element={<Cart />} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="/register" element={<Register />} />
					<Route path="/useraccount" element={<UserAccount />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;

/** @format */

import React from 'react';
import ProductTile from './ProductTile';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../redux/store';

const product = {
	id: 1,
	title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
	price: 109.95,
	description:
		'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
	category: "men's clothing",
	image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
	rating: {
		rate: 0,
		count: 0,
	},
};

describe('<ProductTile>', () => {
	it('should return additional card if clicked', () => {
		render(
			//if redux in app we have to wrap component with provider
			<Provider store={store}>
				<ProductTile product={product} />
			</Provider>
		);
		//choosing element which hold event
		const CardImg = screen.getByAltText(
			'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops'
		);
		//simulating event
		fireEvent.click(CardImg);
		//checking if result of event
		expect(screen.getByText('Add To Cart')).not.toBeNull();
	});
});

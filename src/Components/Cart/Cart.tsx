/** @format */

import React from 'react';
import CartProductTile from '../CartProductTile/CartProductTile';

function Cart() {
	return (
		<div>
			<CartProductTile product={{ title: 'cos', price: 1000000 }} />
		</div>
	);
}

export default Cart;

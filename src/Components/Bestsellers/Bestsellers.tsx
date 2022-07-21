/** @format */

import * as React from 'react';
import ProductTile from '../ProductTile/ProductTile';
import Box from '@mui/material/Box';

import { Product, ProductProps } from '../../helpers/interfaces';

import axios from 'axios';

function Bestsellers() {
	//state hook for products
	const [products, setProducts] = React.useState<Product[]>();

	//hook useEffect for fetching categories from API using axios
	React.useEffect(() => {
		axios
			.get('https://fakestoreapi.com/products?limit=10')
			.then((response) => {
				setProducts(response.data);
			})
			.catch((e) => {
				console.log(e);
			});
	}, []);
	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'center',
				flexWrap: 'wrap',
			}}>
			{products &&
				products.map((product: Product, idx: number) => {
					return (
						<div key={idx}>
							<ProductTile product={product} />
						</div>
					);
				})}
		</Box>
	);
}

export default Bestsellers;

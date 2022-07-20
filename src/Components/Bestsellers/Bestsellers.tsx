/** @format */

import * as React from 'react';
import ProductTile from '../ProductTile/ProductTile';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import { Product, ProductProps } from '../../helpers/interfaces';

import axios from 'axios';
// Stwórz komponent Bestsellers
// stan bestsellers (typ Product[])
// useEffect i fetch do linku `fakestoreapi.com/products?limit=10`, response do stanu bestsellers
// JSX:
// Card
// w Card pętla z wyświetleniem komponentów ProductTile

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
						<>
							<ProductTile key={idx} product={product} />
						</>
					);
				})}
		</Box>
	);
}

export default Bestsellers;

/** @format */

import * as React from 'react';
import ProductTile from '../ProductTile/ProductTile';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import { ProductProps } from '../../helpers/interfaces';

import axios from 'axios';
// Stwórz komponent Bestsellers
// stan bestsellers (typ Product[])
// useEffect i fetch do linku `fakestoreapi.com/products?limit=10`, response do stanu bestsellers
// JSX:
// Card
// w Card pętla z wyświetleniem komponentów ProductTile

function Bestsellers() {
	//state hook for products
	const [products, setProducts] = React.useState<ProductProps[]>();

	//hook useEffect for fetching categories from API using axios
	React.useEffect(() => {
		axios
			.get('https://fakestoreapi.com/products?limit=10')
			.then((response) => {
				console.log(response);
				setProducts(response.data);
				console.log(products);
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
				products.map((product: ProductProps, idx: number) => {
					return (
						<Paper
							key={idx}
							elevation={3}
							sx={{ m: '1rem', p: '1rem 2rem', width: '250px' }}>
							<ProductTile product={product} />
						</Paper>
					);
				})}
		</Box>
	);
}

export default Bestsellers;

/** @format */

import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import {
	ProductPageProps,
	Product,
	ProductProps,
} from '../../helpers/interfaces';

import ProductTile from '../ProductTile/ProductTile';

const ProductPage: React.FC<ProductPageProps> = ({ category }) => {
	//state hook for holding products data from fetching
	const [products, setProducts] = React.useState<Product[]>();

	React.useEffect(() => {
		//fetching data from API
		axios
			.get(`https://fakestoreapi.com/products/category/${category}`)
			.then((res) => {
				//setting products to data from response
				setProducts(res.data);
			})
			.catch((e) => console.log(e));
	}, [category]);

	return (
		<>
			<Typography
				align="center"
				variant="inherit"
				component="h2"
				sx={{ my: '1rem' }}>
				{/* displaying category title */}
				PRODUCTS FROM CATEGORY {category.toUpperCase()}
			</Typography>
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
		</>
	);
};

export default ProductPage;

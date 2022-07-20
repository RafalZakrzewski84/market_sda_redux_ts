/** @format */

import * as React from 'react';
import axios from 'axios';
import { CategoryTileProps } from '../../helpers/interfaces';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const CategoryTile: React.FC<CategoryTileProps> = ({ category }) => {
	//state for setting category img
	const [image, setImage] = React.useState<string>();

	//fetching category img from API
	React.useEffect(() => {
		axios
			.get(`https://fakestoreapi.com/products/category/${category}?limit=1`)
			.then((response) => {
				//setting img url to state variable image
				setImage(response.data[0].image);
			})
			.catch((e) => {
				console.log(e);
			});
	}, []);

	return (
		<>
			<Typography
				align="center"
				variant="inherit"
				component="div"
				sx={{ mb: '1rem' }}>
				{/* displaying category title */}
				{category.toUpperCase()}
			</Typography>
			<Box
				component="img"
				src={image}
				alt={category}
				sx={{ maxWidth: '60%' }}
			/>
		</>
	);
};

export default CategoryTile;

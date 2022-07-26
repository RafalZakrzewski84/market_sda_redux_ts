/** @format */

import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import axios from 'axios';

import CategoryMenu from '../CategoryMenu/CategoryMenu';
import Bestsellers from '../Bestsellers/Bestsellers';

function HomePage() {
	//state hook for categories
	const [categories, setCategories] = React.useState<string[] | undefined>();

	//hook useEffect for fetching categories from API using axios
	React.useEffect(() => {
		axios
			.get('https://fakestoreapi.com/products/categories')
			.then((response) => {
				setCategories(response.data);
			})
			.catch((e) => {
				console.log(e);
			});
	}, []);

	return (
		<>
			<CssBaseline />
			<Container
				fixed
				sx={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					flexDirection: 'column',
				}}>
				<Box sx={{ maxWidth: '80%', my: '1rem' }}>
					<Typography align="center" variant="h4" gutterBottom component="div">
						Browse and buy your favorite electronics, jewelry and clothes. All
						in one place.
					</Typography>
				</Box>
				{categories && <CategoryMenu categories={categories} />}
				<Typography
					align="center"
					variant="h5"
					gutterBottom
					component="div"
					sx={{ borderBottom: 1, borderColor: 'grey.500' }}>
					Our bestsellers:
				</Typography>
				<Bestsellers />
			</Container>
		</>
	);
}

export default HomePage;

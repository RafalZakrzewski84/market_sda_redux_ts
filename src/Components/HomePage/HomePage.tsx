/** @format */

import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import axios from 'axios';

import CategoryMenu from '../CategoryMenu/CategoryMenu';

function HomePage() {
	//state hook for categories
	const [categories, setCategories] = React.useState<string[] | undefined>();

	//hook useEffect for fetching categories from API using axios
	React.useEffect(() => {
		axios
			.get('https://fakestoreapi.com/products/categories')
			.then((response) => {
				setCategories(response.data);
				console.log(categories);
			})
			.catch((e) => {
				console.log(e);
			});
	}, []);

	return (
		<>
			<CssBaseline />
			<Container align="center" fixed>
				<Box sx={{ maxWidth: '80%', my: '1rem' }}>
					<Typography align="center" variant="h4" gutterBottom component="div">
						Browse and buy your favorite electronics, jewelry and clothes. All
						in one place.
					</Typography>
					<Typography align="center" variant="h6" gutterBottom component="div">
						Our bestsellers:
					</Typography>
				</Box>
				{categories && <CategoryMenu categories={categories} />}
			</Container>
		</>
	);
}

export default HomePage;

/** @format */

import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import { CategoryMenuProps } from '../../helpers/interfaces';
import CategoryTile from '../CategoryTile/CategoryTile';

// JSX:
// Paper
// {categories.map}:
// CategoryTile (przez props podajemy daną kategorie)

// CategoryTile:
// 1. Stwórz interface z propsami (przyjmuje stringa)
// 2. Stwórz stan image (string)
// 3. useEffect: fetch z `fakestoreapi.com/products/category/${category}?limit=1`, z danych które przyjdą do stanu wchodzi własność image, DA: []

// JSX:
// Card
// Typography z textem {category}
// wyświeltnie obrazka wg stanu image (Box, component='img' src='')

const CategoryMenu: React.FC<CategoryMenuProps> = ({ categories }) => {
	console.log(categories);
	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'center',
				flexWrap: 'wrap',
			}}>
			{categories.map((cat) => {
				return (
					<Paper elevation={3} sx={{ mx: '1rem', p: '1rem 2rem' }}>
						{cat}
					</Paper>
				);
			})}
		</Box>
	);
};

export default CategoryMenu;

/** @format */

import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';

import { CategoryMenuProps } from '../../helpers/interfaces';
import CategoryTile from '../CategoryTile/CategoryTile';

const CategoryMenu: React.FC<CategoryMenuProps> = ({ categories }) => {
	console.log('CategoryMenu', categories);
	const links = [
		'/electronics',
		'/jewelry',
		'/mensclothing',
		'/womensclothing',
	];
	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'center',
				flexWrap: 'wrap',
			}}>
			{categories.map((category: string, idx: number) => {
				return (
					<Paper
						key={idx}
						elevation={3}
						sx={{ m: '1rem', p: '1rem 2rem', width: '250px' }}>
						<Link key={links[idx]} to={links[idx]}>
							<CategoryTile category={category} />
						</Link>
					</Paper>
				);
			})}
		</Box>
	);
};

export default CategoryMenu;

/** @format */

import * as React from 'react';
import { CategoryTileProps } from '../../helpers/interfaces';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const CategoryTile: React.FC<CategoryTileProps> = ({ category, image }) => {
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

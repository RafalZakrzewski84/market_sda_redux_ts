/** @format */

import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ProductProps } from '../../helpers/interfaces';

const CartProductTile: React.FC<ProductProps> = ({ product }) => {
	return (
		<Card sx={{ width: 350, m: '10px' }}>
			<CardMedia
				component="img"
				alt={product.title}
				height="140"
				image={product.image}
			/>
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					{product.title}
				</Typography>
			</CardContent>
			<CardContent>
				<Typography variant="h6" color="text.secondary">
					Price: {product.price} PLN
				</Typography>
			</CardContent>
			<CardActions>
				<Button variant="contained" size="small">
					Remove From Cart
				</Button>
			</CardActions>
		</Card>
	);
};

export default CartProductTile;

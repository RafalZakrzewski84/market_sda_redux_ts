/** @format */

import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { ProductProps } from '../../helpers/interfaces';

// Stwórz komponent ProductTile, propsy: product
// stan clicked
// JSX:
// Card (onClick przestawia stan clicked na true jeżeli jest false i na odwrót):
//--------
// Box img (src=product.image)
// Typography z product.title
// Typography z product.category
// Typography z product.price
// Typography z product.rating.rate i product.rating.count
// --------
// Warunkowo renderowany Card w zależności od stanu clicked {clicked && <Card ...}:
// Typography z product.description
// Button Add to cart

const ProductTile: React.FC<ProductProps> = ({ product }) => {
	const [clicked, setClicked] = React.useState<boolean>(false);

	const clickHandler = () => {
		if (clicked === false) {
			setClicked(true);
		}
		if (clicked === true) {
			setClicked(false);
		}
	};

	return (
		<Card sx={{ width: 350, m: '10px' }}>
			<CardMedia
				onClick={clickHandler}
				component="img"
				alt={product.title}
				height="140"
				image={product.image}
			/>
			<CardContent>
				<Typography
					onClick={clickHandler}
					gutterBottom
					variant="h5"
					component="div">
					{product.title}
				</Typography>
				{clicked && (
					<Typography variant="body2" color="text.secondary">
						{product.description}
					</Typography>
				)}
			</CardContent>
			<CardContent>
				<Typography variant="h6" color="text.secondary">
					Price: {product.price} PLN
				</Typography>
				<Typography variant="body2" color="text.secondary">
					Rate: {product.rating.rate}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					Votes: {product.rating.count}
				</Typography>
			</CardContent>
			<CardActions>
				<Button variant="contained" size="small">
					Add To Cart
				</Button>
			</CardActions>
		</Card>
	);
};

export default ProductTile;

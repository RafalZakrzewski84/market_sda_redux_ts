/** @format */

import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { ProductProps } from '../../helpers/interfaces';

import { useDispatch } from 'react-redux';
import { setProductCartState } from '../../redux/actions/productCartActions';

const ProductTile: React.FC<ProductProps> = ({ product }) => {
	//calling dispatch
	const dispatch = useDispatch();

	const [clicked, setClicked] = React.useState<boolean>(false);

	const clickHandler = () => {
		if (clicked === false) {
			setClicked(true);
		}
		if (clicked === true) {
			setClicked(false);
		}
		console.log(clicked);
	};

	const addToCart = () => {
		dispatch(setProductCartState(product));
		console.log('Product added');
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
				<Button onClick={addToCart} variant="contained" size="small">
					Add To Cart
				</Button>
			</CardActions>
		</Card>
	);
};

export default ProductTile;

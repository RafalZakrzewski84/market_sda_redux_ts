/** @format */

import * as React from 'react';
import axios from 'axios';
import { Category } from '../../helpers/interfaces';

// CategoryTile:
// 1. Stwórz interface z propsami (przyjmuje stringa)
// 2. Stwórz stan image (string)
// 3. useEffect: fetch z `fakestoreapi.com/products/category/${category}?limit=1`, z danych które przyjdą do stanu wchodzi własność image, DA: []

// JSX:
// Card
// Typography z textem {category}
// wyświeltnie obrazka wg stanu image (Box, component='img' src='')

const CategoryTile: React.FC<Category> = ({ category }) => {
	const [image, setImage] = React.useState<string[] | undefined>();
	React.useEffect(() => {
		axios
			.get(`https://fakestoreapi.com/products/category/${category}?limit=1`)
			.then((response) => {
				console.log(response);
				setImage(response.data.image);
			})
			.catch((e) => {
				console.log(e);
			});
	}, []);

	return <div>CategoryTile</div>;
};

export default CategoryTile;

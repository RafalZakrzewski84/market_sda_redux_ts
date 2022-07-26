/** @format */

import * as React from 'react';
import ProductTile from '../ProductTile/ProductTile';
import Box from '@mui/material/Box';

import { Product, ProductProps } from '../../helpers/interfaces';

import { fetchProducts } from '../../redux/actions/productsAction';
import { useAppDispatch } from '../../redux/store';
import { ThunkDispatch } from 'redux-thunk';
import { ProductsInitialState } from '../../helpers/interfaces';
import { AnyAction } from 'redux';
import { useSelector } from 'react-redux';

import { ProductsState } from '../../helpers/interfaces';

function Bestsellers() {
	//global dispatch from state
	const dispatch = useAppDispatch();

	React.useEffect(() => {
		//calling for changing state using function from productsAction
		dispatch(
			fetchProducts(10) as ThunkDispatch<
				ProductsInitialState,
				unknown,
				AnyAction
			>
		);
	}, []);

	//checking state of fetched products
	const products = useSelector(
		(state: ProductsState) => state.productsState.fetchedProducts
	);

	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'center',
				flexWrap: 'wrap',
			}}>
			{products &&
				products.map((product: Product, idx: number) => {
					return (
						<div key={idx}>
							<ProductTile product={product} />
						</div>
					);
				})}
		</Box>
	);
}

export default Bestsellers;

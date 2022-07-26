/** @format */

import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';

import { CategoryMenuProps } from '../../helpers/interfaces';
import CategoryTile from '../CategoryTile/CategoryTile';

//imports used in redux
import { useAppDispatch } from '../../redux/store';
import { fetchCategoryImg } from '../../redux/actions/productsAction';
import { ThunkDispatch } from 'redux-thunk';
import {
	ProductsInitialState,
	CategoryImgState,
} from '../../helpers/interfaces';
import { AnyAction } from 'redux';
import { useSelector } from 'react-redux';

const CategoryMenu: React.FC<CategoryMenuProps> = ({ categories }) => {
	const links: string[] = [
		'/electronics',
		'/jewelry',
		'/mensclothing',
		'/womensclothing',
	];

	const dispatch = useAppDispatch();
	//fetching category img from API using dispatch action from productsAction
	React.useEffect(() => {
		dispatch(
			fetchCategoryImg(categories) as ThunkDispatch<
				ProductsInitialState,
				unknown,
				AnyAction
			>
		);
	}, []);

	const images = useSelector(
		(state: CategoryImgState) => state.categoryImgState.fetchedImages
	);

	console.log('CategoryMenu', images[0]);

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
							<CategoryTile category={category} image={images[idx]} />
						</Link>
					</Paper>
				);
			})}
		</Box>
	);
};

export default CategoryMenu;

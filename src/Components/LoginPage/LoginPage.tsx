/** @format */

import React from 'react';
import { Link } from 'react-router-dom';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';

import LoginFrom from '../LoginForm/LoginForm';

function LoginPage() {
	return (
		<Container
			maxWidth="sm"
			sx={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				flexDirection: 'column',
			}}>
			<Card sx={{ minWidth: 275, my: 4 }}>
				<Typography
					align="center"
					variant="h2"
					component="h2"
					sx={{ fontSize: '1.2rem', my: 2 }}>
					Login to use our page
				</Typography>
				<LoginFrom />
			</Card>
			<Card sx={{ minWidth: 275, my: 2 }}>
				<Typography
					variant="h2"
					component="h2"
					sx={{ fontSize: '1.2rem', my: 2 }}>
					Don't have an account yet? Register now!
				</Typography>
				<Link to="/register" style={{ textDecoration: 'none' }}>
					<Button variant="contained" sx={{ mb: 2 }}>
						Register
					</Button>
				</Link>
			</Card>
		</Container>
	);
}

export default LoginPage;

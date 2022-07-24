/** @format */

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import firebase from '../../helpers/firebaseConfig';

import { useSelector } from 'react-redux';

interface AuthState {
	authState: boolean;
}

interface State {
	authState: AuthState;
}

const Navbar = () => {
	//redux state for auth
	const authState = useSelector((state: State) => state.authState.authState);

	const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
		null
	);
	const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
		null
	);

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	//changing login links if user logged in
	let logLink;
	let btnLink;
	if (authState) {
		logLink = '/';
		btnLink = 'LogOut';
	} else {
		logLink = '/login';
		btnLink = 'LogIn';
	}

	const auth = firebase.auth;

	const pages = [
		{ name: 'Electronics', link: '/electronics' },
		{ name: 'Jewelry', link: '/jewelry' },
		{ name: "Men's clothing", link: '/mensclothing' },
		{ name: "Women's clothing", link: '/womensclothing' },
		{ name: 'Cart', link: '/cart' },
		{ name: 'Favorite', link: '/favorite' },
	];
	const settings = [
		{ name: 'Account', link: '/useraccount' },
		{ name: btnLink, link: logLink },
	];

	return (
		<AppBar position="static" sx={{ backgroundColor: 'gray' }}>
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
					<Typography
						variant="h6"
						noWrap
						component="a"
						href="/"
						sx={{
							mr: 2,
							display: { xs: 'none', md: 'flex' },
							fontFamily: 'Roboto',
							fontWeight: 700,
							letterSpacing: '.3rem',
							color: 'inherit',
							textDecoration: 'none',
						}}>
						SDA MARKET
					</Typography>

					<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit">
							<MenuIcon />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'left',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'left',
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: 'block', md: 'none' },
							}}>
							{pages.map((page) => (
								<Link key={page.link} to={page.link}>
									<MenuItem key={page.name} onClick={handleCloseNavMenu}>
										<Typography textAlign="center">{page.name}</Typography>
									</MenuItem>
								</Link>
							))}
						</Menu>
					</Box>
					<AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
					<Typography
						variant="h5"
						noWrap
						component="a"
						href="/"
						sx={{
							mr: 2,
							display: { xs: 'flex', md: 'none' },
							flexGrow: 1,
							fontFamily: 'Roboto',
							fontWeight: 700,
							letterSpacing: '.3rem',
							color: 'inherit',
							textDecoration: 'none',
						}}>
						SDA MARKET
					</Typography>
					<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
						{pages.map((page) => (
							<Link key={page.link} to={page.link}>
								<Button
									key={page.name}
									onClick={handleCloseNavMenu}
									sx={{ my: 2, color: 'white', display: 'block' }}>
									{page.name}
								</Button>
							</Link>
						))}
					</Box>

					<Box sx={{ flexGrow: 0 }}>
						<Tooltip title="Open settings">
							<Link to={'/login'}>
								<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
									<Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
								</IconButton>{' '}
							</Link>
						</Tooltip>
						{authState && (
							<Menu
								sx={{ mt: '45px' }}
								id="menu-appbar"
								anchorEl={anchorElUser}
								anchorOrigin={{
									vertical: 'top',
									horizontal: 'right',
								}}
								keepMounted
								transformOrigin={{
									vertical: 'top',
									horizontal: 'right',
								}}
								open={Boolean(anchorElUser)}
								onClose={handleCloseUserMenu}>
								{authState &&
									settings.map((setting) => (
										<Link key={setting.link} to={setting.link}>
											<MenuItem
												key={setting.name}
												onClick={handleCloseUserMenu}>
												{/* IMPORTANT */}
												{/* using this we cane add logic to element rendered in loop */}
												<Typography
													onClick={
														setting.name === 'LogOut'
															? () => {
																	signOut(auth);
															  }
															: () => {}
													}
													align="center">
													{setting.name}
												</Typography>
											</MenuItem>
										</Link>
									))}
							</Menu>
						)}
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};

export default Navbar;

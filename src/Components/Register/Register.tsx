/** @format */

import * as React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';

import { UserRegister } from '../../helpers/interfaces';

import { createUserWithEmailAndPassword } from 'firebase/auth';
import firebase from '../../helpers/firebaseConfig';

function Register() {
	//auth function
	const auth = firebase.auth;

	//functions for handle form
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<UserRegister>();

	//function for taking data from form and adding to registering function
	const submitHandler: SubmitHandler<UserRegister> = (data) => {
		// initialize variables for crating user
		const email = data.email;
		const password = data.password;
		const password2 = data.repeatedPassword;

		//condition if passwords match register user
		if (password === password2) {
			//function registering new user in firebase
			createUserWithEmailAndPassword(auth, email, password)
				.then((userCredential) => {
					//confirmation that user was crated
					const user = userCredential.user;
					console.log('user created:', user.email);
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					console.log(errorCode, errorMessage);
				});
		} else {
			console.log("passwords doesn't match");
		}
	};

	return (
		<>
			<Box
				sx={{
					bgcolor: '#fff',
					my: '2rem',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}>
				<Card sx={{ width: '300px', my: '2rem', mx: 'auto' }}>
					<form onSubmit={handleSubmit(submitHandler)}>
						<Typography
							variant="h2"
							component="h2"
							sx={{ fontSize: '1.2rem', my: 2 }}>
							To Sign In Please Fill In The Form
						</Typography>
						<TextField
							id="outlined-basic1"
							placeholder="Email"
							variant="outlined"
							sx={{ display: 'block', mb: 1 }}
							type="email"
							{...register('email', { required: true })}
						/>
						<TextField
							id="outlined-basic2"
							placeholder="Password"
							variant="outlined"
							sx={{ display: 'block', mb: 1 }}
							type="password"
							{...register('password', {
								required: 'Minimum length 6 chats',
								minLength: 6,
							})}
						/>
						{/* need to be resolved */}
						<p>{errors.password?.message}</p>
						<TextField
							id="outlined-basic3"
							placeholder="Confirm Password"
							variant="outlined"
							sx={{ display: 'block', mb: 1 }}
							type="password"
							{...register('repeatedPassword', {
								required: true,
							})}
						/>
						<Button
							variant="contained"
							type="submit"
							size="small"
							sx={{ m: '1rem', px: '2rem' }}>
							Register
						</Button>
					</form>
				</Card>
			</Box>
		</>
	);
}

export default Register;

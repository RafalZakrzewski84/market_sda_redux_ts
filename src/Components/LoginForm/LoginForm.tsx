/** @format */

import * as React from 'react';

import { useForm, SubmitHandler } from 'react-hook-form';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { User } from '../../helpers/interfaces';
import { signInWithEmailAndPassword } from 'firebase/auth';
import firebase from '../../helpers/firebaseConfig';

const LoginForm = () => {
	const auth = firebase.auth;

	//functions for handle form
	const { register, handleSubmit } = useForm<User>();

	//getting data from form
	const submitHandler: SubmitHandler<User> = (data) => {
		//crating variables for log in
		const email = data.email;
		const password = data.password;

		//function for logIn
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				const user = userCredential.user;
				console.log(user.email, 'log in');
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(errorCode, errorMessage);
			});
	};

	return (
		<Box align="center" sx={{ bgcolor: '#fff', my: '2rem' }}>
			<form onSubmit={handleSubmit(submitHandler)}>
				<TextField
					type="email"
					id="outlined-basic"
					placeholder="Email"
					variant="outlined"
					sx={{ display: 'block', mb: 1 }}
					{...register('email', { required: true })}
				/>
				<TextField
					type="password"
					id="outlined-basic"
					placeholder="Password"
					variant="outlined"
					sx={{ display: 'block', mb: 1 }}
					{...register('password', { required: true })}
				/>
				<Button variant="contained" type="submit">
					Log in
				</Button>
			</form>
		</Box>
	);
};

export default LoginForm;

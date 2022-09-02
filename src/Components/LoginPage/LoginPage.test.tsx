/** @format */

import React from 'react';
import LoginPage from './LoginPage';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

describe('<LoginPage>', () => {
	it('should render an h2 with "Login to use our page" text', () => {
		//arrange
		//if component contain router element we have to use BrowserRouter
		render(
			<BrowserRouter>
				<LoginPage />
			</BrowserRouter>
		);

		//act screen provided by testing-library
		const h2 = screen.getByText('Login to use our page');

		//assert
		expect(h2).not.toBeNull();
	});

	it('should render form with 2 inputs', () => {
		//arrange
		//if component contain router element we have to use BrowserRouter
		render(
			<BrowserRouter>
				<LoginPage />
			</BrowserRouter>
		);

		//act screen provided by testing-library
		const buttonSubmit = screen.getByText('Log in');
		const textInp = screen.getAllByRole('textbox');

		//assert
		expect(buttonSubmit).not.toBeNull();
		expect(textInp).not.toBeNull();
	});
});

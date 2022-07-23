/** @format */

export interface CategoryMenuProps {
	categories: string[];
}

export interface ProductPageProps {
	category: string;
}

export interface CategoryTileProps {
	category: string;
}

// interface Product
// interface Rating

interface Rating {
	rate: number;
	count: number;
}

export interface Product {
	id: number;
	title: string;
	price: number;
	description: string;
	category: string;
	image: string;
	rating: Rating;
}

export interface ProductProps {
	product: Product;
}

export interface User {
	email: string;
	password: string;
}

export interface UserRegister {
	email: string;
	password: string;
	repeatedPassword: string;
}

export interface NavbarProps {
	isLoggedIn: boolean;
}

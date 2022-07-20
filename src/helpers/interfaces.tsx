/** @format */

export interface CategoryMenuProps {
	categories: string[];
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

//can we export Product?
interface Product {
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

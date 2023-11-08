interface CartData {
	_id: string;
	Image: string;
	Name: string;
	Desc: string;
	Price: number;
	Quantity: number;
	CartQuantity?: number;
}

export const TotalPrice = (cart: Array<CartData>) => {
	const result = cart.reduce((acc, current) => {
		return acc + current.Price * current.CartQuantity!;
	}, 0);

	return result;
};

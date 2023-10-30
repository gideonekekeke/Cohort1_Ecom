import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IUser {
	id: string;
	token: string;
	role: string;
}

interface CartData {
	_id: string;
	Image: string;
	Name: string;
	Desc: string;
	Price: number;
	Quantity: number;
	CartQuantity?: number;
}

const initialState = {
	currentUser: {} as IUser | null,
	cart: [] as Array<CartData> | null,
	totalPrice: 0,
	totalQuantity: 0,
};

const ReduxState = createSlice({
	name: "kode10x-ecomerce",
	initialState,
	reducers: {
		addUser: (state, { payload }: PayloadAction<IUser>) => {
			state.currentUser = payload;
		},

		addToCart: (state, { payload }: PayloadAction<CartData>) => {
			const check = state.cart.findIndex((el) => el._id === payload._id);

			if (check >= 0) {
				state!.cart[check]!.CartQuantity! += 1;
			} else {
				state.cart?.push({
					...payload,
					CartQuantity: 1,
				});
			}

			state.totalQuantity += 1;
		},

		Logout: (state) => {
			state.currentUser = null;
			state.cart = null;
			state.totalQuantity = 0;
			state.totalPrice = 0;
		},
	},
});

export const { addUser, addToCart } = ReduxState.actions;

export default ReduxState.reducer;

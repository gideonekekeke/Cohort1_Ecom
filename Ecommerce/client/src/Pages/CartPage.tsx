import React from "react";
import { useSelector } from "react-redux";
import { TotalPrice } from "../Components/helpers/TotalPrice";
import PayStackPayment from "./PayStackPayment";
import FlutterPay from "./FlutterPayment";

const CartPage = () => {
	const cartData = useSelector((state: any) => state.cart);
	console.log(cartData);
	return (
		<div>
			<br />
			<br />
			<br />
			<br />
			<div className='text-black'>Total Price : {TotalPrice(cartData)}</div>
			<PayStackPayment />
			<FlutterPay />
		</div>
	);
};

export default CartPage;

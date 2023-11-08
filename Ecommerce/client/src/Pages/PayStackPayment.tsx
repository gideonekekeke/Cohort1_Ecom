import { usePaystackPayment } from "react-paystack";
import { useSelector } from "react-redux";
import { TotalPrice } from "../Components/helpers/TotalPrice";
import { useNavigate } from "react-router-dom";

const PaystackHookExample = () => {
	const cartData = useSelector((state: any) => state.cart);
	const Navigate = useNavigate();

	const config = {
		reference: `${Math.random() * 5874657}`,
		email: "user@example.com",
		// amount: TotalPrice(cartData) * 100,
		amount: 10000,
		publicKey: "pk_test_23d13fb294f558953fdcdc971aa6ece27ff088e2",
	};

	// you can call this function anything
	const onSuccess = (reference: any) => {
		// Implementation for whatever you want to do with reference and after success call.
		console.log(reference);

		Navigate("/success");
	};

	// you can call this function anything
	const onClose = () => {
		// implementation for  whatever you want to do when the Paystack dialog closed.
		console.log("closed");
	};

	const initializePayment = usePaystackPayment(config);
	return (
		<div>
			<button
				onClick={() => {
					initializePayment(onSuccess, onClose);
				}}>
				Checkout with Paystack
			</button>
		</div>
	);
};

function PayStackPayment() {
	return (
		<div className='App'>
			<PaystackHookExample />
		</div>
	);
}

export default PayStackPayment;

import React from "react";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";

export default function FlutterPay() {
	const config = {
		public_key: "FLWPUBK_TEST-854028df7b5ef985ee233c44cd430fbf-X",
		tx_ref: Date.now(),
		amount: 200 ,
		currency: "NGN",
		payment_options: "card,mobilemoney,ussd",
		customer: {
			email: "user@gmail.com",
			phone_number: "070********",
			name: "john doe",
		},
		customizations: {
			title: "my Payment Title",
			description: "Payment for items in cart",
			logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
		},
	};

	const handleFlutterPayment = useFlutterwave(config);

	return (
		<div className='App'>
			<h1>Hello Test user</h1>

			<button
				onClick={() => {
					handleFlutterPayment({
						callback: (response) => {
							console.log(response);
							closePaymentModal(); // this will close the modal programmatically
						},
						onClose: () => {},
                    
					});
				}}>
				Payment with FlutterWave
			</button>
		</div>
	);
}

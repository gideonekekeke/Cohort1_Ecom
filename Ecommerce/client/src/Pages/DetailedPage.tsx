import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ViewSingleProducts } from "../utils/ApiCalls";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../services/ReduxState";

const DetailedPage = () => {
	const { id }: any = useParams();
	const dispatch = useDispatch();
	const [detailedData, setDetailedData] = useState();
	const readCart = useSelector((state: any) => state.cart);

	// console.log(readCart);

	const readCardId = readCart.find((el) => el._id === id);

	console.log(readCardId);

	const fetchData = async () => {
		try {
			const response = await ViewSingleProducts(id);
			// console.log(response);
			setDetailedData(response?.data?.data);
		} catch (err) {
			return err;
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div className='text-black'>
			<br />
			<br />
			<br />
			<br />

			<div className='flex gap-6'>
				<div>
					<img className='h-[200px] w-[300px]' src={detailedData?.Image} />
				</div>
				<div>
					<div>Title : {detailedData?.Name}</div>
					<br />
					<div>Cartegory : </div>
					<br />
					<div>Price : {detailedData?.Price} </div>
					<br />
					<div className='flex items-center gap-9'>
						<button>-</button>
						<div>{readCardId?.CartQuantity}</div>
						<button
							onClick={() => {
								dispatch(addToCart(detailedData));
							}}
							disabled={readCardId.CartQuantity === detailedData?.Quantity}>
							+
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DetailedPage;

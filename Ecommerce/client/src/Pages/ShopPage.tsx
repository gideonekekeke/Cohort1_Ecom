import React, { useEffect, useState } from "react";
import pic from "../assets/tshirt.png";
import data from "../Components/Items.json";
import Card from "../Components/Card";
import { ViewAllProducts } from "../utils/ApiCalls";

const ShopPage: React.FC = () => {
	const [load, setLoad] = useState(false);
	const [productData, setProductData] = useState([]);
	const fetchProduct = async () => {
		setLoad(true);
		try {
			const response = await ViewAllProducts();
			setProductData(response?.data?.data);
			setLoad(false);
			console.log(response);
		} catch (err) {
			return err;
		}
	};

	useEffect(() => {
		fetchProduct();
	}, []);

	return (
		<div className='min-h-full w-screen bg-[#F1F1F1] mt-10'>
			<div className='flex p-[30px] h-[500px]  bg-[#DAD1D4]  justify-evenly items-center'>
				<div className='h-[300px] w-[400px]'>
					<img className='object-cover h-[400px] ' src={pic} />
				</div>
				<h1 className='text-9xl font-extrabold text-[#191919]'>Shop Page</h1>
			</div>
			<div className='flex flex-wrap gap-4 p-[20px]  mt-[30px]'>
				{load ? (
					<div>Loading...</div>
				) : (
					<div>
						{productData?.length >= 1 ? (
							<div className='flex flex-wrap gap-4 p-[20px]  mt-[30px]'>
								{productData?.map((props) => (
									<Card props={props} />
								))}
							</div>
						) : (
							<div>No Product Found</div>
						)}
					</div>
				)}
			</div>
			<div className='mt-[18px] text-[#191919] gap-8 flex'>
				<button className='w-[250px] h-[70px] bg-white p-6 rounded-[10px]  border-black'>
					CONTINUE SHOPPING
				</button>
				<button className='w-[250px] h-[70px] bg-white p-6 rounded-[10px]'>
					VIEW CART AND CHECKOUT
				</button>
			</div>
		</div>
	);
};

export default ShopPage;

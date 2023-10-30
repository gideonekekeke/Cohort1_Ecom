import React from "react";
import { Items } from "./Types/AllTypes";
import { useDispatch } from "react-redux";
import { addToCart } from "../services/ReduxState";
import { Link } from "react-router-dom";

interface Iprops {
	props: Items;
}

const Card: React.FC<Iprops> = ({ props }) => {
	const dispatch = useDispatch();
	return (
		<div className=''>
			<div className='w-[350px] text-[#191919] h-[350px]  p-6 bg-white '>
				<img src={props?.Image} />
				<div className='text-2xl font-bold '>
					{/* id~:{props?._id} */}
					<Link to={`/product/${props._id}`}>
						<div>title~:{props?.Name}</div>
					</Link>
					<div>price~:{props?.Price}</div>
				</div>
				<div className='flex gap-6 text-[#191919]'>
					<button
						onClick={() => {
							dispatch(addToCart(props));
						}}
						className='bg-[#DAD1D4]'>
						Add To Cart
					</button>
				</div>
			</div>
		</div>
	);
};

export default Card;

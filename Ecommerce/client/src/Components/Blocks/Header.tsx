import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { ViewSingleUser } from "../../utils/ApiCalls";

const Header: React.FC = () => {
	const user = useSelector((state: any) => state.currentUser);
	const [userData, setUserData] = useState<any>();

	const fetchUser = async () => {
		try {
			const response = await ViewSingleUser(user.id);
			setUserData(response?.data?.data);
		} catch (err) {
			return err;
		}
	};

	useEffect(() => {
		fetchUser();
	}, []);

	return (
		<div className='bg-white h-[100px] p-10 flex justify-between'>
			<div className='text-[#191919] ml-10'>
				<h2 className='font-extrabold text-5xl'>veras.</h2>
				<span>Casual Wear Store</span>
			</div>

			<div className='text-[#191919] mt-6 flex gap-20 text-2xl  mr-[70px]'>
				<nav>Home</nav>
				<nav>About</nav>
				<nav>Shop</nav>
				<nav>Blog</nav>
				<nav>Contact</nav>
			</div>
			<div className='text-black text-2xl  mr-3 flex gap-5 mt-6'>
				{user?.id ? (
					<div
						className='h-[30px] w-[30px] bg-black text-white rounded-[50%] justify-center flex 
items-center text-[12px]'>
						{userData?.FullName?.charAt(0)}
					</div>
				) : null}

				{<AiOutlineSearch />}

				{<BsCart4 />}
				{user?.id ? (
					<Link>
						<h6>LOG OUT</h6>
					</Link>
				) : (
					<Link to='/signin'>
						<h6>LOG IN</h6>
					</Link>
				)}
			</div>
		</div>
	);
};

export default Header;

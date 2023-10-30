import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginUser } from "../utils/ApiCalls";
import { useDispatch } from "react-redux";
import { addUser } from "../services/ReduxState";

const SignInPage: React.FC = () => {
	const dispatch = useDispatch();
	const Navigate = useNavigate();
	const [formData, setFormData] = useState({
		Email: "",
		Password: "",
	});
	const onChangeForm = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};
	const LoginUserSubmit = async () => {
		try {
			const res = await LoginUser(formData);
			Navigate("/");
			dispatch(
				addUser({
					id: res?.data?.result?.info?._id,
					token: res?.data?.result?.token,
					role: "user",
				}),
			);
			console.log(res);

			console.log("this is for form", res);
		} catch (err) {
			return err;
		}
	};
	return (
		<div className='w-[500px] h-[600px] border text-gray bg-white flex flex-col items-center justify-center mt-6 rounded-[15px]'>
			<h1 className='text-black '>Log In</h1>
			<br />
			<br />

			<form
				onSubmit={(e) => {
					e.preventDefault();
					LoginUserSubmit();
				}}>
				<div className='flex flex-col'>
					<span>Email</span>
					<input
						name='Email'
						onChange={onChangeForm}
						className='h-[40px] w-[300px] p-3 mb-5 bg-white border rounded-[5px] text-gray'
						placeholder='enter your email'
					/>
				</div>
				<div className='flex flex-col'>
					<span>PassWord</span>
					<input
						name='Password'
						onChange={onChangeForm}
						className='h-[40px] w-[300px] p-3 mb-5 bg-white border rounded-[5px] text-gray'
						placeholder='enter your password'
					/>
				</div>

				<button>Submit</button>

				<p className='mt-6 text-red'>forgot password?</p>
			</form>
		</div>
	);
};

export default SignInPage;

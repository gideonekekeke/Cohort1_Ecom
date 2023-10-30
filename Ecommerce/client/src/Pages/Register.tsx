import React, { useState } from "react";
import { RegisterUser } from "../utils/ApiCalls";
import { useNavigate } from "react-router-dom";

const Register: React.FC = () => {
	const Navigate = useNavigate();
	const [formData, setFormData] = useState({
		FullName: "",
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

	const RegisterUserSubmit = async () => {
		try {
			const res = await RegisterUser(formData)
			Navigate("/signin")
			console.log("this is for form", res);
		} catch (err) {
			return err;
		}
	};

	return (
		<div className='w-[500px] h-[600px] border text-gray bg-white flex flex-col items-center justify-center mt-6 rounded-[15px]'>
			<h1 className='text-black '>Register</h1>
			<br />
			<br />

			<form
				onSubmit={(e) => {
					e.preventDefault();
					RegisterUserSubmit();
				}}>
				<div className='flex flex-col'>
					<span>FullName</span>
					<input
						required
						onChange={onChangeForm}
						name='FullName'
						className='h-[40px] w-
[300px] p-3 mb-5 bg-white 
border rounded-[5px] 
text-gray'
						placeholder='enter your 
email'
					/>
				</div>
				<div className='flex flex-col'>
					<span>Email</span>
					<input
						required
						type='email'
						onChange={onChangeForm}
						name='Email'
						className='h-[40px] w-[300px] p-3 mb-5 bg-white border rounded-[5px] text-gray'
						placeholder='enter your email'
					/>
				</div>
				<div className='flex flex-col'>
					<span>PassWord</span>
					<input
						required
						onChange={onChangeForm}
						name='Password'
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
export default Register;

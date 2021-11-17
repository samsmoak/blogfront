import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import API from "./API";

function Register() {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(false);
	const handlesubmit = async (e) => {
		e.preventDefault();
		setError(false);
		try {
			const res = await API.post("/auth/register", {
				username,
				email,
				password,
			});
			res.data && window.location.replace("/login");
		} catch (err) {
			setError(true);
		}
	};
	return (
		<div className=''>
			<div className='relative h-screen w-screen   z-10 flex justify-center items-center '>
				<img
					src='https://images.unsplash.com/photo-1574192324001-ee41e18ed679?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80'
					alt=''
					className='w-full h-full filter blur'
				/>
				<div className='absolute z-20 w-screen h-screen '>
					<div className=' mt-16 w-full flex justify-end px-5'>
						<Link to='/login'>
							<button className='bg-red-400 px-5 py-2 rounded-lg'>login</button>
						</Link>
					</div>
					<div
						className='flex flex-col justify-center items-center w-screen h-small1
					 '
					>
						<div className='w-small2'>
							<div className='w-full flex justify-center '>
								<h2 className='text-5xl'>Register</h2>
							</div>

							<form onSubmit={handlesubmit}>
								<div className='flex flex-col'>
									<label for='username'>Username</label>
									<input
										type='text'
										id='username'
										placeholder='Username'
										className=' '
										onChange={(e) => {
											setUsername(e.target.value);
										}}
									></input>
								</div>
								<div className='flex flex-col'>
									<label for='email'>Email</label>
									<input
										type='email'
										id='email'
										placeholder='Username'
										className=' '
										onChange={(e) => {
											setEmail(e.target.value);
										}}
									></input>
								</div>
								<div className='flex flex-col'>
									<label for='password'>Password</label>
									<input
										type='password'
										id='password'
										placeholder='password'
										onChange={(e) => {
											setPassword(e.target.value);
										}}
									></input>
								</div>
								<div className='flex justify-center py-2'>
									<button
										className='px-9 py-2 bg-greener-600 rounded-lg'
										type='submit'
									>
										Register
									</button>
								</div>
								{error && (
									<div className='w-full text-center text-red-600'>
										something went wrong!
									</div>
								)}
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Register;

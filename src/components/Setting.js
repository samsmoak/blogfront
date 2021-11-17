import React from "react";
// import User from "../../../api/models/User";
import Sidebar from "./main/Sidebar";
import { Context } from "../context/Context";
import { useContext, useState, useEffect } from "react";
import API from "./API";

function Setting() {
	const { user, dispatch } = useContext(Context);
	const [file, setFile] = useState(null);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [username, setUsername] = useState("");
	const [success, setSuccess] = useState(false);
	const PF = "http://localhost:5000/images/";
	const handleSubmit = async (e) => {
		e.preventDefault();
		dispatch({ type: "UPDATE_START" });
		const updatedUser = {
			userId: user._id,
			username,
			email,
			password,
		};
		if (file) {
			const data = new FormData();
			const filename = Date.now() + File.name;
			data.append("name", filename);
			data.append("file", file);
			updatedUser.profilePic = filename;

			try {
				await API.post("/upload", data);
			} catch (err) {}
		}
		try {
			const res = await API.put("/users/" + user._id, updatedUser);
			setSuccess(true);
			dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
		} catch (err) {
			dispatch({ type: "UPDATE_FAILURE" });
		}
	};
	useEffect(() => {
		const timer = setTimeout(() => {
			setSuccess(false);
		}, 4000);
		return () => {
			return () => clearTimeout(timer);
		};
	}, [success]);
	return (
		<div className='flex justify-center items-center mt-16 px-7'>
			<div className='grid grid-cols-3'>
				<div className='text-black col-span-2  flex flex-col'>
					<div className='w-full flex justify-between mt-8'>
						<p className='text-red-400 text-3xl'>Update Your Account</p>
						<button className='text-red-400 self-end'>Delete Account</button>
					</div>
					<h4>Profile picture</h4>

					<div className=''>
						<form className='w-full' onSubmit={handleSubmit}>
							<div className='flex items-center space-x-3'>
								<div className='w-34 h-56   rounded-full bg-greener-600 overflow-hidden'>
									<img
										src={
											file ? URL.createObjectURL(file) : PF + user.profilePic
										}
										alt=''
										className='h-full w-full object-cover'
									/>
								</div>
								<div className=''>
									<label htmlFor='file' className='cursor-pointer'>
										<i className='fas fa-cog text-3xl text-red-300'></i>
									</label>
									<input
										type='file'
										id='file'
										style={{ display: "none" }}
										onChange={(e) => {
											setFile(e.target.files[0]);
										}}
									/>
								</div>
							</div>
							<div>
								<div className='flex flex-col'>
									<label for='username'>Username</label>
									<input
										type='text'
										id='username'
										placeholder={user.username}
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
										placeholder={user.email}
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
										placeholder='Password'
										onChange={(e) => {
											setPassword(e.target.value);
										}}
									></input>
								</div>
								<div className='w-full flex justify-center mt-2'>
									<button className='bg-greener-600 py-2 px-4' type='submit'>
										Update
									</button>
								</div>
								{success && (
									<div className='text-green-600'>updated sucessfully!...</div>
								)}
							</div>
						</form>
					</div>
				</div>
				<div className='mt-9'>
					<Sidebar />
				</div>
			</div>
		</div>
	);
}

export default Setting;

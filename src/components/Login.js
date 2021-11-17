import React from "react";
import { Link } from "react-router-dom";
import { useRef, useContext } from "react";
import { Context } from "../context/Context";
import API from "./API";

function Login() {
	const userRef = useRef();
	const passwordRef = useRef();

	const { dispatch, isFetching } = useContext(Context);

	const handleSubmit = async (e) => {
		e.preventDefault();
		dispatch({ type: "LOGIN_START" });
		try {
			const res = await API.post("/auth/login", {
				username: userRef.current.value,
				password: passwordRef.current.value,
			});
			dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
		} catch (err) {
			dispatch({ type: "LOGIN_FAILURE" });
		}
	};
	// const disabled = { isFetching };
	return (
		<div className=''>
			<div className='relative h-screen w-screen   z-10 flex justify-center items-center '>
				<img
					src='https://images.unsplash.com/photo-1574192324001-ee41e18ed679?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80'
					alt=''
					className='w-full h-full filter blur'
				/>
				<div className='absolute z-20  '>
					<div className='w-small2 '>
						<div className='w-full flex justify-center '>
							<Link to='/login'>
								<button className='text-5xl'>login</button>
							</Link>
						</div>

						<form onSubmit={handleSubmit}>
							<div className='flex flex-col'>
								<label for='email'>Username</label>
								<input
									type='text'
									id='email'
									placeholder='Username'
									className=' '
									ref={userRef}
								></input>
							</div>
							<div className='flex flex-col'>
								<label for='password'>Password</label>
								<input
									type='password'
									id='password'
									placeholder='password'
									ref={passwordRef}
								></input>
							</div>
							<div className='flex justify-center py-2'>
								<button
									type='submit'
									disabled={isFetching}
									className={`px-9 py-2  rounded-lg ${
										isFetching
											? "cursor-not-allowed bg-greener-400"
											: "bg-greener-600"
									}`}
								>
									login
								</button>
							</div>
						</form>
						<div className='w-full flex justify-center '>
							<button className='bg-gray-100'>
								<Link to='/register'>register</Link>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Login;

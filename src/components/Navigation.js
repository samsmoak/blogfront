import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";

function Navigation() {
	const { user, dispatch } = useContext(Context);
	const PF = "http://localhost:5000/images/";
	const handleLogout = () => {
		dispatch({ type: "LOGOUT" });
	};
	return (
		<div className='z-20 top-0 w-screen bg-blue-500 text-white h-14 fixed flex justify-between items-center px-5'>
			<div className='flex space-x-2 bg-white px-5'>
				<i class='fab fa-facebook-square text-2xl text-blue-400 '></i>
				<i class='fab fa-facebook-messenger text-2xl text-red-300'></i>
				<i class='fab fa-whatsapp text-2xl text-green-600  font-bold'></i>
				<i class='fab fa-snapchat-square text-2xl text-red-600'></i>
			</div>
			<div className='flex justify-between items-center space-x-2'>
				<Link to='/'>Home</Link>
				<div className='lg:hidden'>
					<Link>About</Link>
				</div>

				<Link to='#'>Contact</Link>
				<Link to='/write'>Write</Link>
				<div>
					<Link to='/login' onClick={handleLogout}>
						{user && "Logout"}
					</Link>
				</div>
			</div>
			<div>
				<div className='flex items-center space-x-2'>
					{user ? (
						<Link to='/setting'>
							<div className='h-10 w-10 rounded-full overflow-hidden bg-gray-400'>
								<img
									src={PF + user.profilePic}
									alt=''
									className='w-full h-full object-cover'
								/>
							</div>
						</Link>
					) : (
						<div className='flex'>
							<div className='mr-3'>
								<Link to='/login'> Login</Link>
							</div>
							<div>
								<Link to='/Register'> Register</Link>
							</div>
						</div>
					)}
					<div className='flex'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							class='h-6 w-6'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
						>
							<path
								stroke-linecap='round'
								stroke-linejoin='round'
								stroke-width='2'
								d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
							/>
						</svg>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Navigation;

import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import { useContext } from "react";

function Sidebar() {
	const [cats, setCat] = useState([]);
	const { user, dispatch } = useContext(Context);
	const PF = "http://localhost:5000/images/";
	useEffect(() => {
		const getCats = async () => {
			const res = await axios.get("/categories");
			setCat(res.data);
			// console.log(res);
		};
		getCats();
	}, []);
	return (
		<div>
			<div className='px-3 '>
				<h4 className='w-full text-center py-4 bg-paper-600 mt-6 '>About me</h4>
				<div className='h-small2 bg-paper-200 rounded-b-lg'>
					<img
						src={user && PF + user.profilePic}
						alt=''
						className='w-full h-full'
					/>
				</div>
				<div className='flex  flex-col items-center space-y-3 w-full'>
					<p className='text-center'>
						typesetting industry. Lorem Ipsum has been the industry's standard
						dummy text ever since the 1500s, when an unknown printer took a
						galley of type and scrambled it to make a type specimen book. It has
						survived not only five centuries, but also the leap into electronic
					</p>
					<h6 className='border-t-2 border-b-2 border-gray-400 px-10'>
						Category
					</h6>
					<div className='grid grid-cols-2 space-x-4'>
						{cats.map((c) => {
							return (
								<Link to={`/?cat=${c.name}`}>
									<h4>{c.name}</h4>
								</Link>
							);
						})}
					</div>
					<h6 className='border-t-2 border-b-2 border-gray-400 px-10'>
						Follow Us
					</h6>
				</div>
			</div>
		</div>
	);
}

export default Sidebar;

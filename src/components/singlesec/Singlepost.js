import React from "react";
import Navigation from "../Navigation";
import Sidebar from "../main/Sidebar";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faIndustry } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Context } from "../../context/Context";
import API from "../API";

function Singlepost() {
	const location = useLocation();
	const path = location.pathname.split("/")[2];
	const [post, setPost] = useState({});
	const { user } = useContext(Context);
	const [title, setTitle] = useState("");
	const [desc, setDesc] = useState("");
	const [updateMode, setUpdateMode] = useState(false);
	const PF = "http://localhost:5000/images/";
	// const { user, dispatch } = useContext(Context);

	useEffect(() => {
		const getPost = async () => {
			const res = await axios.get("/posts/" + path);
			setPost(res.data);
			// console.log(res);
			setTitle(res.data.title);
			setDesc(res.data.desc);
		};
		getPost();
	}, [path]);

	const handleDelete = async () => {
		try {
			await API.delete(`/posts/${post._id}`, {
				data: { username: user.username },
			});
			window.location.replace("/");
		} catch (err) {}
	};
	const handleUpdate = async () => {
		try {
			await API.put(`/posts/${post._id}`, {
				username: user.username,
				title,
				desc,
			});
			// window.location.reload();
			setUpdateMode(false);
		} catch (err) {}
	};

	return (
		<div className='col-span-3 mt-16'>
			<div className=' flex justify-center'>
				<div className='   w-big  '>
					<div className='h-80 w-big rounded-lg overflow-hidden'>
						{post.photo && (
							<img src={PF + post.photo} alt='' className='h-full w-full' />
						)}
					</div>
					<div className='py-4 space-y-4 px-3 flex flex-col justify-center'>
						<div className='space-y-4'>
							<h4 className='text-center w-full text-blue-600'>
								music life <i class='fab fa-facebook'></i>
							</h4>
							{updateMode ? (
								<div className='w-full flex flex-col  items-center'>
									<h2>Title</h2>
									<input
										type='text'
										value={title}
										className='w-1/2'
										onChange={(e) => setTitle(e.target.value)}
									/>
								</div>
							) : (
								<div>
									<Link>
										<h1 className='text-center w-full font-extrabold text-2xl'>
											{title}
										</h1>
									</Link>
									{post.username === user?.username && (
										<div className='w-full flex justify-center space-x-6'>
											<i
												class='fas fa-trash-alt cursor-pointer text-red-600'
												onClick={handleDelete}
											></i>
											<i
												class='fas fa-edit cursor-pointer text-green-600'
												onClick={() => {
													setUpdateMode(true);
												}}
											></i>
										</div>
									)}
								</div>
							)}
							<div className='w-full flex justify-around'>
								<div>
									Author:
									<Link to={`/?user=${post.username}`}>
										{" "}
										<b>{post.username}</b>
									</Link>
								</div>
								<div className=''>
									{new Date(post.createdAt).toDateString()}
								</div>
							</div>
						</div>
						{updateMode ? (
							<div className='w-full flex flex-col  items-center'>
								<h2>Description</h2>

								<textarea
									value={desc}
									className='w-1/2'
									onChange={(e) => setDesc(e.target.value)}
								/>
								<button
									className='self-end mt-4  bg-blue-600 px-6 py-2 text-white rounded-lg'
									onClick={handleUpdate}
								>
									Update
								</button>
							</div>
						) : (
							<p className='w-full text-gray-500'>{desc}</p>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Singlepost;

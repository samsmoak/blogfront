import React from "react";
import { useEffect, useState } from "react";
import Header from "../Header";
import Posts from "./Posts";
import Sidebar from "./Sidebar";
import axios from "axios";
import API from "../API";
import { useLocation } from "react-router";

function Main() {
	const [posts, setPosts] = useState([]);
	const { search } = useLocation();
	// console.log(location);

	useEffect(() => {
		const fetchPosts = async () => {
			const res = await API.get("/posts" + search);
			setPosts(res.data);
			// console.log(res);
		};
		fetchPosts();
	}, [search]);
	return (
		<div className='relative'>
			<Header />
			<div className='w-screen '>
				<div className='grid grid-cols-1 md:grid-col-2 lg:grid-cols-4 '>
					<div className='col-span-1 lg:col-span-3'>
						<Posts posts={posts} />
					</div>
					<div className='col-span-1  lg:col-span-1 hidden lg:block '>
						<div className='sticky h-96 top-48'>
							<Sidebar />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Main;

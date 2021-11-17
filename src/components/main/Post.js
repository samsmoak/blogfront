import React from "react";
import { Link } from "react-router-dom";

function Post({ post }) {
	const PF = "http://localhost:5000/images/";
	return (
		<div className='shadow-2xl rounded-lg'>
			<div className='   w-96  '>
				<div className='h-80 w-96 rounded-lg overflow-hidden'>
					{post.photo && (
						<img src={PF + post.photo} alt='' className='h-full w-full' />
					)}
				</div>
				<div className='py-4 space-y-2 px-3'>
					<div>
						{post.categories.map((c) => {
							return (
								<h4 className='text-center w-full text-gray-400'>{c.name}</h4>
							);
						})}
						<Link to={`/post/${post._id}`}>
							<h1 className='text-center w-full font-extrabold text-2xl'>
								{post.title}
							</h1>
						</Link>
						<h4 className='text-center w-full text-gray-400'>
							{new Date(post.createdAt).toDateString()}
						</h4>
					</div>

					<p className='w-full text-gray-500'>{post.desc}</p>
				</div>
			</div>
		</div>
	);
}

export default Post;

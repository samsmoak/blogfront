import React from "react";
import { Link } from "react-router-dom";
import Post from "./Post";

function Posts({ posts }) {
	return (
		<div className=' py-4 '>
			<div className=' flex items-center justify-center'>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-5  '>
					{posts.map((p) => {
						return <Post post={p} />;
					})}
				</div>
			</div>
		</div>
	);
}

export default Posts;

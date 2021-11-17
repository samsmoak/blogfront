import React from "react";

function header() {
	return (
		<div className='mt-24 w-screen flex flex-col items-center justify-center'>
			<div className='mb-4'>
				<h2 className='text-3xl font-bold text-blue-600'>ARCADE_SETTLERS</h2>
			</div>
			<div className='h-small1 w-4/5'>
				<img
					src='https://images.unsplash.com/photo-1632287225525-b6c884563ae7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2370&q=80'
					alt=' '
					className='w-full h-full object-fit'
				/>
			</div>
		</div>
	);
}

export default header;

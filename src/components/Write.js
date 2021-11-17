import React from "react";

import { useState, useContext } from "react";
import { Context } from "../context/Context";
import API from "./API";

function Write() {
	const [title, setTitle] = useState("");
	const [file, setFile] = useState(null);
	const [desc, setDesc] = useState("");
	const { user } = useContext(Context);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const newPost = {
			username: user.username,
			title,
			desc,
		};
		if (file) {
			const data = new FormData();
			const filename = Date.now() + File.name;
			data.append("name", filename);
			data.append("file", file);
			newPost.photo = filename;

			try {
				await API.post("/upload", data);
			} catch (err) {}
		}
		try {
			const res = await API.post("/posts", newPost);
			window.location.replace("/post/" + res.data._id);
		} catch (err) {}
		API.post("/posts");
	};

	return (
		<div
			className={`flex justify-center items-center mt-16 ${
				!file && "h-big items-center"
			}`}
		>
			<div className='grid grid-cols-5  '>
				<div className='text-black col-span-3 col-start-2  flex flex-col'>
					<div className='w-full  rounded-2xl bg-greener-600'>
						{file && (
							<img
								src={URL.createObjectURL(file)}
								alt=''
								className='object-contain'
							/>
						)}
					</div>
					<div className=''>
						<form className={`w-full `} onSubmit={handleSubmit}>
							<div className='w-full flex justify-between'>
								<div>
									<label for='filetype'>
										<i className='fas fa-plus rounded-full p-1 border border-black'></i>
									</label>
									<input
										type='file'
										id='filetype'
										className='hidden h-9 w-14 border border-black'
										onChange={(e) => {
											setFile(e.target.files[0]);
										}}
									/>
									<input
										type='text'
										placeholder='Title'
										className=''
										onChange={(e) => {
											setTitle(e.target.value);
										}}
									/>
								</div>
								<button className='bg-greener-300 px-7 py-2' type='submit'>
									publish
								</button>
							</div>
							<div className='w-full'>
								<textarea
									placeholder='write your story...'
									type='text'
									className='w-full h-32'
									onChange={(e) => {
										setDesc(e.target.value);
									}}
								></textarea>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Write;

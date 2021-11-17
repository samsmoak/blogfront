import React from "react";
import Sidebar from "../main/Sidebar";

import Singlepost from "./Singlepost";
function Single() {
	return (
		<div className='mt-16'>
			<div className=' grid grid-cols-4'>
				<Singlepost />
				<Sidebar />
			</div>
		</div>
	);
}

export default Single;

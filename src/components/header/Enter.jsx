import React from 'react';
import { Link } from 'react-router-dom';

const Enter = () => {
	return (
		<Link to="/user/login" className="mr-4">
			<button className="px-4 py-1 bg-blue-500 rounded hover:bg-blue-700">Login</button>
		</Link>
	);
}

export default Enter;

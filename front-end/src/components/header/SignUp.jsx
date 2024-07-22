import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
	return (
		<Link to="/user/register">
			<button className="px-4 py-1 bg-green-500 rounded hover:bg-green-700">Sign Up</button>
		</Link>
	);
}

export default SignUp;

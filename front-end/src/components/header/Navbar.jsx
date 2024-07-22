import React from 'react';
import Logo from './Logo';
import Enter from './Enter';
import SignUp from './SignUp';

const Navbar = ({ user, logout }) => {
	return (
		<div className='flex justify-between logo p-4'>
			<Logo />
			<div>
				{!user ? (
					<>
						<Enter />
						<SignUp />
					</>
				) : (
					<>
						<span>Welcome, {user.username}</span>
						<button onClick={logout} className="ml-4 px-4 py-1 bg-red-500 rounded hover:bg-red-700">Logout</button>
					</>
				)}
			</div>
		</div>
	);
}

export default Navbar;

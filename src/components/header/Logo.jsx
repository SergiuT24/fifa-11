import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
	return (
		<div>
			<Link to="/" className='block group'>
				<img className='max-w-none group-hover:opacity-75' src="/logo.svg" alt="Logo" />
			</Link>
		</div>
	);
}

export default Logo;

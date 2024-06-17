import React from 'react';

const PostTitle = ({ name, about, trophy, link }) => {
	return (
		<div className='title mb-4'>
			<div className='flex justify-center gap-3 items-center pt-4'>
				<img src={trophy} className=' w-15 h-24' />
				<h1 className='text-2xl uppercase text-white text-center'>FIFA 11 <span className=' text-red-600'>{name}</span> </h1>
			</div>
			<div className='flex justify-center gap-4'>
				<h2 className='text-xl uppercase text-center text-white'>{about}</h2>
				<a className=' cursor-pointer underline' target="_blank" rel="noopener noreferrer" href='https://discord.com/users/berserk242741'>{link}</a>
			</div>
			<h2 className='text-xl pl-1 pt-4 text-white pb-4 text-center'>Game Mode: 2x2</h2>
		</div>
	);
}

export default PostTitle;

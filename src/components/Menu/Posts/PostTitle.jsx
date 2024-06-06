import React from 'react';

const PostTitle = () => {
	return (
		<div className='title mb-4'>
			<div className='flex justify-center gap-3 items-center pt-4'>
				<img src='./cups-img/world-cup.png' className=' w-14' />
				<h1 className='text-2xl uppercase text-white text-center'>FIFA 11 <span className=' text-red-600'>Word Cup</span> 2024</h1>
			</div>
			<h2 className='text-xl pl-1 pt-4 text-white pb-4 text-center'>Game Mode: 2x2</h2>
		</div>
	);
}

export default PostTitle;

import React from 'react';

const Draw = () => {
	return (
		<div className='flex w-52 flex-col gap-1'>
			<h3 className=' text-sm font-bold text-center'>The Draw for the FIFA 11 World Cup in 2024</h3>
			<h4 className=' text-sm font-bold text-center'>June 08 2024 "12:00"</h4>
			<iframe
				className='border-1'
				width="230"
				height="190"
				src="https://www.youtube.com/embed/q94ui9bJGqM"
				title="YouTube video player"
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowFullScreen
			></iframe>
		</div>
	);
}

export default Draw;

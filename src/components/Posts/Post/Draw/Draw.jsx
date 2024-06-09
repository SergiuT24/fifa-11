import React from 'react';

const Draw = () => {
	return (
		<div className='flex flex-col gap-8 my-10'>
			<h3 className=' text-2xl font-bold text-center'>The Draw for the FIFA 11 World Cup in 2024</h3>
			<h4 className=' text-sm font-bold text-center'>June 08 2024 "12:00"</h4>
			<iframe
				className=' border-8'
				width="560"
				height="315"
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

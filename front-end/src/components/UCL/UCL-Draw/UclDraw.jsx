import React from 'react';

const UclDraw = () => {
	return (
		<div className='flex justify-center'>
			<div className='flex w-96 flex-col gap-1'>
				<h3 className=' text-sm font-bold text-center'>The Draw for the FIFA 11 UEFA Champions League</h3>
				<h4 className=' text-sm font-bold text-center'>June 30 2024 "20:00"</h4>
				<video controls width="100%">
					<source src="/videos/ucl-random.webm" type="video/webm" />
					Your browser does not support the video tag.
				</video>
			</div>
		</div>
	);
}

export default UclDraw;

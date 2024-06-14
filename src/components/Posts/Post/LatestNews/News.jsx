import React, { useState } from 'react';

const News = ({ title, src, info }) => {
	const [showInfo, setShowInfo] = useState(false);

	const handleInfo = () => {
		setShowInfo(!showInfo);
	}

	return (
		<div className='flex flex-col gap-3'>
			<h2 className='text-xl'>{title}</h2>
			<div className='flex justify-center'>
				<img className=' w-96' src={src} alt={title} />
			</div>
			<button onClick={handleInfo} className='underline'>
				{showInfo ? 'Hide' : 'Read more'}
			</button>
			{showInfo && <div>{info}</div>}
		</div>
	);
}

export default News;

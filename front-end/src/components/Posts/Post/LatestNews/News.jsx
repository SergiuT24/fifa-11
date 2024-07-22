import React, { useState } from 'react';

const News = ({ title, src, info }) => {
	const [showInfo, setShowInfo] = useState(false);

	const handleInfo = () => {
		setShowInfo(!showInfo);
	}

	return (
		<div className='flex w-52 flex-col gap-3 items-center'>
			<h5 className=' text-sm'>{title}</h5>
			<div className='flex justify-center'>
				<img className='w-52' src={src} alt={title} />
			</div>
			<button onClick={handleInfo} className='underline'>
				{showInfo ? 'Hide' : 'Read more'}
			</button>
			{showInfo && <div className=' text-xs'>{info}</div>}
		</div>
	);
}

export default News;

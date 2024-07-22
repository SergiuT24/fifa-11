import React from 'react';

const MatchDetails = ({ source }) => {
	return (
		<div className="match-details flex justify-center w-full">
			<div className='w-96 flex justify-center'>
				<iframe
					className='border-2'
					width="560"
					height="315"
					src={source}
					title="YouTube video player"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowFullScreen
				></iframe>
			</div>
		</div>
	);
}

export default MatchDetails;

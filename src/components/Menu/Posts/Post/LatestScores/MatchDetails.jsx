import React, { useState } from 'react';

const MatchDetails = () => {
	const [isFullSize, setIsFullSize] = useState(false);

	const handleImageClick = () => {
		setIsFullSize(true);
	};

	const handleCloseClick = () => {
		setIsFullSize(false);
	};

	return (
		<div className={`match-details flex justify-center w-full ${isFullSize ? 'full-size' : ''}`}>
			<div className='w-96'>
				{isFullSize && (
					<button className="close-button" onClick={handleCloseClick}>
						&times;
					</button>
				)}
				<img
					src="./match-details-img/not-played.png"
					alt="details"
					onClick={handleImageClick}
					className={isFullSize ? 'expanded' : ''}
				/>
			</div>
		</div>
	);
}

export default MatchDetails;

import React from 'react';

const GoalVideo = ({ title, videoUrl }) => {
	return (
		<div>
			<h1>{title}</h1>
			<div>
				<iframe
					width="560"
					height="315"
					src={videoUrl}
					title="Goal Video"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
				></iframe>
			</div>
		</div>
	);
}

export default GoalVideo;

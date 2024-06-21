import React, { useRef, useState } from 'react';

const UclIntro = () => {
	const videoRef = useRef(null);
	const [isVideoStarted, setIsVideoStarted] = useState(false);

	const handlePlayVideo = () => {
		if (videoRef.current) {
			videoRef.current.play().catch(error => {
				console.error('Error attempting to play video:', error);
			});
			setIsVideoStarted(true);
		}
	};

	return (
		<div className='flex justify-evenly'>
			<div className='flex justify-start'>
				<img src="/img/background/cr7.png" alt="Background" className='h-96' />
			</div>
			<div className='flex justify-center'>
				{!isVideoStarted && (
					<button onClick={handlePlayVideo} className='bg-blue-500 text-white px-4 py-2 rounded'>
						Play Video
					</button>
				)}
				<video ref={videoRef} width="600" controls={!isVideoStarted}>
					<source src="/videos/ucl-intro.mp4" type="video/mp4" />
					Your browser does not support the video tag.
				</video>
			</div>
		</div>
	);
}

export default UclIntro;

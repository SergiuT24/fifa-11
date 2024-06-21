import React, { useEffect, useRef } from 'react';

const UclIntro = () => {
	const videoRef = useRef(null);

	useEffect(() => {
		if (videoRef.current) {
			videoRef.current.play().catch(error => {
				console.error('Error attempting to play video:', error);
			});
		}
	}, []);

	return (
		<div className='flex justify-evenly'>
			<div className='flex justify-start'>
				<img src="/img/background/cr7.png" alt="Background" className='h-96' />
			</div>
			<div className='flex justify-center'>
				<video ref={videoRef} width="600" controls autoPlay>
					<source src="/videos/ucl-intro.mp4" type="video/mp4" />
					Your browser does not support the video tag.
				</video>
			</div>
		</div>
	);
}

export default UclIntro;


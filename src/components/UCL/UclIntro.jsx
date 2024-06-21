import React from 'react';

const UclIntro = () => {
	return (
		<div className='flex flex-col sm:flex-row justify-evenly'>
			<div className='hidden sm:flex justify-start'>
				<img src="/img/background/cr7.png" alt="Background" className='h-96' />
			</div>
			<div className='flex justify-center'>
				<video width="600" controls autoPlay>
					<source src="/videos/ucl-intro.mp4" type="video/mp4" />
					Your browser does not support the video tag.
				</video>
			</div>
		</div>
	);
}

export default UclIntro;

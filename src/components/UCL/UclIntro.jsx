import React from 'react';

const UclIntro = () => {
	return (
		<div className='flex justify-center'>
			<video width="600" controls autoPlay>
				<source src="/videos/ucl-intro.mp4" type="video/mp4" />
				Your browser does not support the video tag.
			</video>
		</div>
	);
}

export default UclIntro;

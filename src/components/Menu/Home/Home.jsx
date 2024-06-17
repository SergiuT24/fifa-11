import React from 'react';
import PostTitle from '../../Posts/Post/PostTitle';

const Home = () => {
	return (
		<div>
			<PostTitle
				trophy={'./cups-img/uefa-champions.png'}
				name={'UEFA Champions League 2024'}
				about={'Register to play with message on discord'}
				link={'discord-link'}
			/>
		</div>
	);
}

export default Home;

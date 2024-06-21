import React from 'react';
import PostTitle from '../../Posts/Post/PostTitle';
import News from '../../Posts/Post/LatestNews/News';

const Home = () => {
	return (
		<div>
			<PostTitle
				trophy={'img/cups/uefa-champions.png'}
				name={'UEFA Champions League 2024'}
				about={'Register to play with message on discord:'}
				link={'berserk242741'}
			/>
			{/* <News
				title={''}
				src={ }
				info={ }
			/> */}

		</div>
	);
}

export default Home;

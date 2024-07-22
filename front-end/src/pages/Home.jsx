import React from 'react';
import PostTitle from '../components/Posts/Post/PostTitle'

const Home = () => {
	return (
		<div className='flex-1 justify-center items-center'>
			<PostTitle
				trophy={'img/cups/uefa-champions.png'}
				name={'UEFA Champions League 2024'}
				about={'Register to play with message on discord:'}
				link={'berserk242741'}
			/>
		</div>
	);
}

export default Home;

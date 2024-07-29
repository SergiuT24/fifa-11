import React from 'react';
import PostTitle from '../components/post/PostTitle'

const Home = () => {
	return (
		<div className='flex-1 justify-center items-center'>
			<PostTitle
				trophy={'/img/trophy/kings-cup.png'}
				name={'Tournaments (1x1) (2x2)'}
				about={'Register to play with message on discord:'}
				link={'@berserk242741'}
			/>
			<div>
				<img src='/img/background/slide3.jpg' />
			</div>
		</div>
	);
}

export default Home;

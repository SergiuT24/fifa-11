import React from 'react';
import RandomTeam from './RandomTeam';

const Random = () => {
	return (
		<div className='grid grid-cols-6 gap-6 my-8 border-t pt-5'>
			<div>
				<h3 className='text-2xl uppercase'>teams for random:</h3>
			</div>
			<RandomTeam num={1} flag={'https://static.flashscore.com/res/image/data/ObxjG3Rq-nBWCl0De.png'} name={'Argentina'} />
			<RandomTeam num={2} flag={'https://static.flashscore.com/res/image/data/pvtmslhT-WdZ4jMrq.png'} name={'Uruguay'} />
			<RandomTeam num={3} flag={'https://static.flashscore.com/res/image/data/6eDtOume-0E8Iihe1.png'} name={'Spain'} />
			<RandomTeam num={4} flag={'https://static.flashscore.com/res/image/data/tS8Ur8S0-dtrVaP64.png'} name={'Russia'} />
			<RandomTeam num={5} flag={'https://static.flashscore.com/res/image/data/Grhsr8gT-vZG58BBc.png'} name={'Portugal'} />
			<RandomTeam num={6} flag={'https://static.flashscore.com/res/image/data/fyLyobWH-KfXjzrxU.png'} name={'Italy'} />
			<RandomTeam num={7} flag={'https://static.flashscore.com/res/image/data/MkxaoTAN-fazrR153.png'} name={'Holland'} />
			<RandomTeam num={8} flag={'https://static.flashscore.com/res/image/data/0SofTgVH-fB4vYUZp.png'} name={'Germany'} />
			<RandomTeam num={9} flag={'https://static.flashscore.com/res/image/data/04V6zbA6-U3HPIwDq.png'} name={'France'} />
			<RandomTeam num={10} flag={'https://static.flashscore.com/res/image/data/lfoVvLPq-Iyld3bDd.png'} name={'England'} />
			<RandomTeam num={11} flag={'https://static.flashscore.com/res/image/data/S4Kz1kjC-88LAtdNt.png'} name={'Brazil'} />
		</div>
	);
}

export default Random;

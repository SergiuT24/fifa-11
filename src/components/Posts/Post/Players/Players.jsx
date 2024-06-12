import React from 'react';
import PlayersTeam from './PlayersTeam';

const Players = () => {
	return (
		<div className='flex gap-11'>
			<PlayersTeam team={'TEAM 1'} playerOne={'Anna'} imgOne={'./players-img/Anna.png'} playerTwo={'DartRin'} imgTwo={'./players-img/Rin.png'} flag={'https://static.flashscore.com/res/image/data/6eDtOume-0E8Iihe1.png'} teamName={'Spain'} />
			<PlayersTeam team={'TEAM 2'} playerOne={'SergeyFace'} imgOne={'./players-img/Sergeyface.png'} playerTwo={'14 France'} imgTwo={'./players-img/France.png'} flag={'https://static.flashscore.com/res/image/data/lfoVvLPq-Iyld3bDd.png'} teamName={'England'} />
			<PlayersTeam team={'TEAM 3'} playerOne={'Radenek'} imgOne={'./players-img/law2020.png'} playerTwo={'Mark'} imgTwo={'./players-img/law2020.png'} flag={"https://static.flashscore.com/res/image/data/0SofTgVH-fB4vYUZp.png"} teamName={"Germany"} />
			<PlayersTeam team={'TEAM 4'} playerOne={'Jsnick'} playerTwo={'Perfect'} imgOne={'./players-img/Jsnick.png'} imgTwo={'./players-img/Perfect.png'} flag={"https://static.flashscore.com/res/image/data/S4Kz1kjC-88LAtdNt.png"} teamName={"Brazil"} />
			<PlayersTeam team={'TEAM 5'} playerOne={'Berserk'} playerTwo={'NSKRaven'} imgOne={'./players-img/Berserk.png'} imgTwo={'./players-img/Raven.png'} flag={'https://static.flashscore.com/res/image/data/04V6zbA6-U3HPIwDq.png'} teamName={'France'} />
			<PlayersTeam team={'TEAM 6'} playerOne={'Sania'} playerTwo={'Malemiria'} imgOne={'./players-img/law2020.png'} imgTwo={'./players-img/Malemiria.png'} flag={"https://static.flashscore.com/res/image/data/Grhsr8gT-vZG58BBc.png"} teamName={"Portugal"} />
		</div>
	);
}

export default Players;

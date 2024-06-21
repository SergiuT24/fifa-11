import React from 'react';
import PlayersTeam from './PlayersTeam';

const Players = () => {
	return (
		<div className='player-block flex gap-11'>
			<PlayersTeam team={'TEAM 1'} playerOne={'Anna'} imgOne={'/img/players/Anna.png'} playerTwo={'DartRin'} imgTwo={'/img/players/Rin.png'} flag={'https://static.flashscore.com/res/image/data/6eDtOume-0E8Iihe1.png'} teamName={'Spain'} />
			<PlayersTeam team={'TEAM 2'} playerOne={'SergeyFace'} imgOne={'/img/players/Sergeyface.png'} playerTwo={'14 France'} imgTwo={'/img/players/France.png'} flag={'https://static.flashscore.com/res/image/data/lfoVvLPq-Iyld3bDd.png'} teamName={'England'} />
			<PlayersTeam team={'TEAM 3'} playerOne={'Radenek'} imgOne={'/img/players/avatar.png'} playerTwo={'Mark'} imgTwo={'/img/players/avatar.png'} flag={"https://static.flashscore.com/res/image/data/0SofTgVH-fB4vYUZp.png"} teamName={"Germany"} />
			<PlayersTeam team={'TEAM 4'} playerOne={'Jsnick'} playerTwo={'Perfect'} imgOne={'/img/players/Jsnick.png'} imgTwo={'/img/players/Perfect.png'} flag={"https://static.flashscore.com/res/image/data/S4Kz1kjC-88LAtdNt.png"} teamName={"Brazil"} />
			<PlayersTeam team={'TEAM 5'} playerOne={'Berserk'} playerTwo={'NSKRaven'} imgOne={'/img/players/Berserk.png'} imgTwo={'/img/players/Raven.png'} flag={'https://static.flashscore.com/res/image/data/04V6zbA6-U3HPIwDq.png'} teamName={'France'} />
			<PlayersTeam team={'TEAM 6'} playerOne={'Sania'} playerTwo={'Malemiria'} imgOne={'/img/players/avatar.png'} imgTwo={'/img/players/Malemiria.png'} flag={"https://static.flashscore.com/res/image/data/Grhsr8gT-vZG58BBc.png"} teamName={"Portugal"} />
		</div>
	);
}

export default Players;

import React from 'react';
import PlayersTeam from '../../../../components/league/players/PlayersTeam';

const SquadsSeasonTwo2x2 = () => {
	return (
		<div className='flex flex-col gap-5 ml-4'>
			<PlayersTeam
				team={'TEAM 1'}
				playerOne={'D.Drogba (C.)'}
				imgOne={'/img/players/d-drogba.png'}
				playerTwo={'mysterio'}
				imgTwo={'/img/players/mysterio.png'}
				club={'empty'} />
			<PlayersTeam
				team={'TEAM 2'}
				playerOne={'HAM (C.)'}
				imgOne={'/img/players/avatar.png'}
				playerTwo={'TOTO'}
				imgTwo={'/img/players/toto.png'}
				club={'empty'} />
			<PlayersTeam
				team={'TEAM 3'}
				playerOne={'Perfect (C.)'}
				imgOne={'/img/players/perfect.png'}
				playerTwo={'Anna'}
				imgTwo={'/img/players/anna.png'}
				club={'empty'} />
			<PlayersTeam
				team={'TEAM 4'}
				playerOne={'Berserk (C.)'}
				imgOne={'/img/players/berserk.png'}
				playerTwo={'Jsnick'}
				imgTwo={'/img/players/jsnick.png'}
				club={'empty'} />
			<PlayersTeam
				team={'TEAM 5'}
				playerOne={'Matuu (C.)'}
				imgOne={'/img/players/matuu.png'}
				playerTwo={'Kevin'}
				imgTwo={'/img/players/kevin.png'}
				club={'empty'} />
			<PlayersTeam
				team={'TEAM 6'}
				playerOne={'empty'}
				imgOne={'/img/players/avatar.png'}
				playerTwo={'empty'}
				imgTwo={'/img/players/avatar.png'}
				club={'empty'} />
		</div>
	);
}

export default SquadsSeasonTwo2x2;

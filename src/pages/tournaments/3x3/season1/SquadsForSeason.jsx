import React from 'react';
import PlayersTeam from '../../../../components/league/players/PlayersTeam';

const SquadsForSeason = () => {
	return (
		<div className='flex flex-col gap-5 ml-4'>
			<PlayersTeam
				team={'TEAM 1'}
				playerOne={'D.Drogba'}
				imgOne={'/img/players/d-drogba.png'}
				playerTwo={'mysterio'}
				imgTwo={'/img/players/mysterio.png'}
				playerTree={'TOTO'}
				imgTree={'/img/players/toto.png'}
				club={'empty'} />
			<PlayersTeam
				team={'TEAM 2'}
				playerOne={'SergeyFace'}
				imgOne={'/img/players/sergeyface.png'}
				playerTwo={'14 France'}
				imgTwo={'/img/players/france.png'}
				playerTree={'DartRin'}
				imgTree={'/img/players/rin.png'}
				club={'empty'} />
			<PlayersTeam
				team={'TEAM 3'}
				playerOne={'Berserk (C.)'}
				imgOne={'/img/players/berserk.png'}
				playerTwo={'Jsnick'}
				imgTwo={'/img/players/jsnick.png'}
				playerTree={'HAM'}
				imgTree={'/img/players/avatar.png'}
				club={'empty'} />
			<PlayersTeam
				team={'TEAM 4'}
				playerOne={'M@KSON (C.)'}
				imgOne={'/img/players/makson.png'}
				playerTwo={'VITALY'}
				imgTwo={'/img/players/avatar.png'}
				playerTree={'RAYON 13'}
				imgTree={'/img/players/avatar.png'}
				club={'empty'} />
		</div>
	);
}

export default SquadsForSeason;

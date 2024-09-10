import React from 'react';
import PlayersTeam from '../../../../components/league/players/PlayersTeam';

const SquadsForSeason = () => {
	return (
		<div className='flex flex-col gap-5 ml-4'>
			<PlayersTeam
				team={'TEAM 1'}
				playerOne={'D.Drogba (C.)'}
				imgOne={'/img/players/d-drogba.png'}
				playerTwo={'mysterio'}
				imgTwo={'/img/players/mysterio.png'}
				playerTree={'TOTO'}
				imgTree={'/img/players/toto.png'}
				club={'empty'} />
			<PlayersTeam
				team={'TEAM 2'}
				playerOne={'DartRin (C.)'}
				imgOne={'/img/players/rin.png'}
				playerTwo={'14 France'}
				imgTwo={'/img/players/france.png'}
				playerTree={'SergeyFace'}
				imgTree={'/img/players/sergeyface.png'}
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
				playerTree={'Andy'}
				imgTree={'/img/players/avatar.png'}
				club={'empty'} />
			<PlayersTeam
				team={'TEAM 5'}
				playerOne={'Anna'}
				imgOne={'/img/players/anna.png'}
				playerTwo={'Matuu'}
				imgTwo={'/img/players/matuu.png'}
				playerTree={'Kevin'}
				imgTree={'/img/players/kevin.png'}
				club={'empty'} />
		</div>
	);
}

export default SquadsForSeason;

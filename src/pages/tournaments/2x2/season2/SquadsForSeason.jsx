import React from 'react';
import PlayersTeam from '../../../../components/league/players/PlayersTeam';
import Galatasaray from '../../../../components/league/4star-teams/Galatasaray';
import Cska from '../../../../components/league/4star-teams/Cska';
import Fiorentina from '../../../../components/league/4star-teams/Fiorentina';
import Schalke from '../../../../components/league/4star-teams/Schalke';
import Zenit from '../../../../components/league/4star-teams/Zenit';
import Napoli from '../../../../components/league/4star-teams/Napoli';

const SquadsForSeason = () => {
	return (
		<div className='flex flex-col gap-5 ml-4'>
			<PlayersTeam
				team={'TEAM 1'}
				playerOne={'D.Drogba (C.)'}
				imgOne={'/img/players/d-drogba.png'}
				playerTwo={'mysterio'}
				imgTwo={'/img/players/mysterio.png'}
				club={<Galatasaray />} />
			<PlayersTeam
				team={'TEAM 2'}
				playerOne={'HAM (C.)'}
				imgOne={'/img/players/avatar.png'}
				playerTwo={'TOTO'}
				imgTwo={'/img/players/toto.png'}
				club={<Cska />} />
			<PlayersTeam
				team={'TEAM 3'}
				playerOne={'Perfect (C.)'}
				imgOne={'/img/players/perfect.png'}
				playerTwo={'Anna'}
				imgTwo={'/img/players/anna.png'}
				club={<Fiorentina />} />
			<PlayersTeam
				team={'TEAM 4'}
				playerOne={'Berserk (C.)'}
				imgOne={'/img/players/berserk.png'}
				playerTwo={'Jsnick'}
				imgTwo={'/img/players/jsnick.png'}
				club={<Schalke />} />
			<PlayersTeam
				team={'TEAM 5'}
				playerOne={'Matuu (C.)'}
				imgOne={'/img/players/matuu.png'}
				playerTwo={'Kevin'}
				imgTwo={'/img/players/kevin.png'}
				club={<Zenit />} />
			<PlayersTeam
				team={'TEAM 6'}
				playerOne={'VITALY (C.)'}
				imgOne={'/img/players/avatar.png'}
				playerTwo={'M@KSON'}
				imgTwo={'/img/players/avatar.png'}
				club={<Napoli />} />
		</div>
	);
}

export default SquadsForSeason;

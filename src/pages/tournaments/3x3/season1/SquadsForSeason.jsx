import React from 'react';
import PlayersTeam from '../../../../components/league/players/PlayersTeam';
import AtleticoMadrid from '../../../../components/league/teams/AtleticoMadrid';
import AcMilan from '../../../../components/league/teams/AcMilan';
import BayernMunich from '../../../../components/league/teams/BayernMunich';
import Arsenal from '../../../../components/league/teams/Arsenal';
import ManchesterCity from '../../../../components/league/teams/ManchesterCity';
import Lyon from '../../../../components/league/teams/Lyon';

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
				club={<AtleticoMadrid />} />
			<PlayersTeam
				team={'TEAM 2'}
				playerOne={'DartRin (C.)'}
				imgOne={'/img/players/rin.png'}
				playerTwo={'14 France'}
				imgTwo={'/img/players/france.png'}
				playerTree={'SergeyFace'}
				imgTree={'/img/players/sergeyface.png'}
				club={<ManchesterCity />} />
			<PlayersTeam
				team={'TEAM 3'}
				playerOne={'Berserk (C.)'}
				imgOne={'/img/players/berserk.png'}
				playerTwo={'Jsnick'}
				imgTwo={'/img/players/jsnick.png'}
				playerTree={'HAM'}
				imgTree={'/img/players/avatar.png'}
				club={<BayernMunich />} />
			<PlayersTeam
				team={'TEAM 4'}
				playerOne={'M@KSON (C.)'}
				imgOne={'/img/players/makson.png'}
				playerTwo={'VITALY'}
				imgTwo={'/img/players/vitaly.png'}
				playerTree={'Andy'}
				imgTree={'/img/players/avatar.png'}
				club={<Lyon />} />
			<PlayersTeam
				team={'TEAM 5'}
				playerOne={'Matuu (C.)'}
				imgOne={'/img/players/matuu.png'}
				playerTwo={'Anna'}
				imgTwo={'/img/players/anna.png'}
				playerTree={'Kevin'}
				imgTree={'/img/players/kevin.png'}
				club={<Arsenal />} />
			<PlayersTeam
				team={'TEAM 6'}
				playerOne={'mcrurus (C.)'}
				imgOne={'/img/players/mcrurus.png'}
				playerTwo={'Robinho'}
				imgTwo={'/img/players/avatar.png'}
				playerTree={'Kebab'}
				imgTree={'/img/players/avatar.png'}
				club={<AcMilan />} />
		</div>
	);
}

export default SquadsForSeason;

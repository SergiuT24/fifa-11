import React from 'react';
import PlayersTeam from '../../Posts/Post/Players/PlayersTeam';
import AcMilan from '../UCL-Teams/AcMilan';
import Arsenal from '../UCL-Teams/Arsenal';
import Chelsea from '../UCL-Teams/Chelsea';
import Barcelona from '../UCL-Teams/Barcelona';
import BayernMunich from '../UCL-Teams/BayernMunich';
import ManchesterCity from '../UCL-Teams/ManchesterCity';
import ManchesterUnited from '../UCL-Teams/ManchesterUnited';
import Lyon from '../UCL-Teams/Lyon';

const UclPlayers = () => {
	return (
		<div className='w-full overflow-x-auto'>
			<div className='player-block flex gap-3 sm:gap-6'>
				<PlayersTeam team={'TEAM 1'} playerOne={'Anna ID:11208470'} imgOne={'/img/players/Anna.png'} playerTwo={'NSKRaven ID:1287368'} imgTwo={'/img/players/Raven.png'} club={<AcMilan />} />
				<PlayersTeam team={'TEAM 2'} playerOne={'Sania ID:1040066'} imgOne={'/img/players/avatar.png'} playerTwo={'Malemiria ID:9662584'} imgTwo={'/img/players/Malemiria.png'} club={<Barcelona />} />
				<PlayersTeam team={'TEAM 3'} playerOne={'Radenek ID:1530641'} imgOne={'/img/players/avatar.png'} playerTwo={'Mark ID:1087339'} imgTwo={'/img/players/avatar.png'} club={<ManchesterUnited />} />
				<PlayersTeam team={'TEAM 4'} playerOne={'Berserk ID:4180544'} playerTwo={'Mcrurus ID:9984628'} imgOne={'/img/players/Berserk.png'} imgTwo={'/img/players/mcrurus.png'} club={<Chelsea />} />
				<PlayersTeam team={'TEAM 5'} playerOne={'Matuu ID:929057'} playerTwo={'Kevin ID:2262539'} imgOne={'/img/players/Matuu.png'} imgTwo={'/img/players/Kevin.png'} club={<Lyon />} />
				<PlayersTeam team={'TEAM 6'} playerOne={'Petr Pirat ID: 1046054'} playerTwo={'A.Wenger ID:10014005'} imgOne={'/img/players/Petr.png'} imgTwo={'/img/players/Wenger.png'} club={<Arsenal />} />
				<PlayersTeam team={'TEAM 7'} playerOne={'Subz3 ID: 2837706'} playerTwo={'ytc ID: 12818063'} imgOne={'/img/players/avatar.png'} imgTwo={'/img/players/avatar.png'} club={<ManchesterCity />} />
				<PlayersTeam team={'TEAM 8'} playerOne={'D.Drogba ID: 11701466'} playerTwo={'mysterio ID: 11701465'} imgOne={'/img/players/avatar.png'} imgTwo={'/img/players/avatar.png'} club={<BayernMunich />} />
			</div>
		</div>
	);
}

export default UclPlayers;

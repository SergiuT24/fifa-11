import React from 'react';
import Square from '../../../../../components/league/square/Square';
import Fiorentina from '../../../../../components/league/4star-teams/Fiorentina';
import Schalke from '../../../../../components/league/4star-teams/Schalke';
import Cska from '../../../../../components/league/4star-teams/Cska';
import Galatasaray from '../../../../../components/league/4star-teams/Galatasaray';



const ChampionsLeaguePlayOffs = () => {
	return (
		<div className='py-16 darkblue'>
			<div className='flex flex-col gap-10'>
				<h2 className='text-center'>Play Offs: Quarter-finals 1/4</h2>
				<div className='flex gap-14 justify-center'>
					<Square
						teamOne={<Fiorentina />}
						teamTwo={<Galatasaray />}
						scoreFirstTeamOne={1}
						scoreSecondTeamOne={1}
						scoreFirstTeamTwo={'3 | Extra Time: 3:2'}
						scoreSecondTeamTwo={'3 | Extra Time: 3:2'}
					/>
					<Square
						teamOne={<Cska />}
						teamTwo={<Schalke />}
						scoreFirstTeamOne={1}
						scoreSecondTeamOne={0}
						scoreFirstTeamTwo={3}
						scoreSecondTeamTwo={1}
					/>
				</div>
			</div>
			<div className='flex flex-col gap-3 mt-9'>
				<h2 className='text-center'>FINAL</h2>
				<div className='flex gap-10 justify-center'>
					<Square
						teamOne={<Fiorentina />}
						teamTwo={<Cska />}
						scoreFirstTeamOne={3}
						scoreSecondTeamOne={3}
						scoreFirstTeamTwo={1}
						scoreSecondTeamTwo={3}
					/>
				</div>
			</div>
		</div>
	);
}

export default ChampionsLeaguePlayOffs;

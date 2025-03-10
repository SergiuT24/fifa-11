import React from 'react';
import Square from '../../../../../components/league/square/Square';
import Fiorentina from '../../../../../components/league/4star-teams/Fiorentina';
import Wolfsburg from '../../../../../components/league/4star-teams/Wolfsburg';
import Leverkusen from '../../../../../components/league/4star-teams/Leverkusen';
import OM from '../../../../../components/league/4star-teams/OM';



const ChampionsLeaguePlayOffs = () => {
	return (
		<div className='py-16 darkblue'>
			<div className='flex flex-col gap-10'>
				<h2 className='text-center'>Play Offs: Quarter-finals 1/4</h2>
				<div className='flex gap-14 justify-center'>
					<Square
						teamOne={<Wolfsburg />}
						teamTwo={<Leverkusen />}
						scoreFirstTeamOne={6}
						scoreSecondTeamOne={3}
						scoreFirstTeamTwo={12}
						scoreSecondTeamTwo={2}
					/>
					<Square
						teamOne={<OM />}
						teamTwo={<Fiorentina />}
						scoreFirstTeamOne={'?'}
						scoreSecondTeamOne={'?'}
						scoreFirstTeamTwo={'?'}
						scoreSecondTeamTwo={'?'}
					/>
				</div>
			</div>
			<div className='flex flex-col gap-3 mt-9'>
				<h2 className='text-center'>FINAL</h2>
				<div className='flex gap-10 justify-center'>
					<Square
						teamOne={<Wolfsburg />}
						teamTwo={<Fiorentina />}
						scoreFirstTeamOne={7}
						scoreSecondTeamOne={0}
						scoreFirstTeamTwo={3}
						scoreSecondTeamTwo={1}
					/>
				</div>
			</div>
		</div>
	);
}

export default ChampionsLeaguePlayOffs;

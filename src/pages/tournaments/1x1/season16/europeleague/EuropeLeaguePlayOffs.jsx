import React from 'react';
import Square from '../../../../../components/league/square/Square';
import Barcelona from '../../../../../components/league/teams/Barcelona';
import ManchesterUnited from '../../../../../components/league/teams/ManchesterUnited';


const EuropeLeaguePlayOffs = () => {
	return (
		<div className='py-16 darkblue'>
			<div className='flex flex-col gap-10'>
				<h2 className='text-center'>Play Offs: Quarter-finals 1/4</h2>
				<div className='flex gap-14 justify-center'>
					<Square
						teamOne={<Barcelona />}
						teamTwo={'Group B 2'}
						scoreFirstTeamOne={0}
						scoreSecondTeamOne={0}
						scoreFirstTeamTwo={0}
						scoreSecondTeamTwo={0}
					/>
					<Square
						teamOne={<ManchesterUnited />}
						teamTwo={'Group A 2'}
						scoreFirstTeamOne={0}
						scoreSecondTeamOne={0}
						scoreFirstTeamTwo={0}
						scoreSecondTeamTwo={0}
					/>
				</div>
			</div>
			<div className='flex flex-col gap-3 mt-9'>
				<h2 className='text-center'>FINAL</h2>
				<div className='flex gap-10 justify-center'>
					<Square
						teamOne={'empty'}
						teamTwo={'empty'}
						scoreFirstTeamOne={0}
						scoreSecondTeamOne={0}
						scoreFirstTeamTwo={0}
						scoreSecondTeamTwo={0}
					/>
				</div>
			</div>
		</div>
	);
}

export default EuropeLeaguePlayOffs;

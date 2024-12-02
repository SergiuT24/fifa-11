import React from 'react';
import Square from '../../../../../components/league/square/Square';
import Brescia from './../../../../../components/league/3star-teams/Brescia';
import Inter from './../../../../../components/league/teams/Inter';
import AcMilan from './../../../../../components/league/teams/AcMilan';
import Fiorentina from './../../../../../components/league/4star-teams/Fiorentina';
import Lazio from './../../../../../components/league/4star-teams/Lazio';
import Napoli from './../../../../../components/league/4star-teams/Napoli';
import Palermo from './../../../../../components/league/4star-teams/Palermo';
import Bergamo from '../../../../../components/league/3star-teams/Bergamo';

const ChampionsLeaguePlayOffs = () => {
	return (
		<div className='py-16 darkblue'>
			<div className='flex flex-col gap-10'>
				<h2 className='text-center'>1/8-Finals</h2>
				<div className='flex gap-14 justify-center'>
					<Square
						teamOne={<Palermo />}
						teamTwo={<Bergamo />}
						scoreFirstTeamOne={1}
						scoreSecondTeamOne={2}
						scoreFirstTeamTwo={2}
						scoreSecondTeamTwo={2}
					/>
					<Square
						teamOne={<AcMilan />}
						teamTwo={<Lazio />}
						scoreFirstTeamOne={3}
						scoreSecondTeamOne={5}
						scoreFirstTeamTwo={4}
						scoreSecondTeamTwo={1}
					/>
				</div>
			</div>
			<div className='flex flex-col gap-10 mt-9'>
				<h2 className='text-center'>Play Offs: Quarter-Finals 1/4</h2>
				<div className='flex gap-14 justify-center'>
					<Square
						teamOne={<Brescia />}
						teamTwo={<Bergamo />}
						scoreFirstTeamOne={3}
						scoreSecondTeamOne={4}
						scoreFirstTeamTwo={0}
						scoreSecondTeamTwo={5}
					/>
					<Square
						teamOne={<Fiorentina />}
						teamTwo={<AcMilan />}
						scoreFirstTeamOne={3}
						scoreSecondTeamOne={5}
						scoreFirstTeamTwo={'2 | OV 6'}
						scoreSecondTeamTwo={'0 | OV 4'}
					/>
				</div>
			</div>
			<div className='flex flex-col gap-10 mt-9'>
				<h2 className='text-center'>Play Offs: Semi-Finals 1/2</h2>
				<div className='flex gap-14 justify-center'>
					<Square
						teamOne={<Napoli />}
						teamTwo={<Bergamo />}
						scoreFirstTeamOne={2}
						scoreSecondTeamOne={7}
						scoreFirstTeamTwo={0}
						scoreSecondTeamTwo={1}
					/>
					<Square
						teamOne={<Inter />}
						teamTwo={<Fiorentina />}
						scoreFirstTeamOne={1}
						scoreSecondTeamOne={0}
						scoreFirstTeamTwo={7}
						scoreSecondTeamTwo={1}
					/>
				</div>
			</div>
			<div className='flex flex-col gap-3 mt-9'>
				<h2 className='text-center'>FINAL</h2>
				<div className='flex gap-10 justify-center'>
					<Square
						teamOne={<Bergamo />}
						teamTwo={<Inter />}
						scoreFirstTeamOne={2}
						scoreSecondTeamOne={7}
						scoreFirstTeamTwo={4}
						scoreSecondTeamTwo={0}
					/>
				</div>
			</div>
		</div>
	);
}

export default ChampionsLeaguePlayOffs;

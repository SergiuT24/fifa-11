import React from 'react';
import Square from '../../../../../components/league/square/Square';
import Everton from './../../../../../components/league/4star-teams/Everton';
import Genoa from './../../../../../components/league/4star-teams/Genoa';
import Leverkusen from './../../../../../components/league/4star-teams/Leverkusen';
import Sampdoria from './../../../../../components/league/4star-teams/Sampdoria';
import Schalke from './../../../../../components/league/4star-teams/Schalke';
import Sporting from './../../../../../components/league/4star-teams/Sporting';
import Stuttgart from './../../../../../components/league/4star-teams/Stuttgart';
import Villarreal from './../../../../../components/league/4star-teams/Villarreal';
import Zenit from './../../../../../components/league/4star-teams/Zenit';
import PSV from './../../../../../components/league/4star-teams/Psv';
import Lazio from './../../../../../components/league/4star-teams/Lazio';

const KingsCupPlayOffs = () => {
	return (
		<div className='flex gap-10 overflow-x-scroll leaguemenu py-16 darkblue'>
			<div className='flex flex-col ml-3 gap-10'>
				<div>
					<h2 className='text-center text-orange-500'>Stage 1</h2>
				</div>
				<div className='flex flex-col gap-14 justify-center'>
					<Square
						teamOne={<Leverkusen />}
						teamTwo={<Genoa />}
						scoreFirstTeamOne={4}
						scoreSecondTeamOne={2}
						scoreFirstTeamTwo={6}
						scoreSecondTeamTwo={2}
					/>
					<Square
						teamOne={<Everton />}
						teamTwo={'empty'}
						scoreFirstTeamOne={'?'}
						scoreSecondTeamOne={'?'}
						scoreFirstTeamTwo={'?'}
						scoreSecondTeamTwo={'?'}
					/>
					<Square
						teamOne={<Zenit />}
						teamTwo={<Lazio />}
						scoreFirstTeamOne={7}
						scoreSecondTeamOne={1}
						scoreFirstTeamTwo={5}
						scoreSecondTeamTwo={3}
					/>
					<Square
						teamOne={<Stuttgart />}
						teamTwo={'empty'}
						scoreFirstTeamOne={'?'}
						scoreSecondTeamOne={'?'}
						scoreFirstTeamTwo={'?'}
						scoreSecondTeamTwo={'?'}
					/>
					<Square
						teamOne={<Schalke />}
						teamTwo={<Villarreal />}
						scoreFirstTeamOne={2}
						scoreSecondTeamOne={1}
						scoreFirstTeamTwo={10}
						scoreSecondTeamTwo={0}
					/>
					<Square
						teamOne={<Sporting />}
						teamTwo={'empty'}
						scoreFirstTeamOne={'?'}
						scoreSecondTeamOne={'?'}
						scoreFirstTeamTwo={'?'}
						scoreSecondTeamTwo={'?'}
					/>
					<Square
						teamOne={<Sampdoria />}
						teamTwo={'empty'}
						scoreFirstTeamOne={'?'}
						scoreSecondTeamOne={'?'}
						scoreFirstTeamTwo={'?'}
						scoreSecondTeamTwo={'?'}
					/>
					<Square
						teamOne={<PSV />}
						teamTwo={'empty'}
						scoreFirstTeamOne={'?'}
						scoreSecondTeamOne={'?'}
						scoreFirstTeamTwo={'?'}
						scoreSecondTeamTwo={'?'}
					/>
				</div>
			</div>
			<div className='flex flex-col gap-10'>
				<div>
					<h2 className='text-center text-orange-500'>Quarter-Finals 1/4</h2>
				</div>
				<div className='flex flex-col pt-20 justify-center'>
					<Square
						teamOne={<Leverkusen />}
						teamTwo={<Everton />}
						scoreFirstTeamOne={8}
						scoreSecondTeamOne={6}
						scoreFirstTeamTwo={3}
						scoreSecondTeamTwo={7}
					/>
					<div className='mt-48'>
						<Square
							teamOne={<Zenit />}
							teamTwo={<Stuttgart />}
							scoreFirstTeamOne={'?'}
							scoreSecondTeamOne={'?'}
							scoreFirstTeamTwo={'?'}
							scoreSecondTeamTwo={'?'}
						/>
					</div>
					<div className='mt-48'>
						<Square
							teamOne={<Schalke />}
							teamTwo={<Sporting />}
							scoreFirstTeamOne={3}
							scoreSecondTeamOne={0}
							scoreFirstTeamTwo={3}
							scoreSecondTeamTwo={0}
						/>
					</div>
					<div className='mt-48'>
						<Square
							teamOne={<Sampdoria />}
							teamTwo={<PSV />}
							scoreFirstTeamOne={2}
							scoreSecondTeamOne={3}
							scoreFirstTeamTwo={3}
							scoreSecondTeamTwo={8}
						/>
					</div>
				</div>
			</div>
			<div className='flex flex-col gap-10'>
				<div>
					<h2 className='text-center text-orange-500'>Semi-Finals 1/2</h2>
				</div>
				<div className='flex flex-col pt-20 justify-center'>
					<div className='mt-36'>
						<Square
							teamOne={<Everton />}
							teamTwo={<Zenit />}
							scoreFirstTeamOne={0}
							scoreSecondTeamOne={3}
							scoreFirstTeamTwo={0}
							scoreSecondTeamTwo={3}
						/>
					</div>
					<div className='mt-96 pt-16'>
						<Square
							teamOne={<Schalke />}
							teamTwo={<PSV />}
							scoreFirstTeamOne={3}
							scoreSecondTeamOne={1}
							scoreFirstTeamTwo={1}
							scoreSecondTeamTwo={2}
						/>
					</div>
				</div>
			</div>
			<div className='flex flex-col gap-10'>
				<div>
					<h2 className='text-center text-orange-500'>Final</h2>
				</div>
				<div className='flex flex-col pt-20 justify-center'>
					<div className='mt-96 pt-6'>
						<Square
							teamOne={<Zenit />}
							teamTwo={<Schalke />}
							scoreFirstTeamOne={2}
							scoreSecondTeamOne={2}
							scoreFirstTeamTwo={0}
							scoreSecondTeamTwo={1}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default KingsCupPlayOffs;

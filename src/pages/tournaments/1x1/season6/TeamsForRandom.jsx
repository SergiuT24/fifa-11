import React from 'react';
import Inter from './../../../../components/league/teams/Inter';
import AcMilan from './../../../../components/league/teams/AcMilan';
import Roma from './../../../../components/league/teams/Roma';
import Juventus from './../../../../components/league/teams/Juventus';
import Fiorentina from './../../../../components/league/4star-teams/Fiorentina';
import Lazio from './../../../../components/league/4star-teams/Lazio';
import Napoli from './../../../../components/league/4star-teams/Napoli';
import Palermo from './../../../../components/league/4star-teams/Palermo';
import Sampdoria from './../../../../components/league/4star-teams/Sampdoria';
import Brescia from '../../../../components/league/3star-teams/Brescia';


const TeamsForRandom = () => {
	return (
		<div className='flex mt-10 pl-6 flex-col gap-4'>
			<h3 className='text-center'>Teams For Random</h3>
			<Inter />
			<Brescia />
			<AcMilan />
			<Roma />
			<Juventus />
			<Fiorentina />
			<Lazio />
			<Napoli />
			<Palermo />
			<Sampdoria />
		</div>
	);
}

export default TeamsForRandom;

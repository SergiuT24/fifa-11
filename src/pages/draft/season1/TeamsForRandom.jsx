import React from 'react';
import AcMilan from '../../../components/league/teams/AcMilan';
import RealMadrid from '../../../components/league/teams/RealMadrid';
import Arsenal from '../../../components/league/teams/Arsenal';
import Barcelona from '../../../components/league/teams/Barcelona';
import AtleticoMadrid from '../../../components/league/teams/AtleticoMadrid';
import Chelsea from '../../../components/league/teams/Chelsea';
import Liverpool from '../../../components/league/teams/Liverpool';
import Inter from '../../../components/league/teams/Inter';
import Lyon from '../../../components/league/teams/Lyon';
import ManchesterCity from '../../../components/league/teams/ManchesterCity';
import ManchesterUnited from '../../../components/league/teams/ManchesterUnited';
import BayernMunich from '../../../components/league/teams/BayernMunich';


const TeamsForRandom = () => {
	return (
		<div className='flex pl-6 flex-col gap-4'>
			<h3 className='text-start'>Teams For Random</h3>
			<AcMilan />
			<Arsenal />
			<AtleticoMadrid />
			<Barcelona />
			<BayernMunich />
			<Chelsea />
			<Inter />
			<Liverpool />
			<Lyon />
			<ManchesterCity />
			<ManchesterUnited />
			<RealMadrid />
		</div>
	);
}

export default TeamsForRandom;

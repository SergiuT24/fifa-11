import React from 'react';
import Inter from '../../../../components/league/teams/Inter';
import RealMadrid from '../../../../components/league/teams/RealMadrid';
import Barcelona from '../../../../components/league/teams/Barcelona';
import ManchesterUnited from '../../../../components/league/teams/ManchesterUnited';
import Arsenal from '../../../../components/league/teams/Arsenal';
import ManchesterCity from '../../../../components/league/teams/ManchesterCity';
import Chelsea from '../../../../components/league/teams/Chelsea';
import BayernMunich from '../../../../components/league/teams/BayernMunich';
import AcMilan from '../../../../components/league/teams/AcMilan';
import Lyon from '../../../../components/league/teams/Lyon';

const TeamsForRandom = () => {
	return (
		<div className='flex mt-10 mx-3 flex-col gap-4'>
			<h3 className='text-center'>Teams For Random</h3>
			<Inter />
			<RealMadrid />
			<Arsenal />
			<Barcelona />
			<ManchesterCity />
			<ManchesterUnited />
			<Lyon />
			<Chelsea />
			<BayernMunich />
			<AcMilan />
		</div>
	);
}

export default TeamsForRandom;

import React from 'react';
import Inter from '../../../../components/league/teams/Inter';
import Barcelona from '../../../../components/league/teams/Barcelona';
import ManchesterUnited from '../../../../components/league/teams/ManchesterUnited';
import Arsenal from '../../../../components/league/teams/Arsenal';
import ManchesterCity from '../../../../components/league/teams/ManchesterCity';
import BayernMunich from '../../../../components/league/teams/BayernMunich';
import AcMilan from '../../../../components/league/teams/AcMilan';
import Liverpool from '../../../../components/league/teams/Liverpool';

const TeamsForRandom = () => {
	return (
		<div className='flex mt-10 mx-3 flex-col gap-4'>
			<h3 className='text-center'>Teams For Random</h3>
			<Inter />
			<Arsenal />
			<Liverpool />
			<Barcelona />
			<ManchesterCity />
			<ManchesterUnited />
			<BayernMunich />
			<AcMilan />
		</div>
	);
}

export default TeamsForRandom;

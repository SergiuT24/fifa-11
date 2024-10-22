import React from 'react';
import AcMilan from '../../../components/league/teams/AcMilan';
import Juventus from '../../../components/league/teams/Juventus';
import Roma from '../../../components/league/teams/Roma';
import Arsenal from '../../../components/league/teams/Arsenal';
import AtleticoMadrid from '../../../components/league/teams/AtleticoMadrid';
import Liverpool from '../../../components/league/teams/Liverpool';
import Porto from '../../../components/league/teams/Porto';
import Benfica from '../../../components/league/teams/Benfica';
import Inter from '../../../components/league/teams/Inter';
import Lyon from '../../../components/league/teams/Lyon';
import ManchesterCity from '../../../components/league/teams/ManchesterCity';
import Sevilla from '../../../components/league/teams/Sevilla';
import Valencia from '../../../components/league/teams/Valencia';
import AstonVilla from '../../../components/league/teams/AstonVilla';
import Tottenham from '../../../components/league/teams/Tottenham';
import BayernMunich from '../../../components/league/teams/BayernMunich';
import Hamburger from '../../../components/league/teams/Hamburger';


const TeamsForRandom = () => {
	return (
		<div className='flex pl-6 flex-col gap-4'>
			<h3 className='text-start'>Teams For Random</h3>
			<AcMilan />
			<Tottenham />
			<Juventus />
			<AstonVilla />
			<Roma />
			<Arsenal />
			<AtleticoMadrid />
			<Porto />
			<BayernMunich />
			<Inter />
			<Liverpool />
			<Lyon />
			<Valencia />
			<ManchesterCity />
			<Sevilla />
			<Benfica />
			<Hamburger />
		</div>
	);
}

export default TeamsForRandom;

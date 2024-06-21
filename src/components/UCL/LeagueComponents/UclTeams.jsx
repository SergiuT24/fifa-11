import React from 'react';
import RealMadrid from '../UCL-Teams/RealMadrid';
import Arsenal from '../UCL-Teams/Arsenal';
import ManchesterUnited from '../UCL-Teams/ManchesterUnited';
import AcMilan from '../UCL-Teams/AcMilan';
import AtleticoMadrid from '../UCL-Teams/AtleticoMadrid';
import Barcelona from '../UCL-Teams/Barcelona';
import BayernMunich from '../UCL-Teams/BayernMunich';
import Chelsea from '../UCL-Teams/Chelsea';
import Inter from '../UCL-Teams/Inter';
import Liverpool from '../UCL-Teams/Liverpool';
import Lyon from '../UCL-Teams/Lyon';
import ManchesterCity from '../UCL-Teams/ManchesterCity';


const UclTeams = () => {
	return (
		<div className='flex flex-wrap justify-around gap-4 my-8 border-t pt-5'>
			<div className='flex items-center'>
				<h3 className='text-xl uppercase'>teams for random:</h3>
			</div>
			<div className=' grid grid-cols-4 gap-x-36 gap-y-3'>
				<RealMadrid />
				<Arsenal />
				<ManchesterUnited />
				<AcMilan />
				<AtleticoMadrid />
				<Barcelona />
				<BayernMunich />
				<Chelsea />
				<Inter />
				<Liverpool />
				<Lyon />
				<ManchesterCity />
			</div>
		</div>
	);
}

export default UclTeams;

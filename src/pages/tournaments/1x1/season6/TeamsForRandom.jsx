import React from 'react';
import Argentina from '../../../../components/league/national-teams/Argentina';
import Brazil from '../../../../components/league/national-teams/Brazil';
import England from '../../../../components/league/national-teams/England';
import France from '../../../../components/league/national-teams/France';
import Germany from '../../../../components/league/national-teams/Germany';
import Holland from '../../../../components/league/national-teams/Holland';
import Italy from '../../../../components/league/national-teams/Italy';
import Portugal from '../../../../components/league/national-teams/Portugal';
import Spain from '../../../../components/league/national-teams/Spain';
import Uruguay from '../../../../components/league/national-teams/Uruguay';



const TeamsForRandom = () => {
	return (
		<div className='flex mt-10 pl-6 flex-col gap-4'>
			<h3 className='text-center'>Teams For Random</h3>
			<Argentina />
			<Brazil />
			<England />
			<France />
			<Germany />
			<Holland />
			<Italy />
			<Portugal />
			<Spain />
			<Uruguay />
		</div>
	);
}

export default TeamsForRandom;

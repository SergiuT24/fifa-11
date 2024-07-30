import React from 'react';
import Goal from '../../../../../components/league/best-goals/Goal';

const ProLeagueBestGoals = () => {
	return (
		<div>
			<h1 className='text-sm uppercase text-center my-3'>Pro League Best Goals:</h1>
			<div className='flex flex-col gap-5 justify-center'>
				<Goal
					title={"Гол от HAMA со штрафного:"}
					source={"/video/pro-league/goal-3.mp4"}
				/>
				<Goal
					title={"Mr.Noob в своем стиле"}
					source={"/video/pro-league/goal-2.mp4"}
				/>
				<Goal
					title={"ТОТО закрыл глаза и нажал D"}
					source={"/video/pro-league/goal-1.mp4"}
				/>
			</div>
		</div>
	);
}

export default ProLeagueBestGoals;

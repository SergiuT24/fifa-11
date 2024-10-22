import React from 'react';
import { DraftSeasonOne1x1 } from '../../../../components/league/table/DraftTableSeasons';
import { DraftSeasonOne2x2 } from '../../../../components/league/table/DraftTableSeasons';
import { DraftSeasonOne3x3 } from '../../../../components/league/table/DraftTableSeasons';
import { DraftSeasonOne4x4 } from '../../../../components/league/table/DraftTableSeasons';


const DraftTable = () => {
	return (
		<div className='flex flex-col gap-5 mt-4'>
			<h3 className='text-xl pl-5'>Group A 1x1</h3>
			<DraftSeasonOne1x1 />
			<DraftSeasonOne2x2 />
			<DraftSeasonOne3x3 />
			<DraftSeasonOne4x4 />
			{/* <div>
				<div>
					<h4 className='text-base mb-4'>Команда выбирается рандомом для каждой группы (1, 2, 3) из тех команд, что уже находятся в группе B. Играются 2 матча против команды-соперника (Team1 vs Team1, Team2 vs Team2, Team3 vs Team3).</h4>
					<ul>
						<li>Team 1 = place 1 and place 6</li>
						<li>Team 2 = place 2 and place 5</li>
						<li>Team 3 = place 3 and place 4</li>
					</ul>
				</div>
			</div>
			<DraftSeasonOneGroupA2x2 />
			<h3 className='text-xl pl-5 mt-16'>Group A 3x3</h3>
			<div>
				<div>
					<h4 className='text-base mb-4'>Команда выбирается рандомом для каждой группы (1, 2) из тех команд, что уже находятся в группе B. Играются 2 матча против команды-соперника (Team1 vs Team1, Team2 vs Team2).</h4>
					<ul>
						<li>Team 1 = place 1, place 3, place 6</li>
						<li>Team 2 = place 2, place 4, place 5</li>
					</ul>
				</div>
			</div>
			<DraftSeasonOneGroupA3x3 />
			<h3 className='text-xl pl-5 mt-16'>Group A 4x4</h3>
			<div>
				<h4 className='text-base mb-4'>Команда выбирается рандомом для каждой группы (1) из тех команд, что уже находятся в группе B. Играются 2 матча против команды-соперника (Team1 vs Team1).</h4>
				<ul>
					<li>Team 1 = place 1, place 2, place 3, place 4</li>
				</ul>
			</div>
			<DraftSeasonOneGroupA4x4 />
			<div className='text-2xl'>Total Points:</div> */}
		</div>
	);
}

export default DraftTable;
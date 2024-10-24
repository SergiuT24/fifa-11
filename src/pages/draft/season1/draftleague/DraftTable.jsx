import React from 'react';
import { DraftSeasonOne1x1 } from '../../../../components/league/table/DraftTableSeasons';
import { DraftSeasonOne2x2 } from '../../../../components/league/table/DraftTableSeasons';
import { DraftSeasonOne3x3 } from '../../../../components/league/table/DraftTableSeasons';
import { DraftSeasonOne4x4 } from '../../../../components/league/table/DraftTableSeasons';


const DraftTable = () => {
	return (
		<div className='flex flex-col gap-5 mt-4'>
			<DraftSeasonOne1x1 />
			<DraftSeasonOne2x2 />
			<DraftSeasonOne3x3 />
			<DraftSeasonOne4x4 />
		</div>
	);
}

export default DraftTable;
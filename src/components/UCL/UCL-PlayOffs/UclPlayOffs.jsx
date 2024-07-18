import React from 'react';
import PlayOffBracket from '../../Posts/Main/PlayOffs/PlayOffBracket';
import PlayOffTitle from '../../Posts/Main/PlayOffs/PlayOffTitle';
import BayernMunich from '../UCL-Teams/BayernMunich';
import Chelsea from '../UCL-Teams/Chelsea';
import Barcelona from '../UCL-Teams/Barcelona';
import Lyon from '../UCL-Teams/Lyon';
import Arsenal from '../UCL-Teams/Arsenal';
import AcMilan from '../UCL-Teams/AcMilan';


const UclPlayOffs = () => {
	return (
		<div className='p-14 w-full overflow-x-auto'>
			<div className='flex justify-around gap-32 sm:gap-0'>
				<div className='flex flex-col gap-8 relative'>
					<PlayOffTitle value={'1/4 Quarter-Finals'} />
					<div className='line-quarterone border rounded-lg p-3'>
						<PlayOffBracket team={<Lyon />} score={'2'} scoreTwo={'3'} />
						<PlayOffBracket team={<BayernMunich />} score={'2'} scoreTwo={'4'} />
					</div>
					<div className='line-quarter border rounded-lg p-3'>
						<PlayOffBracket team={<Barcelona />} score={2} scoreTwo={3} />
						<PlayOffBracket team={<Arsenal />} score={1} scoreTwo={1} />
					</div>
				</div>
				<div className='flex flex-col gap-8 relative'>
					<PlayOffTitle value={'1/2 semi-final'} />
					<div className='line-one border rounded-lg p-3'>
						<PlayOffBracket team={<Chelsea />} score={2} scoreTwo={3} />
						<PlayOffBracket team={<BayernMunich />} score={2} scoreTwo={5} />
					</div>
					<div className='line-two border rounded-lg p-3'>
						<PlayOffBracket team={<AcMilan />} score={1} scoreTwo={0} />
						<PlayOffBracket team={<Barcelona />} score={0} scoreTwo={2} />
					</div>
				</div>
				<div className='flex flex-col gap-8 relative'>
					<PlayOffTitle value={'final'} />
					<div className='line-tree border rounded-lg p-3 mt-11' title='Technical Win Bayern Munich'>
						<PlayOffBracket team={<BayernMunich />} score={'3'} scoreTwo={'3'} />
						<PlayOffBracket team={<Barcelona />} score={'0'} scoreTwo={'0'} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default UclPlayOffs;
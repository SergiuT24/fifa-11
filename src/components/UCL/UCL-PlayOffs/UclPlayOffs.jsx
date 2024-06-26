import React from 'react';
import PlayOffBracket from '../../Posts/Main/PlayOffs/PlayOffBracket';
import PlayOffTitle from '../../Posts/Main/PlayOffs/PlayOffTitle';

const UclPlayOffs = () => {
	return (
		<div className='p-14'>
			<div className='flex justify-around'>
				<div className='flex flex-col gap-8 relative'>
					<PlayOffTitle value={'1/4 Quarter-Finals'} />
					<div className='line-quarterone border rounded-lg p-3'>
						<PlayOffBracket team={'Position 2 Group B'} score={'?'} scoreTwo={'?'} />
						<PlayOffBracket team={'Position 3 Group A'} score={'?'} scoreTwo={'?'} />
					</div>
					<div className='line-quarter border rounded-lg p-3'>
						<PlayOffBracket team={'Position 2 Group A'} score={'?'} scoreTwo={'?'} />
						<PlayOffBracket team={'Position 3 Group B'} score={'?'} scoreTwo={'?'} />
					</div>
				</div>
				<div className='flex flex-col gap-8 relative'>
					<PlayOffTitle value={'1/2 semi-final'} />
					<div className='line-one border rounded-lg p-3'>
						<PlayOffBracket team={'Position 1 Group A'} score={'?'} scoreTwo={'?'} />
						<PlayOffBracket team={'None'} score={'?'} scoreTwo={'?'} />
					</div>
					<div className='line-two border rounded-lg p-3'>
						<PlayOffBracket team={'Position 1 Group B'} score={'?'} scoreTwo={'?'} />
						<PlayOffBracket team={'None'} score={'?'} scoreTwo={'?'} />
					</div>
				</div>
				<div className='flex flex-col gap-8 relative'>
					<PlayOffTitle value={'final'} />
					<div className='line-tree border rounded-lg p-3 mt-11'>
						<PlayOffBracket team={'None'} score={'?'} scoreTwo={'?'} />
						<PlayOffBracket team={'None'} score={'?'} scoreTwo={'?'} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default UclPlayOffs;
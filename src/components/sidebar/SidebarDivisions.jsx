import React from 'react';
import SidebarItem from './SidebarItem';

const SidebarDivisions = ({ selectedLeague, setSelectedLeague }) => {
	return (
		<div className='mx-3 w-40 flex flex-col gap-2'>
			<div className='border-b'>
				<h2 className='text-center pb-1 text-sm'>PINNED LEAGUES</h2>
			</div>
			<div className='flex flex-col gap-1'>
				<SidebarItem
					imgValue={'https://static.flashscore.com/res/_fs/build/world.b7d16db.png'}
					linkValue={'Pro League'}
					isSelected={selectedLeague === 'Pro League'}
					onClick={() => setSelectedLeague('Pro League')}
				/>
				<SidebarItem
					imgValue={'https://static.flashscore.com/res/_fs/build/world.b7d16db.png'}
					linkValue={'Champions League'}
					isSelected={selectedLeague === 'Champions League'}
					onClick={() => setSelectedLeague('Champions League')}
				/>
				<SidebarItem
					imgValue={'https://static.flashscore.com/res/_fs/build/world.b7d16db.png'}
					linkValue={'Europe League'}
					isSelected={selectedLeague === 'Europe League'}
					onClick={() => setSelectedLeague('Europe League')}
				/>
				<SidebarItem
					imgValue={'https://static.flashscore.com/res/_fs/build/world.b7d16db.png'}
					linkValue={`King's Cup`}
					isSelected={selectedLeague === `King's Cup`}
					onClick={() => setSelectedLeague(`King's Cup`)}
				/>
			</div>
		</div>
	);
}

export default SidebarDivisions;

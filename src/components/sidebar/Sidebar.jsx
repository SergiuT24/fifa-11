import React from 'react';
import SidebarItem from './SidebarItem';

const Sidebar = ({ selectedLeague, setSelectedLeague }) => {
	return (
		<div className='mx-5 w-40 flex flex-col gap-2'>
			<div className='border-b'>
				<h2 className='text-center pb-1 text-sm'>PINNED LEAGUES</h2>
			</div>
			<div className='flex flex-col gap-1'>
				<SidebarItem
					imgValue={'https://static.flashscore.com/res/_fs/build/world.b7d16db.png'}
					linkValue={'Legend League'}
					isSelected={selectedLeague === 'Legend League'}
					onClick={() => setSelectedLeague('Legend League')}
				/>
				<SidebarItem
					imgValue={'https://static.flashscore.com/res/_fs/build/world.b7d16db.png'}
					linkValue={'Champions League'}
					isSelected={selectedLeague === 'Champions League'}
					onClick={() => setSelectedLeague('Champions League')}
				/>
				<SidebarItem
					imgValue={'https://static.flashscore.com/res/_fs/build/world.b7d16db.png'}
					linkValue={'King Cup'}
					isSelected={selectedLeague === 'King Cup'}
					onClick={() => setSelectedLeague('King Cup')}
				/>
			</div>
		</div>
	);
}

export default Sidebar;
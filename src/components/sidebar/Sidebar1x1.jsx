import React from 'react';
import SidebarItem from './SidebarItem';

const Sidebar1x1 = ({ selectedLeague, setSelectedLeague }) => {
	return (
		<div className='mx-5 w-40 flex flex-col gap-2'>
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
					linkValue={'World Cup'}
					isSelected={selectedLeague === 'World Cup'}
					onClick={() => setSelectedLeague('World Cup')}
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

export default Sidebar1x1;

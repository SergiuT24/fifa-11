import React from 'react';
import SidebarImg from './SidebarImg';
import SidebarLink from './SidebarLink';

const SidebarItem = ({ imgValue, linkValue, isSelected, onClick }) => {
	return (
		<div
			className={`flex px-2 gap-2 items-center ${isSelected ? 'bg-gray-500' : 'hover:bg-gray-500'}`}
			onClick={onClick}
		>
			<SidebarImg src={imgValue} />
			<SidebarLink value={linkValue} />
		</div>
	);
}

export default SidebarItem;

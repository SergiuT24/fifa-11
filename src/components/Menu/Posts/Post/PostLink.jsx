import React from 'react';

const PostLink = ({ value, selected, onClick }) => {
	return (
		<a>
			<button
				onClick={onClick}
				className={`post-button uppercase ${selected ? 'bg-red-600' : ' bg-gray-950'}`}
			>
				{value}
			</button>
		</a>
	);
}

export default PostLink;

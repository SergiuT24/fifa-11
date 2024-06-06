import React from 'react';

const PostLink = ({ value }) => {
	return (
		<a>
			<button className='post-button uppercase'>{value}</button>
		</a>
	);
}

export default PostLink;

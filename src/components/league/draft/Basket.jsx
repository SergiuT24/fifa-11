import React from 'react';

const Basket = ({ basket, player1, player2, player3, player4, player5, player6 }) => {
	return (
		<div>
			<h2 className='mb-4'>{basket}</h2>
			<ul>
				<li>{player1}</li>
				<li>{player2}</li>
				<li>{player3}</li>
				<li>{player4}</li>
				<li>{player5}</li>
				<li>{player6}</li>
			</ul>
		</div>
	);
}

export default Basket;

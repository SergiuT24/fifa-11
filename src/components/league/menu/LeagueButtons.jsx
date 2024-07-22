import React from 'react';
import LeagueButton from './LeagueButton';

const LeagueButtons = ({ selectedButton, setSelectedButton }) => {
	return (
		<nav className='darkblue flex gap-8 border-t py-3 px-10'>
			<LeagueButton
				value={'Summary'}
				isSelected={selectedButton === 'Summary'}
				onClick={() => setSelectedButton('Summary')}
			/>
			<LeagueButton
				value={'News'}
				isSelected={selectedButton === 'News'}
				onClick={() => setSelectedButton('News')}
			/>
			<LeagueButton
				value={'Top Scorers'}
				isSelected={selectedButton === 'Top Scorers'}
				onClick={() => setSelectedButton('Top Scorers')}
			/>
			<LeagueButton
				value={'Most Assist'}
				isSelected={selectedButton === 'Most Assist'}
				onClick={() => setSelectedButton('Most Assist')}
			/>
			<LeagueButton
				value={'Best Goals'}
				isSelected={selectedButton === 'Best Goals'}
				onClick={() => setSelectedButton('Best Goals')}
			/>
		</nav>
	);
}

export default LeagueButtons;

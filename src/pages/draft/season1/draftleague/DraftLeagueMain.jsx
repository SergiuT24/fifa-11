import React from 'react';
import DraftMenu from '../../../../components/league/menu/DraftMenu';

const DraftLeagueMain = () => {

	return (
		<div className='flex justify-center'>
			<DraftMenu
				leagueCount={'Ultimate Draft League'}
				logo={'/img/league/draft-logo.png'}
				name={'Ultimate Draft League'}
				season={'Season 1'}
				cupImg={'/img/trophy/pro-league.png'}
			/>
		</div>
	);
}

export default DraftLeagueMain;

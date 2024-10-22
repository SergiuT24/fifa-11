import React from 'react';
import SquadsForSeasonGroupA from './season1/SquadsForSeasonGroupA';
import SquadsForSeasonGroupB from './season1/SquadsForSeasonGroupB';
import TeamsForRandom from './season1/TeamsForRandom';
import DraftLeagueMain from './season1/draftleague/DraftLeagueMain';
import DraftTableA from './season1/draftleague/DraftTableA'
import DraftTableB from './season1/draftleague/DraftTableB'
import Basket from '../../components/league/draft/Basket';

const DraftSeasonOne = () => {

	return (
		<div className='flex-1 justify-center items-center'>
			<DraftLeagueMain />
			<h1 className='text-3xl text-center py-2'>Побеждает группа, которая по завершению всех матчей набирает больше очков.</h1>
			<div className='flex mt-10 gap-16'>
				<TeamsForRandom />
				<div className='flex gap-24'>
					<Basket
						basket={'Basket of the Strong'}
						player1={'empty'}
						player2={'empty'}
						player3={'empty'}
						player4={'empty'}
						player5={'empty'}
						player6={'empty'}
					/>
					<Basket
						basket={'Basket of the Weak'}
						player1={'empty'}
						player2={'empty'}
						player3={'empty'}
						player4={'empty'}
					/>
				</div>
				<div className='flex gap-24'>
					<SquadsForSeasonGroupA />
					<SquadsForSeasonGroupB />
				</div>
			</div>
			<div className='flex justify-center gap-14'>
				<DraftTableA />
				<DraftTableB />
			</div>
			<h4 className='text-lg py-7'>В случае ничьей играется дополнительный матч 5 на 5, в котором участвуют первые 5 игроков из каждой группы.</h4>
		</div>
	);
}

export default DraftSeasonOne;

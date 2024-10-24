import React from 'react';
import SquadsForSeasonGroupA from './season1/SquadsForSeasonGroupA';
import SquadsForSeasonGroupB from './season1/SquadsForSeasonGroupB';
import TeamsForRandom from './season1/TeamsForRandom';
import DraftLeagueMain from './season1/draftleague/DraftLeagueMain';
import DraftTable from './season1/draftleague/DraftTable'
import Basket from '../../components/league/draft/Basket';

const DraftSeasonOne = () => {

	return (
		<div className='flex-1 justify-center items-center'>
			<DraftLeagueMain />
			<h1 className='text-3xl text-center py-2'>Побеждает группа, которая по завершению всех матчей набирает больше очков.</h1>
			<div className='flex mt-10 gap-16'>
				<TeamsForRandom />
				<div className='flex gap-10'>
					<Basket
						basket={'Basket of the Strong'}
						player1={'1.Anna'}
						player2={'2.M@KSON'}
						player3={'3.Jsnick'}
						player4={'4.TOTO'}
						player5={'5.Dagestan'}
						player6={'6.mysterio'}
					/>
					<Basket
						basket={'Basket of the medium players'}
						player1={'1.VITALY'}
						player2={'2.Niks'}
					/>
					<Basket
						basket={'Basket of the Weak'}
						player1={'1.Rayon 13'}
						player2={'2.A.Wenger'}
					/>
				</div>
				<div className='flex justify-center gap-10 mr-20'>
					<SquadsForSeasonGroupA />
					<SquadsForSeasonGroupB />
				</div>
			</div>
			<div className='flex ml-5 gap-14'>
				<DraftTable />
			</div>
			<h4 className='text-lg py-7'>В случае ничьей играется дополнительный матч 5 на 5, в котором участвуют первые 5 игроков из каждой группы.</h4>
		</div>
	);
}

export default DraftSeasonOne;

import React from 'react';
import { SeasonTree1x1 } from '../../../../../components/league/table/ProLeagueTableSeasons';
import LeagueTableLegendWorldCup from '../../../../../components/league/table/LeagueTableLegendWorldCup';
import News from '../../../../../components/league/news/News';


const ProLeagueSummary = () => {
	return (
		<div className='flex flex-col gap-10'>
			<SeasonTree1x1 />
			<div className='flex justify-center mt-10'>
				<div className='flex-col text-center p-4 w-96 border rounded-xl border-green-500'>
					<h2 className=' text-xl'>League Season 3 Winner Match</h2>
					<div><span className='text-sm'>Berserk 3</span>:<span className='text-red-500 font-bold'>4 HAM</span></div>
				</div>
			</div>
			<News
				src={'https://c8.alamy.com/comp/HP3N3T/ham-gold-sign-mounted-on-glossy-marble-wall-3d-rendered-royalty-free-HP3N3T.jpg'}
				title={'Новость: В турнире 1x1, 3 сезон, игроки HAM и Berserk завершили сезон с равным количеством очков — по 45 у каждого. Для определения чемпиона был проведён золотой матч, который стал решающим для определения победителя.Поздравляем игрока HAM с блестящей победой в золотом матче и завоеванием титула чемпиона 3 сезона! Его мастерство и упорство позволили ему стать лучшим в этой напряжённой борьбе. Желаем дальнейших успехов и новых достижений!'}
			/>
			{/* <LeagueTableLegendWorldCup /> */}
		</div>
	);
}

export default ProLeagueSummary;

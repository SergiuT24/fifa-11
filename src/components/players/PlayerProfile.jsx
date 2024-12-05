import React from 'react';

const PlayerProfile = ({ avatar, name, id, time, goldenShoe, goldenShoeCount, balonDor, balonDorCount, proLeague, proLeagueCount, middleLeague, middleLeagueCount, ucl, uclCount, europe, europeCount, kingsCup, kingsCupCount, worldCup, worldCupCount }) => {
	return (
		<tr className='darkblue border-b border-b-green-950 text-xs'>
			<th className='h-16 border-r border-r-green-950 text-start pl-2'>
				<div className='flex justify-center'>
					<img className='w-10 h-10 rounded-3xl' src={avatar} alt='Player Photo' />
				</div>
			</th>
			<th className='h-16 text-start border-r border-r-green-950 pl-2' title="Name">{name}</th>
			<th className='h-16 text-start border-r border-r-green-950 pl-2' title='ID'>{id}</th>
			<th className='h-16 border-r border-r-green-950 text-start pl-2' title='Time'>{time}</th>
			<th className='h-16 border-r border-r-green-950 text-start pl-2'>
				<div className='flex justify-center items-center gap-2'>
					<img className='w-12' src={goldenShoe} />
					<p>{goldenShoeCount}</p>
				</div>
			</th>
			<th className='h-16 border-r border-r-green-950 text-start pl-2'>
				<div className='flex justify-center items-center gap-2'>
					<img className='w-7' src={balonDor} />
					<p>{balonDorCount}</p>
				</div>
			</th>
			<th className='h-16 border-r border-r-green-950 text-start pl-2'>
				<div className='flex justify-center items-center gap-2'>
					<img className='w-7' src={proLeague} />
					<p>{proLeagueCount}</p>
				</div>
			</th>
			<th className='h-16 border-r border-r-green-950 text-start pl-2'>
				<div className='flex justify-center items-center gap-2'>
					<img className='w-7' src={middleLeague} />
					<p>{middleLeagueCount}</p>
				</div>
			</th>
			<th className='h-16 border-r border-r-green-950 text-start pl-2'>
				<div className='flex justify-center items-center gap-2'>
					<img className='w-7' src={ucl} />
					<p>{uclCount}</p>
				</div>
			</th>
			<th className='h-16 border-r border-r-green-950 text-start pl-2'>
				<div className='flex justify-center items-center gap-2'>
					<img className='w-7' src={europe} />
					<p>{europeCount}</p>
				</div>
			</th>
			<th className='h-16 border-r border-r-green-950 text-start pl-2'>
				<div className='flex justify-center items-center gap-2'>
					<img className='w-7' src={kingsCup} />
					<p>{kingsCupCount}</p>
				</div>
			</th>
			<th className='h-16 text-start pl-2'>
				<div className='flex justify-center items-center gap-2'>
					<img className='w-7' src={worldCup} />
					<p>{worldCupCount}</p>
				</div>
			</th>
		</tr>
	);
}

export default PlayerProfile;

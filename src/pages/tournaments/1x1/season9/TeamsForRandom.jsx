import React from 'react';
import Ajax from '../../../../components/league/4star-teams/Ajax';
import Besiktas from '../../../../components/league/4star-teams/Besiktas';
import Bilbao from '../../../../components/league/4star-teams/Bilbao';
import Cska from '../../../../components/league/4star-teams/Cska';
import Dortmund from '../../../../components/league/4star-teams/Dortmund';
import Everton from '../../../../components/league/4star-teams/Everton';
import Fenerbahce from '../../../../components/league/4star-teams/Fenerbahce';
import Fiorentina from '../../../../components/league/4star-teams/Fiorentina';
import FulHam from '../../../../components/league/4star-teams/FulHam';
import Galatasaray from '../../../../components/league/4star-teams/Galatasaray';
import Genoa from '../../../../components/league/4star-teams/Genoa';
import Getafe from '../../../../components/league/4star-teams/Getafe';
import Lazio from '../../../../components/league/4star-teams/Lazio';
import Leverkusen from '../../../../components/league/4star-teams/Leverkusen';
import Lille from '../../../../components/league/4star-teams/Lille';
import Napoli from '../../../../components/league/4star-teams/Napoli';
import OM from '../../../../components/league/4star-teams/OM';
import Palermo from '../../../../components/league/4star-teams/Palermo';
import Psg from '../../../../components/league/4star-teams/Psg';
import Psv from '../../../../components/league/4star-teams/Psv';
import Sampdoria from '../../../../components/league/4star-teams/Sampdoria';
import Schalke from '../../../../components/league/4star-teams/Schalke';
import Sporting from '../../../../components/league/4star-teams/Sporting';
import Stuttgart from '../../../../components/league/4star-teams/Stuttgart';
import Villarreal from '../../../../components/league/4star-teams/Villarreal';
import Werder from '../../../../components/league/4star-teams/Werder';
import WestHam from '../../../../components/league/4star-teams/WestHam';
import Wolfsburg from '../../../../components/league/4star-teams/Wolfsburg';
import Zenit from '../../../../components/league/4star-teams/Zenit';

const TeamsForRandom = () => {
	return (
		<div className='flex mt-10 mx-3 flex-col gap-4'>
			<h3 className='text-center'>Teams For Random</h3>
			<Ajax />
			<Besiktas />
			<Bilbao />
			<Cska />
			<Dortmund />
			<Everton />
			<Fenerbahce />
			<Fiorentina />
			<FulHam />
			<Galatasaray />
			<Genoa />
			<Getafe />
			<Lazio />
			<Leverkusen />
			<Lille />
			<Napoli />
			<OM />
			<Palermo />
			<Psg />
			<Psv />
			<Sampdoria />
			<Schalke />
			<Sporting />
			<Stuttgart />
			<Villarreal />
			<Werder />
			<WestHam />
			<Wolfsburg />
			<Zenit />
		</div>
	);
}

export default TeamsForRandom;
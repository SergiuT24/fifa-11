import Fenerbahce from '../../components/league/4star-teams/Fenerbahce';
import Genoa from '../../components/league/4star-teams/Genoa';
import Wolfsburg from '../../components/league/4star-teams/Wolfsburg';
import Napoli from '../../components/league/4star-teams/Napoli';
import Fiorentina from '../../components/league/4star-teams/Fiorentina';
import Werder from '../../components/league/4star-teams/Werder';
import Galatasaray from '../../components/league/4star-teams/Galatasaray';
import Besiktas from '../../components/league/4star-teams/Besiktas';
import Everton from '../../components/league/4star-teams/Everton';
import Villareal from '../../components/league/4star-teams/Villarreal';
import Cska from '../../components/league/4star-teams/Cska';
import Palermo from '../../components/league/4star-teams/Palermo';
import Lille from '../../components/league/4star-teams/Lille';




export const initialTeams = [
	{ id: 'Fenerbahce', name: <Fenerbahce />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Genoa', name: <Genoa />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Wolfsburg', name: <Wolfsburg />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Napoli', name: <Napoli />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Galatasaray', name: <Galatasaray />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Besiktas', name: <Besiktas />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
];


export const additionalTeams = [
	{ id: 'Everton', name: <Everton />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Fiorentina', name: <Fiorentina />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Werder', name: <Werder />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Villareal', name: <Villareal />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'CSKA', name: <Cska />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Palermo', name: <Palermo />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Lille', name: <Lille />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
]


export const matchResults = [
];

const fetchResults = async () => {
	console.log('Fetching results...');
	try {
		const response = await fetch(`https://match-results-bucket.s3.eu-central-1.amazonaws.com/matchResults.json?timestamp=${Date.now()}`);
		const data = await response.json();

		matchResults.length = 0;
		data.forEach(item => {
			matchResults.push({
				id: item.id,
				teamOne: item.teamOne,
				scoreOne: item.scoreOne,
				teamTwo: item.teamTwo,
				scoreTwo: item.scoreTwo
			});
		});

		return matchResults;
	} catch (error) {
		console.error('Error fetching match results:', error);
		return [];
	}
};

fetchResults().then(() => {
});
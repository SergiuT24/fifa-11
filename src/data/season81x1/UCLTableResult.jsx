import Fenerbahce from '../../components/league/4star-teams/Fenerbahce';
import Genoa from '../../components/league/4star-teams/Genoa';
import Wolfsburg from '../../components/league/4star-teams/Wolfsburg';
import Napoli from '../../components/league/4star-teams/Napoli';
import Fiorentina from '../../components/league/4star-teams/Fiorentina';
import Werder from '../../components/league/4star-teams/Werder';

export const initialTeams = [
	{ id: 'UCL-Fenerbahce', name: <Fenerbahce />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'UCL-Napoli', name: <Napoli />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'UCL-Fiorentina', name: <Fiorentina />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
];

export const additionalTeams = [
	{ id: 'UCL-Genoa', name: <Genoa />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'UCL-Wolfsburg', name: <Wolfsburg />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'UCL-Werder', name: <Werder />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },

];


export const matchResults = [];

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
import Psv from '../../components/league/4star-teams/Psv';
import Stuttgart from '../../components/league/4star-teams/Stuttgart';
import Palermo from '../../components/league/4star-teams/Palermo';
import FulHam from '../../components/league/4star-teams/FulHam';

export const initialTeams = [
	{ id: 'UCL-Stuttgart', name: <Stuttgart />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'UCL-PSV', name: <Psv />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'UCL-Place 2-ML', name: 'Place 2-ML', mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
];

export const additionalTeams = [
	{ id: 'UCL-Fulham', name: <FulHam />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'UCL-Palermo', name: <Palermo />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'UCL-Place 1-ML', name: 'Place 1-ML', mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },

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
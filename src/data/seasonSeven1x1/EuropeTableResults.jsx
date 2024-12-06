import Werder from '../../components/league/4star-teams/Werder';
import Sporting from '../../components/league/4star-teams/Sporting';
import Galatasaray from '../../components/league/4star-teams/Galatasaray';
import WestHam from '../../components/league/4star-teams/WestHam';
import Wolfsburg from '../../components/league/4star-teams/Wolfsburg';

export const initialTeams = [
	{ id: '3-Place Middle League', name: '3-Place Middle League', mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'EL-WestHam', name: <WestHam />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'EL-Wolfsburg', name: <Wolfsburg />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
];

export const additionalTeams = [
	{ id: 'EL-Sporting', name: <Sporting />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'EL-Galatasaray', name: <Galatasaray />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'EL-Werder', name: <Werder />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },

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
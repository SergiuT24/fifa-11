import Inter from '../../components/league/teams/Inter';
import AcMilan from '../../components/league/teams/AcMilan';
import Roma from '../../components/league/teams/Roma';
import Juventus from '../../components/league/teams/Juventus';
import Fiorentina from '../../components/league/4star-teams/Fiorentina';
import Genoa from '../../components/league/4star-teams/Genoa';
import Lazio from '../../components/league/4star-teams/Lazio';
import Napoli from '../../components/league/4star-teams/Napoli';
import Palermo from '../../components/league/4star-teams/Palermo';
import Sampdoria from '../../components/league/4star-teams/Sampdoria';

export const initialTeams = [
	{ id: 'Inter', name: <Inter />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Milan', name: <AcMilan />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Roma', name: <Roma />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Juventus', name: <Juventus />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Fiorentina', name: <Fiorentina />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Genoa', name: <Genoa />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Lazio', name: <Lazio />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Napoli', name: <Napoli />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Palermo', name: <Palermo />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Sampdoria', name: <Sampdoria />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
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

		console.log('Formatted Data:', matchResults);
		return matchResults;
	} catch (error) {
		console.error('Error fetching match results:', error);
		return [];
	}
};

fetchResults().then(() => {
	console.log('Final matchResults:', matchResults);
});
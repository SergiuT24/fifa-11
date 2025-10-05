import CSKA from '../../components/league/4star-teams/Cska';
import RealMadrid from '../../components/league/teams/RealMadrid';
import Inter from '../../components/league/teams/Inter';
import Anji from '../../components/league/teams/Anji';
import Valencia from '../../components/league/teams/Valencia';
import ACMilan from '../../components/league/teams/AcMilan';

export const initialTeams = [
	{ id: 'RealMadrid', name: <RealMadrid />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'CSKA', name: < CSKA />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Inter', name: < Inter />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
];

export const additionalTeams = [
	{ id: 'Anji', name: <Anji />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'ACMilan', name: <ACMilan />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Valencia', name: < Valencia />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
];
export const matchResults = [
	{ id: '27', teamOne: 'CSKA', scoreOne: 0, teamTwo: 'Inter', scoreTwo: 4 },
	{ id: '28', teamOne: 'Inter', scoreOne: 1, teamTwo: 'CSKA', scoreTwo: 5 },
	{ id: '29', teamOne: 'Anji', scoreOne: 5, teamTwo: 'Valencia', scoreTwo: 2 },
	{ id: '30', teamOne: 'Valencia', scoreOne: 3, teamTwo: 'Anji', scoreTwo: 1 },
	{ id: '31', teamOne: 'CSKA', scoreOne: 2, teamTwo: 'RealMadrid', scoreTwo: 5 },
	{ id: '32', teamOne: 'RealMadrid', scoreOne: 1, teamTwo: 'CSKA', scoreTwo: 2 },
	{ id: '33', teamOne: 'Anji', scoreOne: 2, teamTwo: 'ACMilan', scoreTwo: 0 },
	{ id: '34', teamOne: 'ACMilan', scoreOne: 2, teamTwo: 'Anji', scoreTwo: 4 },
	{ id: '35', teamOne: 'Inter', scoreOne: 2, teamTwo: 'RealMadrid', scoreTwo: 4 },
	{ id: '36', teamOne: 'RealMadrid', scoreOne: 4, teamTwo: 'Inter', scoreTwo: 1 },
	{ id: '33', teamOne: 'Valencia', scoreOne: 2, teamTwo: 'ACMilan', scoreTwo: 0 },
	{ id: '34', teamOne: 'ACMilan', scoreOne: 0, teamTwo: 'Valencia', scoreTwo: 2 },
];


// const fetchResults = async () => {
// 	console.log('Fetching results...');
// 	try {
// 		const response = await fetch(`https://match-results-bucket.s3.eu-central-1.amazonaws.com/matchResults.json?timestamp=${Date.now()}`);
// 		const data = await response.json();

// 		matchResults.length = 0;
// 		data.forEach(item => {
// 			matchResults.push({
// 				id: item.id,
// 				teamOne: item.teamOne,
// 				scoreOne: item.scoreOne,
// 				teamTwo: item.teamTwo,
// 				scoreTwo: item.scoreTwo
// 			});
// 		});

// 		return matchResults;
// 	} catch (error) {
// 		console.error('Error fetching match results:', error);
// 		return [];
// 	}
// };

// fetchResults().then(() => {
// });

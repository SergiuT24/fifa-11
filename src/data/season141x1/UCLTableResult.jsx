import CSKA from '../../components/league/4star-teams/Cska';
import Werder from '../../components/league/4star-teams/Werder';
import Galatasaray from '../../components/league/4star-teams/Galatasaray';
import Getafe from '../../components/league/4star-teams/Getafe';
import OM from '../../components/league/4star-teams/OM';
import Lazio from '../../components/league/4star-teams/Lazio';
import Dortmund from '../../components/league/4star-teams/Dortmund';
import Fiorentina from '../../components/league/4star-teams/Fiorentina';

export const initialTeams = [
	{ id: 'Galatasaray', name: <Galatasaray />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'CSKA', name: <CSKA />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Fiorentina', name: <Fiorentina />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Getafe', name: <Getafe />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
];

export const additionalTeams = [
	{ id: 'Lazio', name: <Lazio />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Dortmund', name: <Dortmund />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'OM', name: <OM />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Werder', name: <Werder />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
];

export const matchResults = [
	{ id: '138', teamOne: 'Galatasaray', scoreOne: 1, teamTwo: 'CSKA', scoreTwo: 3 },
	{ id: '138', teamOne: 'CSKA', scoreOne: 2, teamTwo: 'Galatasaray', scoreTwo: 0 },
	{ id: '138', teamOne: 'Dortmund', scoreOne: 3, teamTwo: 'Werder', scoreTwo: 3 },
	{ id: '138', teamOne: 'Werder', scoreOne: 0, teamTwo: 'Dortmund', scoreTwo: 4 },
	{ id: '138', teamOne: 'Lazio', scoreOne: 5, teamTwo: 'OM', scoreTwo: 1 },
	{ id: '138', teamOne: 'OM', scoreOne: 0, teamTwo: 'Lazio', scoreTwo: 3 },
	{ id: '138', teamOne: 'CSKA', scoreOne: 1, teamTwo: 'Fiorentina', scoreTwo: 4 },
	{ id: '138', teamOne: 'Fiorentina', scoreOne: 1, teamTwo: 'CSKA', scoreTwo: 3 },
	{ id: '138', teamOne: 'Getafe', scoreOne: 1, teamTwo: 'Fiorentina', scoreTwo: 6 },
	{ id: '138', teamOne: 'Fiorentina', scoreOne: 5, teamTwo: 'Getafe', scoreTwo: 2 },
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

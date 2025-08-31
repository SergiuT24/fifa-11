import Juventus from '../../components/league/teams/Juventus';
import Arsenal from '../../components/league/teams/Arsenal';
import ACMilan from '../../components/league/teams/AcMilan';
import ManchesterCity from '../../components/league/teams/ManchesterCity';
import ManchesterUnited from '../../components/league/teams/ManchesterUnited';
import RealMadrid from '../../components/league/teams/RealMadrid';
import Barcelona from '../../components/league/teams/Barcelona';
import Lyon from '../../components/league/teams/Lyon';
import Liverpool from '../../components/league/teams/Liverpool';
import Tottenham from '../../components/league/teams/Tottenham';
import Inter from '../../components/league/teams/Inter';
import Chelsea from '../../components/league/teams/Chelsea';
import AtleticoMadrid from '../../components/league/teams/AtleticoMadrid';


export const initialTeams = [
	{ id: 'RealMadrid', name: <RealMadrid/>, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'AtlecticoMadrid', name: <AtlecticoMadrid/>, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Place 2 Middle L.', name: 'Place 2 Middle L.', mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
];

export const additionalTeams = [
	{ id: 'ACMilan', name: <ACMilan/>, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Lyon', name: <Lyon/>, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Place 1 Middle L.', name: 'Place 1 Middle L.', mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
];

export const matchResults = [
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

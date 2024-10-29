import Porto from '../../components/league/teams/Porto';
import Liverpool from '../../components/league/teams/Liverpool';
import Sevilla from '../../components/league/teams/Sevilla';
import ManchesterCity from '../../components/league/teams/ManchesterCity';
import BayernMunich from '../../components/league/teams/BayernMunich';
import AcMilan from '../../components/league/teams/AcMilan';


const initialTeams = [
	{ id: 'Bayern Munich', name: <BayernMunich />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Liverpool', name: <Liverpool />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Porto', name: <Porto />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
];

const additionalTeams = [
	{ id: 'Manchester City', name: <ManchesterCity />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Sevilla', name: <Sevilla />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'AC Milan', name: <AcMilan />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
];

const matchResults = [
	{ teamOne: 'Manchester City', scoreOne: 3, teamTwo: 'Bayern Munich', scoreTwo: 0 },
	{ teamOne: 'Bayern Munich', scoreOne: 2, teamTwo: 'Manchester City', scoreTwo: 2 },
	{ teamOne: 'Bayern Munich', scoreOne: 1, teamTwo: 'AC Milan', scoreTwo: 3 },
	{ teamOne: 'AC Milan', scoreOne: 4, teamTwo: 'Bayern Munich', scoreTwo: 1 },
	{ teamOne: 'Bayern Munich', scoreOne: 0, teamTwo: 'Sevilla', scoreTwo: 3 },
	{ teamOne: 'Sevilla', scoreOne: 3, teamTwo: 'Bayern Munich', scoreTwo: 0 },
	{ teamOne: 'Porto', scoreOne: 1, teamTwo: 'Sevilla', scoreTwo: 3 },
	{ teamOne: 'Sevilla', scoreOne: 1, teamTwo: 'Porto', scoreTwo: 0 },
	{ teamOne: 'Liverpool', scoreOne: 6, teamTwo: 'Sevilla', scoreTwo: 1 },
	{ teamOne: 'Sevilla', scoreOne: 0, teamTwo: 'Liverpool', scoreTwo: 7 },
	{ teamOne: 'Liverpool', scoreOne: 6, teamTwo: 'AC Milan', scoreTwo: 1 },
	{ teamOne: 'AC Milan', scoreOne: 0, teamTwo: 'Liverpool', scoreTwo: 4 },
	{ teamOne: 'Liverpool', scoreOne: 2, teamTwo: 'Manchester City', scoreTwo: 1 },
	{ teamOne: 'Manchester City', scoreOne: 0, teamTwo: 'Liverpool', scoreTwo: 6 },
	// Team3A
	{ teamOne: 'Porto', scoreOne: '?', teamTwo: 'Manchester City', scoreTwo: '?' },
	{ teamOne: 'Porto', scoreOne: '?', teamTwo: 'AC Milan', scoreTwo: '?' },
	// Team 1B
	{ teamOne: 'Manchester City', scoreOne: '?', teamTwo: 'Porto', scoreTwo: '?' },
	// Team 3B
	{ teamOne: 'AC Milan', scoreOne: '?', teamTwo: 'Porto', scoreTwo: '?' },
];

export { initialTeams, additionalTeams, matchResults };

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
	// Team1A
	{ teamOne: 'Bayern Munich', scoreOne: '?', teamTwo: 'Manchester City', scoreTwo: '?' },
	{ teamOne: 'Bayern Munich', scoreOne: '?', teamTwo: 'Sevilla', scoreTwo: '?' },
	{ teamOne: 'Bayern Munich', scoreOne: '?', teamTwo: 'AC Milan', scoreTwo: '?' },
	// Team2A
	{ teamOne: 'Liverpool', scoreOne: '?', teamTwo: 'Manchester City', scoreTwo: '?' },
	{ teamOne: 'Liverpool', scoreOne: '?', teamTwo: 'Sevilla', scoreTwo: '?' },
	{ teamOne: 'Liverpool', scoreOne: '?', teamTwo: 'AC Milan', scoreTwo: '?' },
	// Team3A
	{ teamOne: 'Porto', scoreOne: '?', teamTwo: 'Manchester City', scoreTwo: '?' },
	{ teamOne: 'Porto', scoreOne: '?', teamTwo: 'Sevilla', scoreTwo: '?' },
	{ teamOne: 'Porto', scoreOne: '?', teamTwo: 'AC Milan', scoreTwo: '?' },
	// Team 1B
	{ teamOne: 'Manchester City', scoreOne: '?', teamTwo: 'Bayern Munich', scoreTwo: '?' },
	{ teamOne: 'Manchester City', scoreOne: '?', teamTwo: 'Liverpool', scoreTwo: '?' },
	{ teamOne: 'Manchester City', scoreOne: '?', teamTwo: 'Porto', scoreTwo: '?' },
	// Team 2B
	{ teamOne: 'Sevilla', scoreOne: '?', teamTwo: 'Bayern Munich', scoreTwo: '?' },
	{ teamOne: 'Sevilla', scoreOne: '?', teamTwo: 'Liverpool', scoreTwo: '?' },
	{ teamOne: 'Sevilla', scoreOne: '?', teamTwo: 'Porto', scoreTwo: '?' },
	// Team 3B
	{ teamOne: 'AC Milan', scoreOne: '?', teamTwo: 'Bayern Munich', scoreTwo: '?' },
	{ teamOne: 'AC Milan', scoreOne: '?', teamTwo: 'Liverpool', scoreTwo: '?' },
	{ teamOne: 'AC Milan', scoreOne: '?', teamTwo: 'Porto', scoreTwo: '?' },
];

export { initialTeams, additionalTeams, matchResults };

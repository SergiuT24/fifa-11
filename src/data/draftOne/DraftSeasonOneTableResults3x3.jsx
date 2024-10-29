import Roma from '../../components/league/teams/Roma';
import Valencia from '../../components/league/teams/Valencia';
import ManchesterCity from '../../components/league/teams/ManchesterCity';
import AcMilan from '../../components/league/teams/AcMilan';

const initialTeams = [
	{ id: 'AS Roma', name: <Roma />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Valencia', name: <Valencia />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
];

const additionalTeams = [
	{ id: 'Manchester City', name: <ManchesterCity />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'AC Milan', name: <AcMilan />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
];

const matchResults = [
	{ teamOne: 'AS Roma', scoreOne: '?', teamTwo: 'Manchester City', scoreTwo: '?' },
	{ teamOne: 'AS Roma', scoreOne: '?', teamTwo: 'AC Milan', scoreTwo: '?' },
	{ teamOne: 'Valencia', scoreOne: '?', teamTwo: 'Manchester City', scoreTwo: '?' },
	{ teamOne: 'Valencia', scoreOne: '?', teamTwo: 'AC Milan', scoreTwo: '?' },
	{ teamOne: 'Manchester City', scoreOne: '?', teamTwo: 'AS Roma', scoreTwo: '?' },
	{ teamOne: 'Manchester City', scoreOne: '?', teamTwo: 'Valencia', scoreTwo: '?' },
	{ teamOne: 'AC Milan', scoreOne: '?', teamTwo: 'AS Roma', scoreTwo: '?' },
	{ teamOne: 'AC Milan', scoreOne: '?', teamTwo: 'Valencia', scoreTwo: '?' },
];

export { initialTeams, additionalTeams, matchResults };

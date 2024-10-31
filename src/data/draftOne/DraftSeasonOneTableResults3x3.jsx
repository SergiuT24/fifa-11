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
	{ teamOne: 'Valencia', scoreOne: 3, teamTwo: 'AC Milan', scoreTwo: 1 },
	{ teamOne: 'AC Milan', scoreOne: 5, teamTwo: 'Valencia', scoreTwo: 0 },
	{ teamOne: 'Valencia', scoreOne: 0, teamTwo: 'Manchester City', scoreTwo: 6 },
	{ teamOne: 'Manchester City', scoreOne: 7, teamTwo: 'Valencia', scoreTwo: 0 },
	{ teamOne: 'AS Roma', scoreOne: 1, teamTwo: 'Manchester City', scoreTwo: 7 },
	{ teamOne: 'Manchester City', scoreOne: 5, teamTwo: 'AS Roma', scoreTwo: 1 },
	{ teamOne: 'AS Roma', scoreOne: 6, teamTwo: 'AC Milan', scoreTwo: 1 },
	{ teamOne: 'AC Milan', scoreOne: 0, teamTwo: 'AS Roma', scoreTwo: 3 },
];

export { initialTeams, additionalTeams, matchResults };

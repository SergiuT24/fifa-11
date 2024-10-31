import Roma from '../../components/league/teams/Roma';
import Lyon from '../../components/league/teams/Lyon';

const initialTeams = [
	{ id: 'AS Roma', name: <Roma />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
];

const additionalTeams = [
	{ id: 'Lyon', name: <Lyon />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
];

const matchResults = [
	{ teamOne: 'AS Roma', scoreOne: '?', teamTwo: 'Lyon', scoreTwo: '?' },
	{ teamOne: 'Lyon', scoreOne: '?', teamTwo: 'AS Roma', scoreTwo: '?' },
];

export { initialTeams, additionalTeams, matchResults };

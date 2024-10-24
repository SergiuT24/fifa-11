// import Porto from '../../components/league/teams/Porto';
// import Arsenal from '../../components/league/teams/Arsenal';
// import Roma from '../../components/league/teams/Roma';
// import Valencia from '../../components/league/teams/Valencia';
// import BayernMunich from '../../components/league/teams/BayernMunich';
// import Liverpool from '../../components/league/teams/Liverpool';
// import Lyon from '../../components/league/teams/Lyon';
// import Sevilla from '../../components/league/teams/Sevilla';
// import Juventus from '../../components/league/teams/Juventus';
// import AstonVilla from '../../components/league/teams/AstonVilla';
// import ManchesterCity from '../../components/league/teams/ManchesterCity';
// import AcMilan from '../../components/league/teams/AcMilan';

const initialTeams = [
	{ id: 'Team1A', name: 'Team1A', mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Team2A', name: 'Team2A', mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Team3A', name: 'Team3A', mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
];

const additionalTeams = [
	{ id: 'Team1B', name: 'Team1B', mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Team2B', name: 'Team2B', mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Team3B', name: 'Team3B', mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
];

const matchResults = [
	// Team1A
	{ teamOne: 'Team1A', scoreOne: '?', teamTwo: 'Team1B', scoreTwo: '?' },
	{ teamOne: 'Team1A', scoreOne: '?', teamTwo: 'Team2B', scoreTwo: '?' },
	{ teamOne: 'Team1A', scoreOne: '?', teamTwo: 'Team3B', scoreTwo: '?' },
	// Team2A
	{ teamOne: 'Team2A', scoreOne: '?', teamTwo: 'Team1B', scoreTwo: '?' },
	{ teamOne: 'Team2A', scoreOne: '?', teamTwo: 'Team2B', scoreTwo: '?' },
	{ teamOne: 'Team2A', scoreOne: '?', teamTwo: 'Team3B', scoreTwo: '?' },
	// Team3A
	{ teamOne: 'Team3A', scoreOne: '?', teamTwo: 'Team1B', scoreTwo: '?' },
	{ teamOne: 'Team3A', scoreOne: '?', teamTwo: 'Team2B', scoreTwo: '?' },
	{ teamOne: 'Team3A', scoreOne: '?', teamTwo: 'Team3B', scoreTwo: '?' },
	// Team 1B
	{ teamOne: 'Team1B', scoreOne: '?', teamTwo: 'Team1A', scoreTwo: '?' },
	{ teamOne: 'Team1B', scoreOne: '?', teamTwo: 'Team2A', scoreTwo: '?' },
	{ teamOne: 'Team1B', scoreOne: '?', teamTwo: 'Team3A', scoreTwo: '?' },
	// Team 2B
	{ teamOne: 'Team2B', scoreOne: '?', teamTwo: 'Team1A', scoreTwo: '?' },
	{ teamOne: 'Team2B', scoreOne: '?', teamTwo: 'Team2A', scoreTwo: '?' },
	{ teamOne: 'Team2B', scoreOne: '?', teamTwo: 'Team3A', scoreTwo: '?' },
	// Team 3B
	{ teamOne: 'Team3B', scoreOne: '?', teamTwo: 'Team1A', scoreTwo: '?' },
	{ teamOne: 'Team3B', scoreOne: '?', teamTwo: 'Team2A', scoreTwo: '?' },
	{ teamOne: 'Team3B', scoreOne: '?', teamTwo: 'Team3A', scoreTwo: '?' },
];

export { initialTeams, additionalTeams, matchResults };

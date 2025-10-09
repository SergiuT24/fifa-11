import Barcelona from '../../components/league/teams/Barcelona';
import Chelsea from '../../components/league/teams/Chelsea';
import FSVMainz from '../../components/league/teams/FSVMainz';
import NewcastleUnited from '../../components/league/teams/NewcastleUnited';
import BocaJuniors from '../../components/league/teams/BocaJuniors';
import WestBrom from '../../components/league/teams/WestBrom';



export const initialTeams = [
	{ id: 'Barcelona', name: < Barcelona />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Chelsea', name: < Chelsea />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'NewcastleUnited', name: <NewcastleUnited />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
];

export const additionalTeams = [
	{ id: 'FSVMainz', name: < FSVMainz />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'BocaJuniors', name: <BocaJuniors />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'WestBrom', name: < WestBrom />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
];

export const matchResults = [
	{ id: '123', teamOne: 'WestBrom', scoreOne: 2, teamTwo: 'BocaJuniors', scoreTwo: 2 },
	{ id: '123', teamOne: 'BocaJuniors', scoreOne: 0, teamTwo: 'WestBrom', scoreTwo: 3 },
	{ id: '123', teamOne: 'Chelsea', scoreOne: 3, teamTwo: 'Barcelona', scoreTwo: 4 },
	{ id: '123', teamOne: 'Barcelona', scoreOne: 10, teamTwo: 'Chelsea', scoreTwo: 2 },
	{ id: '123', teamOne: 'FSVMainz', scoreOne: 2, teamTwo: 'BocaJuniors', scoreTwo: 1 },
	{ id: '123', teamOne: 'BocaJuniors', scoreOne: 1, teamTwo: 'FSVMainz', scoreTwo: 2 },
	{ id: '123', teamOne: 'WestBrom', scoreOne: 5, teamTwo: 'FSVMainz', scoreTwo: 4 },
	{ id: '123', teamOne: 'FSVMainz', scoreOne: 3, teamTwo: 'WestBrom', scoreTwo: 1 },
	{ id: '123', teamOne: 'Chelsea', scoreOne: 2, teamTwo: 'NewcastleUnited', scoreTwo: 1 },
	{ id: '123', teamOne: 'NewcastleUnited', scoreOne: 3, teamTwo: 'Chelsea', scoreTwo: 2 },
	{ id: '123', teamOne: 'NewcastleUnited', scoreOne: 1, teamTwo: 'Barcelona', scoreTwo: 0 },
	{ id: '123', teamOne: 'Barcelona', scoreOne: 6, teamTwo: 'NewcastleUnited', scoreTwo: 1 },
];

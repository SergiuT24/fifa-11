import Argentina from '../../components/league/national-teams/Argentina';
import France from '../../components/league/national-teams/France';
import Germany from '../../components/league/national-teams/Germany';
import Italy from '../../components/league/national-teams/Italy';
import Portugal from '../../components/league/national-teams/Portugal';
import Spain from '../../components/league/national-teams/Spain';

export const initialTeams = [
	{ id: 'WC-Spain', name: <Spain />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'WC-Argentina', name: <Argentina />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'WC-Portugal', name: <Portugal />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
];

export const additionalTeams = [
	{ id: 'WC-France', name: <France />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'WC-Germany', name: <Germany />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'WC-Italy', name: <Italy />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
];


export const matchResults = [
	{
		id: '1741414253998',
		teamOne: 'WC-Italy',
		scoreOne: 3,
		teamTwo: 'WC-France',
		scoreTwo: 3
	},
	{
		id: '1741414256417',
		teamOne: 'WC-France',
		scoreOne: 3,
		teamTwo: 'WC-Italy',
		scoreTwo: 4
	},
	{
		id: '1741414356525',
		teamOne: 'WC-Portugal',
		scoreOne: 0,
		teamTwo: 'WC-Spain',
		scoreTwo: 2
	},
	{
		id: '1741414358596',
		teamOne: 'WC-Spain',
		scoreOne: 3,
		teamTwo: 'WC-Portugal',
		scoreTwo: 7
	},
	{
		id: '1741414438632',
		teamOne: 'WC-Portugal',
		scoreOne: 5,
		teamTwo: 'WC-Argentina',
		scoreTwo: 3
	},
	{
		id: '1741414441601',
		teamOne: 'WC-Argentina',
		scoreOne: 2,
		teamTwo: 'WC-Portugal',
		scoreTwo: 2
	},
	{
		id: '1741414487262',
		teamOne: 'WC-Argentina',
		scoreOne: 1,
		teamTwo: 'WC-Spain',
		scoreTwo: 1
	},
	{
		id: '1741414489690',
		teamOne: 'WC-Spain',
		scoreOne: 1,
		teamTwo: 'WC-Argentina',
		scoreTwo: 3
	},
	{
		id: '1741414533431',
		teamOne: 'WC-Italy',
		scoreOne: 6,
		teamTwo: 'WC-Germany',
		scoreTwo: 2
	},
	{
		id: '1741414537297',
		teamOne: 'WC-Germany',
		scoreOne: 2,
		teamTwo: 'WC-Italy',
		scoreTwo: 3
	},
	{
		id: '1741441399850',
		teamOne: 'WC-France',
		scoreOne: 5,
		teamTwo: 'WC-Germany',
		scoreTwo: 1
	},
	{
		id: '1741441427203',
		teamOne: 'WC-Germany',
		scoreOne: 1,
		teamTwo: 'WC-France',
		scoreTwo: 1
	}
];
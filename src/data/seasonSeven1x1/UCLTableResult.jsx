import Psv from '../../components/league/4star-teams/Psv';
import Stuttgart from '../../components/league/4star-teams/Stuttgart';
import Palermo from '../../components/league/4star-teams/Palermo';
import FulHam from '../../components/league/4star-teams/FulHam';
import PSG from '../../components/league/4star-teams/Psg';
import Fenerbahce from '../../components/league/4star-teams/Fenerbahce';

export const initialTeams = [
	{ id: 'UCL-Stuttgart', name: <Stuttgart />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'UCL-PSV', name: <Psv />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'UCL-Fenerbahce', name: <Fenerbahce />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
];

export const additionalTeams = [
	{ id: 'UCL-FulHam', name: <FulHam />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'UCL-Palermo', name: <Palermo />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'UCL-PSG', name: <PSG />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },

];


export const matchResults = [
	{
		id: '1733515975087',
		teamOne: 'UCL-PSG',
		scoreOne: 3,
		teamTwo: 'UCL-Palermo',
		scoreTwo: 1
	},
	{
		id: '1733517047672',
		teamOne: 'UCL-Palermo',
		scoreOne: 0,
		teamTwo: 'UCL-PSG',
		scoreTwo: 3
	},
	{
		id: '1733519455993',
		teamOne: 'UCL-PSV',
		scoreOne: 4,
		teamTwo: 'UCL-Fenerbahce',
		scoreTwo: 0
	},
	{
		id: '1733519458099',
		teamOne: 'UCL-Fenerbahce',
		scoreOne: 2,
		teamTwo: 'UCL-PSV',
		scoreTwo: 6
	},
	{
		id: '1733523733195',
		teamOne: 'UCL-Stuttgart',
		scoreOne: 1,
		teamTwo: 'UCL-Fenerbahce',
		scoreTwo: 1
	},
	{
		id: '1733523755608',
		teamOne: 'UCL-Fenerbahce',
		scoreOne: 2,
		teamTwo: 'UCL-Stuttgart',
		scoreTwo: 5
	},
	{
		id: '1733523885658',
		teamOne: 'UCL-FulHam',
		scoreOne: 3,
		teamTwo: 'UCL-PSG',
		scoreTwo: 4
	},
	{
		id: '1733523888140',
		teamOne: 'UCL-PSG',
		scoreOne: 3,
		teamTwo: 'UCL-FulHam',
		scoreTwo: 0
	},
	{
		id: '1733489532528',
		teamOne: 'UCL-FulHam',
		scoreOne: 1,
		teamTwo: 'UCL-Palermo',
		scoreTwo: 3
	},
	{
		id: '1733490508705',
		teamOne: 'UCL-Palermo',
		scoreOne: 3,
		teamTwo: 'UCL-FulHam',
		scoreTwo: 3
	},
	{
		id: '1733497102521',
		teamOne: 'UCL-Stuttgart',
		scoreOne: 6,
		teamTwo: 'UCL-PSV',
		scoreTwo: 0
	},
	{
		id: '1733497117562',
		teamOne: 'UCL-PSV',
		scoreOne: 3,
		teamTwo: 'UCL-Stuttgart',
		scoreTwo: 3
	},
];
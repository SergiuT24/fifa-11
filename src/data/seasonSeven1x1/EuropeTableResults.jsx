import Werder from '../../components/league/4star-teams/Werder';
import Sporting from '../../components/league/4star-teams/Sporting';
import Galatasaray from '../../components/league/4star-teams/Galatasaray';
import WestHam from '../../components/league/4star-teams/WestHam';
import Wolfsburg from '../../components/league/4star-teams/Wolfsburg';
import Lazio from '../../components/league/4star-teams/Lazio';

export const initialTeams = [
	{ id: 'EL-Lazio', name: <Lazio />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'EL-WestHam', name: <WestHam />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'EL-Wolfsburg', name: <Wolfsburg />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
];

export const additionalTeams = [
	{ id: 'EL-Sporting', name: <Sporting />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'EL-Galatasaray', name: <Galatasaray />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'EL-Werder', name: <Werder />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },

];

export const matchResults = [
	{
		id: '1733608248679',
		teamOne: 'EL-Lazio',
		scoreOne: 2,
		teamTwo: 'EL-WestHam',
		scoreTwo: 0
	},
	{
		id: '1733608253515',
		teamOne: 'EL-WestHam',
		scoreOne: 3,
		teamTwo: 'EL-Lazio',
		scoreTwo: 1
	},
	{
		id: '1733673213427',
		teamOne: 'EL-Sporting',
		scoreOne: 6,
		teamTwo: 'EL-Werder',
		scoreTwo: 1
	},
	{
		id: '1733673216124',
		teamOne: 'EL-Werder',
		scoreOne: 2,
		teamTwo: 'EL-Sporting',
		scoreTwo: 8
	},
	{
		id: '1733675779793',
		teamOne: 'EL-Galatasaray',
		scoreOne: 3,
		teamTwo: 'EL-Sporting',
		scoreTwo: 5
	},
	{
		id: '1733675794636',
		teamOne: 'EL-Sporting',
		scoreOne: 4,
		teamTwo: 'EL-Galatasaray',
		scoreTwo: 0
	},
	{
		id: '1733697779116',
		teamOne: 'EL-Lazio',
		scoreOne: 0,
		teamTwo: 'EL-Wolfsburg',
		scoreTwo: 4
	},
	{
		id: '1733697814954',
		teamOne: 'EL-Wolfsburg',
		scoreOne: 1,
		teamTwo: 'EL-Lazio',
		scoreTwo: 1
	},
	{
		id: '1733517423012',
		teamOne: 'EL-Galatasaray',
		scoreOne: 4,
		teamTwo: 'EL-Werder',
		scoreTwo: 0
	},
	{
		id: '1733517431133',
		teamOne: 'EL-Werder',
		scoreOne: 0,
		teamTwo: 'EL-Galatasaray',
		scoreTwo: 1
	},
	{
		id: '1733514707963',
		teamOne: 'EL-Wolfsburg',
		scoreOne: 2,
		teamTwo: 'EL-WestHam',
		scoreTwo: 2
	},
	{
		id: '1733514714414',
		teamOne: 'EL-WestHam',
		scoreOne: 0,
		teamTwo: 'EL-Wolfsburg',
		scoreTwo: 4
	},
];
import France from '../../components/league/national-teams/France'
import Brazil from '../../components/league/national-teams/Brazil'
import Holland from '../../components/league/national-teams/Holland'
import Spain from '../../components/league/national-teams/Spain'
import Uruguay from '../../components/league/national-teams/Uruguay'
import Russia from '../../components/league/national-teams/Russia'
import Croatia from '../../components/league/national-teams/Croatia'
import Turkey from '../../components/league/national-teams/Turkey'
import Germany from '../../components/league/national-teams/Germany'

export const initialTeams = [
	{ id: 'France', name: <France />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Brazil', name: <Brazil />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Holland', name: <Holland />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Spain', name: <Spain />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Uruguay', name: <Uruguay />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Russia', name: <Russia />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Croatia', name: <Croatia />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Turkey', name: <Turkey />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Germany', name: <Germany />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
];

export const matchResults = [
	{
		id: '1',
		teamOne: 'Turkey',
		scoreOne: 1,
		teamTwo: 'Croatia',
		scoreTwo: 3
	},
	{
		id: '2',
		teamOne: 'Croatia',
		scoreOne: 2,
		teamTwo: 'Turkey',
		scoreTwo: 2
	},
	{
		id: '3',
		teamOne: 'Croatia',
		scoreOne: 1,
		teamTwo: 'Brazil',
		scoreTwo: 3
	},
	{
		id: '4',
		teamOne: 'Brazil',
		scoreOne: 2,
		teamTwo: 'Croatia',
		scoreTwo: 0
	},
	{
		id: '5',
		teamOne: 'France',
		scoreOne: 3,
		teamTwo: 'Holland',
		scoreTwo: 0
	},
	{
		id: '6',
		teamOne: 'Holland',
		scoreOne: 0,
		teamTwo: 'France',
		scoreTwo: 6
	},
	{
		id: '7',
		teamOne: 'Brazil',
		scoreOne: 4,
		teamTwo: 'Turkey',
		scoreTwo: 4
	},
	{
		id: '8',
		teamOne: 'Turkey',
		scoreOne: 1,
		teamTwo: 'Brazil',
		scoreTwo: 2
	},
	{
		id: '11',
		teamOne: 'Spain',
		scoreOne: 4,
		teamTwo: 'Turkey',
		scoreTwo: 1
	},
	{
		id: '12',
		teamOne: 'Turkey',
		scoreOne: 3,
		teamTwo: 'Spain',
		scoreTwo: 1
	},
	{
		id: '15',
		teamOne: 'Turkey',
		scoreOne: 3,
		teamTwo: 'Uruguay',
		scoreTwo: 0
	},
	{
		id: '16',
		teamOne: 'Uruguay',
		scoreOne: 0,
		teamTwo: 'Turkey',
		scoreTwo: 7
	},
	{
		id: '20',
		teamOne: 'France',
		scoreOne: 5,
		teamTwo: 'Spain',
		scoreTwo: 1
	},
	{
		id: '21',
		teamOne: 'France',
		scoreOne: 6,
		teamTwo: 'Uruguay',
		scoreTwo: 1
	},
	{
		id: '22',
		teamOne: 'France',
		scoreOne: 5,
		teamTwo: 'Russia',
		scoreTwo: 1
	},
	{
		id: '23',
		teamOne: 'France',
		scoreOne: 5,
		teamTwo: 'Croatia',
		scoreTwo: 0
	},
	{
		id: '24',
		teamOne: 'France',
		scoreOne: 6,
		teamTwo: 'Turkey',
		scoreTwo: 2
	},
	{
		id: '25',
		teamOne: 'Brazil',
		scoreOne: 2,
		teamTwo: 'Holland',
		scoreTwo: 0
	},
	{
		id: '26',
		teamOne: 'Brazil',
		scoreOne: 3,
		teamTwo: 'Uruguay',
		scoreTwo: 1
	},
	{
		id: '27',
		teamOne: 'Brazil',
		scoreOne: 2,
		teamTwo: 'Russia',
		scoreTwo: 2
	},
	{
		id: '28',
		teamOne: 'Holland',
		scoreOne: 1,
		teamTwo: 'Brazil',
		scoreTwo: 6
	},
	{
		id: '29',
		teamOne: 'Holland',
		scoreOne: 1,
		teamTwo: 'Turkey',
		scoreTwo: 4
	},
	{
		id: '30',
		teamOne: 'Spain',
		scoreOne: 2,
		teamTwo: 'France',
		scoreTwo: 4
	},
	{
		id: '31',
		teamOne: 'Uruguay',
		scoreOne: 0,
		teamTwo: 'France',
		scoreTwo: 8
	},
	{
		id: '32',
		teamOne: 'Uruguay',
		scoreOne: 1,
		teamTwo: 'Brazil',
		scoreTwo: 6
	},
	{
		id: '33',
		teamOne: 'Uruguay',
		scoreOne: 1,
		teamTwo: 'Russia',
		scoreTwo: 4
	},
	{
		id: '35',
		teamOne: 'Russia',
		scoreOne: 6,
		teamTwo: 'France',
		scoreTwo: 5
	},
	{
		id: '36',
		teamOne: 'Russia',
		scoreOne: 6,
		teamTwo: 'Brazil',
		scoreTwo: 1
	},
	{
		id: '37',
		teamOne: 'Russia',
		scoreOne: 4,
		teamTwo: 'Uruguay',
		scoreTwo: 0
	},
	{
		id: '38',
		teamOne: 'Russia',
		scoreOne: 1,
		teamTwo: 'Croatia',
		scoreTwo: 0
	},
	{
		id: '39',
		teamOne: 'Russia',
		scoreOne: 4,
		teamTwo: 'Turkey',
		scoreTwo: 1
	},
	{
		id: '41',
		teamOne: 'Croatia',
		scoreOne: 1,
		teamTwo: 'France',
		scoreTwo: 1
	},
	{
		id: '42',
		teamOne: 'Croatia',
		scoreOne: 1,
		teamTwo: 'Russia',
		scoreTwo: 6
	},
	{
		id: '44',
		teamOne: 'Turkey',
		scoreOne: 2,
		teamTwo: 'France',
		scoreTwo: 2
	},
	{
		id: '45',
		teamOne: 'Turkey',
		scoreOne: 5,
		teamTwo: 'Holland',
		scoreTwo: 0
	},
	{
		id: '46',
		teamOne: 'Turkey',
		scoreOne: 2,
		teamTwo: 'Russia',
		scoreTwo: 5
	},
	{
		id: '47',
		teamOne: 'Brazil',
		scoreOne: 1,
		teamTwo: 'France',
		scoreTwo: 3
	},
	{
		id: '48',
		teamOne: 'France',
		scoreOne: 4,
		teamTwo: 'Brazil',
		scoreTwo: 4
	},
	{
		id: '49',
		teamOne: 'Russia',
		scoreOne: 6,
		teamTwo: 'Spain',
		scoreTwo: 0
	},
	{
		id: '50',
		teamOne: 'Spain',
		scoreOne: 0,
		teamTwo: 'Russia',
		scoreTwo: 3
	},
	{
		id: '51',
		teamOne: 'Spain',
		scoreOne: 5,
		teamTwo: 'Uruguay',
		scoreTwo: 0
	},
	{
		id: '52',
		teamOne: 'Uruguay',
		scoreOne: 0,
		teamTwo: 'Spain',
		scoreTwo: 2
	},
	{
		id: '53',
		teamOne: 'Brazil',
		scoreOne: 4,
		teamTwo: 'Spain',
		scoreTwo: 1
	},
	{
		id: '54',
		teamOne: 'Spain',
		scoreOne: 1,
		teamTwo: 'Brazil',
		scoreTwo: 5
	},
	{
		id: '55',
		teamOne: 'Germany',
		scoreOne: 3,
		teamTwo: 'Uruguay',
		scoreTwo: 0
	},
	{
		id: '56',
		teamOne: 'Uruguay',
		scoreOne: 0,
		teamTwo: 'Germany',
		scoreTwo: 2
	},
	{
		id: '57',
		teamOne: 'Turkey',
		scoreOne: 3,
		teamTwo: 'Germany',
		scoreTwo: 0
	},
	{
		id: '58',
		teamOne: 'Germany',
		scoreOne: 2,
		teamTwo: 'Turkey',
		scoreTwo: 4
	},
	{
		id: '59',
		teamOne: 'Germany',
		scoreOne: 1,
		teamTwo: 'Croatia',
		scoreTwo: 0
	},
	{
		id: '60',
		teamOne: 'Croatia',
		scoreOne: 1,
		teamTwo: 'Germany',
		scoreTwo: 1
	},
	{
		id: '61',
		teamOne: 'Russia',
		scoreOne: 4,
		teamTwo: 'Germany',
		scoreTwo: 1
	},
	{
		id: '62',
		teamOne: 'Germany',
		scoreOne: 2,
		teamTwo: 'Russia',
		scoreTwo: 2
	},
	{
		id: '63',
		teamOne: 'Russia',
		scoreOne: 6,
		teamTwo: 'Holland',
		scoreTwo: 1
	},
	{
		id: '64',
		teamOne: 'Holland',
		scoreOne: 2,
		teamTwo: 'Russia',
		scoreTwo: 6
	},
	{
		id: '1731712208604',
		teamOne: 'Spain',
		scoreOne: 3,
		teamTwo: 'Croatia',
		scoreTwo: 2
	},
	{
		id: '1731712249774',
		teamOne: 'Croatia',
		scoreOne: 6,
		teamTwo: 'Spain',
		scoreTwo: 4
	},
	{
		id: '1731750813515',
		teamOne: 'Croatia',
		scoreOne: 6,
		teamTwo: 'Uruguay',
		scoreTwo: 2
	},
	{
		id: '1731750850007',
		teamOne: 'Uruguay',
		scoreOne: 1,
		teamTwo: 'Croatia',
		scoreTwo: 8
	},
	{
		id: '1731781229763',
		teamOne: 'Croatia',
		scoreOne: 3,
		teamTwo: 'Holland',
		scoreTwo: 0
	},
	{
		id: '1731781277186',
		teamOne: 'Holland',
		scoreOne: 0,
		teamTwo: 'Croatia',
		scoreTwo: 3
	},
	{
		id: '1731783225078',
		teamOne: 'Brazil',
		scoreOne: 2,
		teamTwo: 'Germany',
		scoreTwo: 3
	},
	{
		id: '1731783388603',
		teamOne: 'Germany',
		scoreOne: 1,
		teamTwo: 'Brazil',
		scoreTwo: 4
	},
	{
		id: '1731783545523',
		teamOne: 'Germany',
		scoreOne: 2,
		teamTwo: 'France',
		scoreTwo: 2
	},
	{
		id: '1731783769723',
		teamOne: 'France',
		scoreOne: 5,
		teamTwo: 'Germany',
		scoreTwo: 3
	},
	{
		id: '1731783814521',
		teamOne: 'Germany',
		scoreOne: 1,
		teamTwo: 'Spain',
		scoreTwo: 1
	},
	{
		id: '1731783819322',
		teamOne: 'Spain',
		scoreOne: 2,
		teamTwo: 'Germany',
		scoreTwo: 2
	},
	{
		id: '1731851015617',
		teamOne: 'Uruguay',
		scoreOne: 1,
		teamTwo: 'Holland',
		scoreTwo: 3
	},
	{
		id: '1731851034811',
		teamOne: 'Holland',
		scoreOne: 2,
		teamTwo: 'Uruguay',
		scoreTwo: 1
	},
	{
		id: '1731869346562',
		teamOne: 'Germany',
		scoreOne: 3,
		teamTwo: 'Holland',
		scoreTwo: 0
	},
	{
		id: '1731869351643',
		teamOne: 'Holland',
		scoreOne: 0,
		teamTwo: 'Germany',
		scoreTwo: 3
	},
	{
		id: '1731869358937',
		teamOne: 'Spain',
		scoreOne: 3,
		teamTwo: 'Holland',
		scoreTwo: 0
	},
	{
		id: '1731869363227',
		teamOne: 'Holland',
		scoreOne: 0,
		teamTwo: 'Spain',
		scoreTwo: 3
	}
]

import Psv from '../../components/league/4star-teams/Psv';
import Stuttgart from '../../components/league/4star-teams/Stuttgart';
import Palermo from '../../components/league/4star-teams/Palermo';
import FulHam from '../../components/league/4star-teams/FulHam';
import Fenerbahce from '../../components/league/4star-teams/Fenerbahce';
import WestHam from '../../components/league/4star-teams/WestHam';
import Psg from '../../components/league/4star-teams/Psg';
import Galatasaray from '../../components/league/4star-teams/Galatasaray';
import Werder from '../../components/league/4star-teams/Werder';
import Sporting from '../../components/league/4star-teams/Sporting';
import Wolfsburg from '../../components/league/4star-teams/Wolfsburg';
import Lazio from '../../components/league/4star-teams/Lazio';


export const initialTeams = [
	{ id: 'Palermo', name: <Palermo />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Sporting', name: <Sporting />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'PSV', name: <Psv />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Stuttgart', name: <Stuttgart />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'FulHam', name: <FulHam />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Galatasaray', name: <Galatasaray />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
];

export const additionalTeams = [
	{ id: 'Fenerbahce', name: <Fenerbahce />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'WestHam', name: <WestHam />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'PSG', name: <Psg />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Werder', name: <Werder />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Wolfsburg', name: <Wolfsburg />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Lazio', name: <Lazio />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
];


export const matchResults = [
	{
		id: '1733163309764',
		teamOne: 'PSG',
		scoreOne: 6,
		teamTwo: 'Werder',
		scoreTwo: 1
	},
	{
		id: '1733163312453',
		teamOne: 'Werder',
		scoreOne: 0,
		teamTwo: 'PSG',
		scoreTwo: 1
	},
	{
		id: '1733164500949',
		teamOne: 'Palermo',
		scoreOne: 3,
		teamTwo: 'Galatasaray',
		scoreTwo: 2
	},
	{
		id: '1733167642863',
		teamOne: 'Galatasaray',
		scoreOne: 0,
		teamTwo: 'Palermo',
		scoreTwo: 4
	},
	{
		id: '1733167875903',
		teamOne: 'Sporting',
		scoreOne: 1,
		teamTwo: 'FulHam',
		scoreTwo: 2
	},
	{
		id: '1733167900611',
		teamOne: 'FulHam',
		scoreOne: 5,
		teamTwo: 'Sporting',
		scoreTwo: 2
	},
	{
		id: '1733167942105',
		teamOne: 'WestHam',
		scoreOne: 0,
		teamTwo: 'Werder',
		scoreTwo: 0
	},
	{
		id: '1733167956293',
		teamOne: 'Werder',
		scoreOne: 2,
		teamTwo: 'WestHam',
		scoreTwo: 1
	},
	{
		id: '1733168006758',
		teamOne: 'PSG',
		scoreOne: 4,
		teamTwo: 'Napoli',
		scoreTwo: 0
	},
	{
		id: '1733168014735',
		teamOne: 'Napoli',
		scoreOne: 0,
		teamTwo: 'PSG',
		scoreTwo: 3
	},
	{
		id: '1733168044265',
		teamOne: 'PSV',
		scoreOne: 3,
		teamTwo: 'Palermo',
		scoreTwo: 2
	},
	{
		id: '1733168051650',
		teamOne: 'Palermo',
		scoreOne: 5,
		teamTwo: 'PSV',
		scoreTwo: 0
	},
	{
		id: '1733169860124',
		teamOne: 'PSV',
		scoreOne: 5,
		teamTwo: 'Galatasaray',
		scoreTwo: 0
	},
	{
		id: '1733169867899',
		teamOne: 'Galatasaray',
		scoreOne: 0,
		teamTwo: 'PSV',
		scoreTwo: 8
	},
	{
		id: '1733172385425',
		teamOne: 'Stuttgart',
		scoreOne: 6,
		teamTwo: 'PSV',
		scoreTwo: 1
	},
	{
		id: '1733172394650',
		teamOne: 'PSV',
		scoreOne: 2,
		teamTwo: 'Stuttgart',
		scoreTwo: 4
	},
	{
		id: '1733176986282',
		teamOne: 'Stuttgart',
		scoreOne: 2,
		teamTwo: 'Palermo',
		scoreTwo: 2
	},
	{
		id: '1733176996147',
		teamOne: 'Palermo',
		scoreOne: 1,
		teamTwo: 'Stuttgart',
		scoreTwo: 3
	},
	{
		id: '1733178162481',
		teamOne: 'WestHam',
		scoreOne: 2,
		teamTwo: 'PSG',
		scoreTwo: 2
	},
	{
		id: '1733229993901',
		teamOne: 'Fenerbahce',
		scoreOne: 1,
		teamTwo: 'Werder',
		scoreTwo: 2
	},
	{
		id: '1733230008877',
		teamOne: 'Werder',
		scoreOne: 1,
		teamTwo: 'Fenerbahce',
		scoreTwo: 5
	},
	{
		id: '1733241221191',
		teamOne: 'PSV',
		scoreOne: 4,
		teamTwo: 'FulHam',
		scoreTwo: 3
	},
	{
		id: '1733241230387',
		teamOne: 'FulHam',
		scoreOne: 1,
		teamTwo: 'PSV',
		scoreTwo: 3
	},
	{
		id: '1733254880279',
		teamOne: 'Sporting',
		scoreOne: 2,
		teamTwo: 'PSV',
		scoreTwo: 7
	},
	{
		id: '1733254903693',
		teamOne: 'PSV',
		scoreOne: 0,
		teamTwo: 'Sporting',
		scoreTwo: 4
	},
	{
		id: '1733256559987',
		teamOne: 'Sporting',
		scoreOne: 7,
		teamTwo: 'Galatasaray',
		scoreTwo: 1
	},
	{
		id: '1733256569764',
		teamOne: 'Galatasaray',
		scoreOne: 1,
		teamTwo: 'Sporting',
		scoreTwo: 3
	},
	{
		id: '1733257334593',
		teamOne: 'WestHam',
		scoreOne: 0,
		teamTwo: 'Fenerbahce',
		scoreTwo: 0
	},
	{
		id: '1733257353319',
		teamOne: 'Fenerbahce',
		scoreOne: 1,
		teamTwo: 'WestHam',
		scoreTwo: 1
	},
	{
		id: '1733260678452',
		teamOne: 'Lazio',
		scoreOne: 5,
		teamTwo: 'Werder',
		scoreTwo: 2
	},
	{
		id: '1733260729439',
		teamOne: 'Werder',
		scoreOne: 1,
		teamTwo: 'Lazio',
		scoreTwo: 3
	},
	{
		id: '1733263394514',
		teamOne: 'FulHam',
		scoreOne: 5,
		teamTwo: 'Palermo',
		scoreTwo: 1
	},
	{
		id: '1733263404559',
		teamOne: 'Palermo',
		scoreOne: 5,
		teamTwo: 'FulHam',
		scoreTwo: 6
	},
	{
		id: '1733321051564',
		teamOne: 'Stuttgart',
		scoreOne: 1,
		teamTwo: 'FulHam',
		scoreTwo: 2
	},
	{
		id: '1733321081514',
		teamOne: 'FulHam',
		scoreOne: 3,
		teamTwo: 'Stuttgart',
		scoreTwo: 2
	},
	{
		id: '1733334954536',
		teamOne: 'Galatasaray',
		scoreOne: 1,
		teamTwo: 'FulHam',
		scoreTwo: 0
	},
	{
		id: '1733334965292',
		teamOne: 'FulHam',
		scoreOne: 1,
		teamTwo: 'Galatasaray',
		scoreTwo: 1
	},
	{
		id: '1733338321788',
		teamOne: 'Stuttgart',
		scoreOne: 2,
		teamTwo: 'Galatasaray',
		scoreTwo: 0
	},
	{
		id: '1733338340055',
		teamOne: 'Galatasaray',
		scoreOne: 1,
		teamTwo: 'Stuttgart',
		scoreTwo: 3
	},
	{
		id: '1733338987662',
		teamOne: 'Stuttgart',
		scoreOne: 9,
		teamTwo: 'Sporting',
		scoreTwo: 5
	},
	{
		id: '1733340186077',
		teamOne: 'Sporting',
		scoreOne: 1,
		teamTwo: 'Stuttgart',
		scoreTwo: 4
	},
	{
		id: '1733342062679',
		teamOne: 'Lazio',
		scoreOne: 2,
		teamTwo: 'Fenerbahce',
		scoreTwo: 2
	},
	{
		id: '1733342065120',
		teamOne: 'Fenerbahce',
		scoreOne: 4,
		teamTwo: 'Lazio',
		scoreTwo: 2
	},
	{
		id: '1733346714590',
		teamOne: 'WestHam',
		scoreOne: 2,
		teamTwo: 'Lazio',
		scoreTwo: 4
	},
	{
		id: '1733346731218',
		teamOne: 'Lazio',
		scoreOne: 1,
		teamTwo: 'WestHam',
		scoreTwo: 1
	},
	{
		id: '1733402872599',
		teamOne: 'Fenerbahce',
		scoreOne: 4,
		teamTwo: 'PSG',
		scoreTwo: 1
	},
	{
		id: '1733402876042',
		teamOne: 'PSG',
		scoreOne: 1,
		teamTwo: 'Fenerbahce',
		scoreTwo: 1
	},
	{
		id: '1733426119830',
		teamOne: 'Wolfsburg',
		scoreOne: 0,
		teamTwo: 'Werder',
		scoreTwo: 3
	},
	{
		id: '1733426129648',
		teamOne: 'Werder',
		scoreOne: 3,
		teamTwo: 'Wolfsburg',
		scoreTwo: 0
	},
	{
		id: '1733426140489',
		teamOne: 'Lazio',
		scoreOne: 3,
		teamTwo: 'Wolfsburg',
		scoreTwo: 0
	},
	{
		id: '1733426150051',
		teamOne: 'Wolfsburg',
		scoreOne: 0,
		teamTwo: 'Lazio',
		scoreTwo: 3
	},
	{
		id: '1733426170394',
		teamOne: 'Fenerbahce',
		scoreOne: 3,
		teamTwo: 'Wolfsburg',
		scoreTwo: 0
	},
	{
		id: '1733426177244',
		teamOne: 'Wolfsburg',
		scoreOne: 0,
		teamTwo: 'Fenerbahce',
		scoreTwo: 3
	},
	{
		id: '1733426206986',
		teamOne: 'PSG',
		scoreOne: 3,
		teamTwo: 'Wolfsburg',
		scoreTwo: 0
	},
	{
		id: '1733426215309',
		teamOne: 'Wolfsburg',
		scoreOne: 0,
		teamTwo: 'PSG',
		scoreTwo: 3
	},
	{
		id: '1733426231290',
		teamOne: 'WestHam',
		scoreOne: 3,
		teamTwo: 'Wolfsburg',
		scoreTwo: 0
	},
	{
		id: '1733426240408',
		teamOne: 'Wolfsburg',
		scoreOne: 0,
		teamTwo: 'WestHam',
		scoreTwo: 3
	},
	{
		id: '1733435483010',
		teamOne: 'PSG',
		scoreOne: 3,
		teamTwo: 'WestHam',
		scoreTwo: 1
	},
	{
		id: '1733514205794',
		teamOne: 'Lazio',
		scoreOne: 0,
		teamTwo: 'PSG',
		scoreTwo: 3
	},
	{
		id: '1733514213780',
		teamOne: 'PSG',
		scoreOne: 4,
		teamTwo: 'Lazio',
		scoreTwo: 2
	},
	{
		id: '1733522910982',
		teamOne: 'Palerno',
		scoreOne: 2,
		teamTwo: 'Sporting',
		scoreTwo: 2
	},
	{
		id: '1733523374015',
		teamOne: 'Sporting',
		scoreOne: 5,
		teamTwo: 'Palermo',
		scoreTwo: 4
	},
	{
		id: '1733523388792',
		teamOne: 'Palermo',
		scoreOne: 5,
		teamTwo: 'Sporting',
		scoreTwo: 4
	},
]

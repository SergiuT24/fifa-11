import RealMadrid from '../../components/league/teams/RealMadrid'
import ManchesterUnited from '../../components/league/teams/ManchesterUnited';
import Barcelona from '../../components/league/teams/Barcelona';
import Anji from '../../components/league/teams/Anji';
import Celtic from '../../components/league/teams/Celtic';
import Start from '../../components/league/teams/Start';
import CSKA from '../../components/league/4star-teams/Cska';
import AcMilan from '../../components/league/teams/AcMilan';
import Arsenal from '../../components/league/teams/Arsenal';
import Zenit from '../../components/league/4star-teams/Zenit';


export const initialTeams = [
	{ id: 'Arsenal', name: <Arsenal />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Anji', name: <Anji />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Barcelona', name: <Barcelona />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Celtic', name: <Celtic />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Real-Madrid', name: <RealMadrid />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Start', name: <Start />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'MU', name: <ManchesterUnited />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'CSKA', name: <CSKA />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Milan', name: <AcMilan />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Zenit', name: <Zenit />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
];

export const additionalTeams = [
	{ id: 'empty', name: 'empty', mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
]

export const matchResults = [
	{
		id: '1743071707706',
		teamOne: 'Arsenal',
		scoreOne: 1,
		teamTwo: 'Real-Madrid',
		scoreTwo: 4
	},
	{
		id: '1743071718119',
		teamOne: 'Real-Madrid',
		scoreOne: 11,
		teamTwo: 'Arsenal',
		scoreTwo: 1
	},
	{
		id: '1743100175430',
		teamOne: 'Anji',
		scoreOne: 6,
		teamTwo: 'Arsenal',
		scoreTwo: 2
	},
	{
		id: '1743100184608',
		teamOne: 'Arsenal',
		scoreOne: 1,
		teamTwo: 'Anji',
		scoreTwo: 10
	},
	{
		id: '1743105186097',
		teamOne: 'Barcelona',
		scoreOne: 1,
		teamTwo: 'Real-Madrid',
		scoreTwo: 4
	},
	{
		id: '1743105195600',
		teamOne: 'Real-Madrid',
		scoreOne: 4,
		teamTwo: 'Barcelona',
		scoreTwo: 2
	},
	{
		id: '1743174333084',
		teamOne: 'Anji',
		scoreOne: 2,
		teamTwo: 'MU',
		scoreTwo: 2
	},
	{
		id: '1743174335542',
		teamOne: 'MU',
		scoreOne: 6,
		teamTwo: 'Anji',
		scoreTwo: 7
	},
	{
		id: '1743174372829',
		teamOne: 'MU',
		scoreOne: 3,
		teamTwo: 'Real-Madrid',
		scoreTwo: 4
	},
	{
		id: '1743174387592',
		teamOne: 'Real-Madrid',
		scoreOne: 2,
		teamTwo: 'MU',
		scoreTwo: 6
	},
	{
		id: '1743174420817',
		teamOne: 'Milan',
		scoreOne: 1,
		teamTwo: 'Arsenal',
		scoreTwo: 3
	},
	{
		id: '1743174423226',
		teamOne: 'Arsenal',
		scoreOne: 3,
		teamTwo: 'Milan',
		scoreTwo: 0
	},
	{
		id: '1743174473478',
		teamOne: 'Anji',
		scoreOne: 5,
		teamTwo: 'CSKA',
		scoreTwo: 3
	},
	{
		id: '1743174477419',
		teamOne: 'CSKA',
		scoreOne: 7,
		teamTwo: 'Anji',
		scoreTwo: 3
	},
	{
		id: '1743174517733',
		teamOne: 'MU',
		scoreOne: 2,
		teamTwo: 'Barcelona',
		scoreTwo: 3
	},
	{
		id: '1743174520637',
		teamOne: 'Barcelona',
		scoreOne: 0,
		teamTwo: 'MU',
		scoreTwo: 3
	},
	{
		id: '1743174553600',
		teamOne: 'Arsenal',
		scoreOne: 2,
		teamTwo: 'Celtic',
		scoreTwo: 3
	},
	{
		id: '1743174556116',
		teamOne: 'Celtic',
		scoreOne: 8,
		teamTwo: 'Arsenal',
		scoreTwo: 1
	},
	{
		id: '1743174612548',
		teamOne: 'Anji',
		scoreOne: 2,
		teamTwo: 'Real-Madrid',
		scoreTwo: 0
	},
	{
		id: '1743174620794',
		teamOne: 'Real-Madrid',
		scoreOne: 4,
		teamTwo: 'Anji',
		scoreTwo: 2
	},
	{
		id: '1743174638354',
		teamOne: 'Arsenal',
		scoreOne: 5,
		teamTwo: 'MU',
		scoreTwo: 5
	},
	{
		id: '1743174653243',
		teamOne: 'MU',
		scoreOne: 3,
		teamTwo: 'Arsenal',
		scoreTwo: 1
	},
	{
		id: '1743174684002',
		teamOne: 'Celtic',
		scoreOne: 2,
		teamTwo: 'CSKA',
		scoreTwo: 5
	},
	{
		id: '1743174686403',
		teamOne: 'CSKA',
		scoreOne: 3,
		teamTwo: 'Celtic',
		scoreTwo: 2
	},
	{
		id: '1743174715109',
		teamOne: 'CSKA',
		scoreOne: 6,
		teamTwo: 'Arsenal',
		scoreTwo: 5
	},
	{
		id: '1743174728239',
		teamOne: 'Arsenal',
		scoreOne: 2,
		teamTwo: 'CSKA',
		scoreTwo: 8
	},
	{
		id: '1743175233909',
		teamOne: 'CSKA',
		scoreOne: 3,
		teamTwo: 'Zenit',
		scoreTwo: 0
	},
	{
		id: '1743175240037',
		teamOne: 'Zenit',
		scoreOne: 0,
		teamTwo: 'CSKA',
		scoreTwo: 3
	},
	{
		id: '1743175941139',
		teamOne: 'Start',
		scoreOne: 0,
		teamTwo: 'Zenit',
		scoreTwo: 3
	},
	{
		id: '1743175946624',
		teamOne: 'Zenit',
		scoreOne: 3,
		teamTwo: 'Start',
		scoreTwo: 0
	},
	{
		id: '1743188141142',
		teamOne: 'Celtic',
		scoreOne: 1,
		teamTwo: 'Real-Madrid',
		scoreTwo: 1
	},
	{
		id: '1743188149522',
		teamOne: 'Real-Madrid',
		scoreOne: 2,
		teamTwo: 'Celtic',
		scoreTwo: 4
	},
	{
		id: '1743193622353',
		teamOne: 'Celtic',
		scoreOne: 1,
		teamTwo: 'MU',
		scoreTwo: 6
	},
	{
		id: '1743193629428',
		teamOne: 'MU',
		scoreOne: 0,
		teamTwo: 'Celtic',
		scoreTwo: 6
	},
	{
		id: '1743193656424',
		teamOne: 'Barcelona',
		scoreOne: 3,
		teamTwo: 'Celtic',
		scoreTwo: 2
	},
	{
		id: '1743193664483',
		teamOne: 'Celtic',
		scoreOne: 4,
		teamTwo: 'Barcelona',
		scoreTwo: 2
	},
	{
		id: '1743238856878',
		teamOne: 'Anji',
		scoreOne: 5,
		teamTwo: 'Milan',
		scoreTwo: 2
	},
	{
		id: '1743238859154',
		teamOne: 'Milan',
		scoreOne: 2,
		teamTwo: 'Anji',
		scoreTwo: 8
	},
	{
		id: '1743238911662',
		teamOne: 'MU',
		scoreOne: 5,
		teamTwo: 'Milan',
		scoreTwo: 3
	},
	{
		id: '1743238913952',
		teamOne: 'Milan',
		scoreOne: 2,
		teamTwo: 'MU',
		scoreTwo: 1
	},
	{
		id: '1743238952920',
		teamOne: 'Barcelona',
		scoreOne: 4,
		teamTwo: 'Milan',
		scoreTwo: 1
	},
	{
		id: '1743238956349',
		teamOne: 'Milan',
		scoreOne: 4,
		teamTwo: 'Barcelona',
		scoreTwo: 2
	},
	{
		id: '1743238984116',
		teamOne: 'Arsenal',
		scoreOne: 2,
		teamTwo: 'Barcelona',
		scoreTwo: 1
	},
	{
		id: '1743238986451',
		teamOne: 'Barcelona',
		scoreOne: 2,
		teamTwo: 'Arsenal',
		scoreTwo: 3
	},
	{
		id: '3124',
		teamOne: 'Anji',
		scoreOne: 4,
		teamTwo: 'Barcelona',
		scoreTwo: 1
	},
	{
		id: '1251',
		teamOne: 'Barcelona',
		scoreOne: 7,
		teamTwo: 'Anji',
		scoreTwo: 1
	},
	{
		id: '1345',
		teamOne: 'Celtic',
		scoreOne: 2,
		teamTwo: 'Anji',
		scoreTwo: 5
	},
	{
		id: '1345532',
		teamOne: 'Anji',
		scoreOne: 3,
		teamTwo: 'Celtic',
		scoreTwo: 2
	},
	{
		id: '1345532',
		teamOne: 'Milan',
		scoreOne: 4,
		teamTwo: 'Celtic',
		scoreTwo: 8
	},
	{
		id: '13455322314',
		teamOne: 'Celtic',
		scoreOne: 5,
		teamTwo: 'Milan',
		scoreTwo: 1
	},
	{
		id: '3235125',
		teamOne: 'Arsenal',
		scoreOne: 3,
		teamTwo: 'Zenit',
		scoreTwo: 1
	},
	{
		id: '235322314',
		teamOne: 'Zenit',
		scoreOne: 0,
		teamTwo: 'Arsenal',
		scoreTwo: 4
	},
	{
		id: '63474673',
		teamOne: 'Anji',
		scoreOne: 5,
		teamTwo: 'Zenit',
		scoreTwo: 0
	},
	{
		id: '2345272',
		teamOne: 'Zenit',
		scoreOne: 0,
		teamTwo: 'Anji',
		scoreTwo: 6
	},
	{
		id: '63474673',
		teamOne: 'Milan',
		scoreOne: 6,
		teamTwo: 'Zenit',
		scoreTwo: 2
	},
	{
		id: '2345272',
		teamOne: 'Zenit',
		scoreOne: 0,
		teamTwo: 'Milan',
		scoreTwo: 4
	},
]

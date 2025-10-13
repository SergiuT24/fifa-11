import RealMadrid from '../../components/league/teams/RealMadrid';
import Barcelona from '../../components/league/teams/Barcelona';
import CSKA from '../../components/league/4star-teams/Cska';
import Inter from '../../components/league/teams/Inter';
import Anji from '../../components/league/teams/Anji';
import Valencia from '../../components/league/teams/Valencia';
import Chelsea from '../../components/league/teams/Chelsea';
import ACMilan from '../../components/league/teams/AcMilan';
import FSVMainz from '../../components/league/teams/FSVMainz';
import NewcastleUnited from '../../components/league/teams/NewcastleUnited';
import BocaJuniors from '../../components/league/teams/BocaJuniors';
import WestBrom from '../../components/league/teams/WestBrom';


export const initialTeams = [
	{ id: 'RealMadrid', name: <RealMadrid />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'CSKA', name: < CSKA />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Anji', name: <Anji />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Valencia', name: < Valencia />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Barcelona', name: < Barcelona />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'WestBrom', name: < WestBrom />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
];

export const additionalTeams = [
	{ id: 'ACMilan', name: <ACMilan />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Inter', name: < Inter />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'BocaJuniors', name: <BocaJuniors />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'NewcastleUnited', name: <NewcastleUnited />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'FSVMainz', name: < FSVMainz />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Chelsea', name: < Chelsea />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
]

export const matchResults = [
	{ id: '2', teamOne: 'Barcelona', scoreOne: 5, teamTwo: 'Anji', scoreTwo: 1 },
	{ id: '1', teamOne: 'Anji', scoreOne: 5, teamTwo: 'Barcelona', scoreTwo: 1 },
	{ id: '1', teamOne: 'RealMadrid', scoreOne: 7, teamTwo: 'Barcelona', scoreTwo: 0 },
	{ id: '2', teamOne: 'Barcelona', scoreOne: 0, teamTwo: 'RealMadrid', scoreTwo: 1 },
	{ id: '2', teamOne: 'WestBrom', scoreOne: 0, teamTwo: 'RealMadrid', scoreTwo: 3 },
	{ id: '1', teamOne: 'RealMadrid', scoreOne: 1, teamTwo: 'WestBrom', scoreTwo: 3 },
	{ id: '2', teamOne: 'WestBrom', scoreOne: 2, teamTwo: 'CSKA', scoreTwo: 0 },
	{ id: '1', teamOne: 'CSKA', scoreOne: 2, teamTwo: 'WestBrom', scoreTwo: 1 },
	{ id: '2', teamOne: 'WestBrom', scoreOne: 4, teamTwo: 'Anji', scoreTwo: 3 },
	{ id: '1', teamOne: 'Anji', scoreOne: 4, teamTwo: 'WestBrom', scoreTwo: 1 },
]

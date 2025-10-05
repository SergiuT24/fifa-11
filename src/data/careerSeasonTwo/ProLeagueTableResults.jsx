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
	{ id: 'Inter', name: < Inter />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Anji', name: <Anji />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Valencia', name: < Valencia />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'ACMilan', name: <ACMilan />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
];

export const additionalTeams = [
	{ id: 'BocaJuniors', name: <BocaJuniors />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'NewcastleUnited', name: <NewcastleUnited />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'FSVMainz', name: < FSVMainz />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Barcelona', name: < Barcelona />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Chelsea', name: < Chelsea />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'WestBrom', name: < WestBrom />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
]

export const matchResults = [
	{ id: '1', teamOne: 'Anji', scoreOne: 2, teamTwo: 'RealMadrid', scoreTwo: 1 },
	{ id: '2', teamOne: 'RealMadrid', scoreOne: 3, teamTwo: 'Anji', scoreTwo: 0 },
	{ id: '3', teamOne: 'CSKA', scoreOne: 4, teamTwo: 'RealMadrid', scoreTwo: 2 },
	{ id: '4', teamOne: 'RealMadrid', scoreOne: 6, teamTwo: 'CSKA', scoreTwo: 3 },
	{ id: '5', teamOne: 'Valencia', scoreOne: 6, teamTwo: 'RealMadrid', scoreTwo: 4 },
	{ id: '6', teamOne: 'CSKA', scoreOne: 4, teamTwo: 'Anji', scoreTwo: 0 },
	{ id: '7', teamOne: 'Anji', scoreOne: 2, teamTwo: 'CSKA', scoreTwo: 4 },
	{ id: '8', teamOne: 'Valencia', scoreOne: 1, teamTwo: 'CSKA', scoreTwo: 4 },
	{ id: '9', teamOne: 'CSKA', scoreOne: 3, teamTwo: 'Valencia', scoreTwo: 1 },
	{ id: '10', teamOne: 'Anji', scoreOne: 5, teamTwo: 'Valencia', scoreTwo: 0 },
	{ id: '11', teamOne: 'Valencia', scoreOne: 1, teamTwo: 'Anji', scoreTwo: 3 },
	{ id: '12', teamOne: 'RealMadrid', scoreOne: 4, teamTwo: 'Valencia', scoreTwo: 2 },
	{ id: '13', teamOne: 'RealMadrid', scoreOne: 7, teamTwo: 'ACMilan', scoreTwo: 2 },
	{ id: '14', teamOne: 'ACMilan', scoreOne: 0, teamTwo: 'RealMadrid', scoreTwo: 3 },
	{ id: '15', teamOne: 'RealMadrid', scoreOne: 3, teamTwo: 'Inter', scoreTwo: 1 },
	{ id: '16', teamOne: 'Inter', scoreOne: 3, teamTwo: 'RealMadrid', scoreTwo: 3 },
	{ id: '17', teamOne: 'Anji', scoreOne: 0, teamTwo: 'Inter', scoreTwo: 3 },
	{ id: '18', teamOne: 'Inter', scoreOne: 3, teamTwo: 'Anji', scoreTwo: 0 },
	{ id: '19', teamOne: 'Barcelona', scoreOne: 1, teamTwo: 'Chelsea', scoreTwo: 1 },
	{ id: '20', teamOne: 'Chelsea', scoreOne: 1, teamTwo: 'Barcelona', scoreTwo: 2 },
	{ id: '21', teamOne: 'BocaJuniors', scoreOne: 1, teamTwo: 'WestBrom', scoreTwo: 4 },
	{ id: '22', teamOne: 'WestBrom', scoreOne: 5, teamTwo: 'BocaJuniors', scoreTwo: 2 },
	{ id: '23', teamOne: 'BocaJuniors', scoreOne: 0, teamTwo: 'Barcelona', scoreTwo: 13 },
	{ id: '24', teamOne: 'Barcelona', scoreOne: 3, teamTwo: 'BocaJuniors', scoreTwo: 1 },
	{ id: '25', teamOne: 'Barcelona', scoreOne: 1, teamTwo: 'WestBrom', scoreTwo: 1 },
	{ id: '26', teamOne: 'WestBrom', scoreOne: 1, teamTwo: 'Barcelona', scoreTwo: 2 },
	{ id: '26', teamOne: 'WestBrom', scoreOne: 6, teamTwo: 'Chelsea', scoreTwo: 1 },
	{ id: '25', teamOne: 'Chelsea', scoreOne: 3, teamTwo: 'WestBrom', scoreTwo: 1 },
	{ id: '26', teamOne: 'NewcastleUnited', scoreOne: 2, teamTwo: 'Barcelona', scoreTwo: 3 },
	{ id: '25', teamOne: 'Barcelona', scoreOne: 4, teamTwo: 'NewcastleUnited', scoreTwo: 1 },
]

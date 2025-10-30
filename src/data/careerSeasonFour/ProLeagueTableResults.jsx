import RealMadrid from '../../components/league/teams/RealMadrid';
import Barcelona from '../../components/league/teams/Barcelona';
import CSKA from '../../components/league/4star-teams/Cska';
import Inter from '../../components/league/teams/Inter';
import Anji from '../../components/league/teams/Anji';
import Valencia from '../../components/league/teams/Valencia';
import Chelsea from '../../components/league/teams/Chelsea';
import ACMilan from '../../components/league/teams/AcMilan';
import FCRostov from '../../components/league/teams/FCRostov';
import NewcastleUnited from '../../components/league/teams/NewcastleUnited';
import Zenit from '../../components/league/teams/Zenit';
import WestBrom from '../../components/league/teams/WestBrom';


export const initialTeams = [
	{ id: 'RealMadrid', name: <RealMadrid />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Anji', name: <Anji />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Valencia', name: < Valencia />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'WestBrom', name: < WestBrom />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Inter', name: < Inter />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Chelsea', name: < Chelsea />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
];

export const additionalTeams = [
	{ id: 'CSKA', name: < CSKA />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Barcelona', name: < Barcelona />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'ACMilan', name: <ACMilan />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Zenit', name: <Zenit />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'NewcastleUnited', name: <NewcastleUnited />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'FCRostov', name: < FCRostov />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
]

export const matchResults = [
	{ id: '1', teamOne: 'WestBrom', scoreOne: 5, teamTwo: 'Chelsea', scoreTwo: 2 },
	{ id: '2', teamOne: 'Valencia', scoreOne: 3, teamTwo: 'RealMadrid', scoreTwo: 2 },
	{ id: '3', teamOne: 'RealMadrid', scoreOne: 2, teamTwo: 'Valencia', scoreTwo: 1 },
	{ id: '4', teamOne: 'Chelsea', scoreOne: 1, teamTwo: 'WestBrom', scoreTwo: 0 },
	{ id: '5', teamOne: 'WestBrom', scoreOne: 0, teamTwo: 'RealMadrid', scoreTwo: 6 },
	{ id: '6', teamOne: 'RealMadrid', scoreOne: 4, teamTwo: 'WestBrom', scoreTwo: 2 },
	{ id: '7', teamOne: 'Chelsea', scoreOne: 3, teamTwo: 'RealMadrid', scoreTwo: 2 },
	{ id: '8', teamOne: 'RealMadrid', scoreOne: 7, teamTwo: 'Chelsea', scoreTwo: 0 },
	{ id: '9', teamOne: 'Chelsea', scoreOne: 3, teamTwo: 'Valencia', scoreTwo: 6 },
	{ id: '10', teamOne: 'Valencia', scoreOne: 4, teamTwo: 'Chelsea', scoreTwo: 0 },
	{ id: '11', teamOne: 'WestBrom', scoreOne: 3, teamTwo: 'Valencia', scoreTwo: 5 },
	{ id: '12', teamOne: 'Valencia', scoreOne: 0, teamTwo: 'WestBrom', scoreTwo: 3 },
	{ id: '13', teamOne: 'Zenit', scoreOne: 2, teamTwo: 'FCRostov', scoreTwo: 3 },
	{ id: '14', teamOne: 'FCRostov', scoreOne: 3, teamTwo: 'Zenit', scoreTwo: 1 },
	{ id: '15', teamOne: 'Zenit', scoreOne: 1, teamTwo: 'Barcelona', scoreTwo: 3 },
	{ id: '16', teamOne: 'Barcelona', scoreOne: 4, teamTwo: 'Zenit', scoreTwo: 0 },
	{ id: '17', teamOne: 'FCRostov', scoreOne: 0, teamTwo: 'Barcelona', scoreTwo: 2 },
	{ id: '18', teamOne: 'Barcelona', scoreOne: 5, teamTwo: 'FCRostov', scoreTwo: 1 },
	{ id: '19', teamOne: 'Zenit', scoreOne: 3, teamTwo: 'ACMilan', scoreTwo: 3 },
	{ id: '20', teamOne: 'ACMilan', scoreOne: 4, teamTwo: 'Zenit', scoreTwo: 3 },
	{ id: '21', teamOne: 'ACMilan', scoreOne: 1, teamTwo: 'Barcelona', scoreTwo: 5 },
	{ id: '22', teamOne: 'Barcelona', scoreOne: 2, teamTwo: 'ACMilan', scoreTwo: 0 },
	{ id: '5', teamOne: 'WestBrom', scoreOne: 3, teamTwo: 'Inter', scoreTwo: 3 },
	{ id: '6', teamOne: 'Inter', scoreOne: 3, teamTwo: 'WestBrom', scoreTwo: 3 },
	{ id: '13', teamOne: 'Zenit', scoreOne: 0, teamTwo: 'NewcastleUnited', scoreTwo: 0 },
	{ id: '14', teamOne: 'NewcastleUnited', scoreOne: 2, teamTwo: 'Zenit', scoreTwo: 2 },
	{ id: '14', teamOne: 'NewcastleUnited', scoreOne: 2, teamTwo: 'Barcelona', scoreTwo: 1 },
	{ id: '13', teamOne: 'Barcelona', scoreOne: 3, teamTwo: 'NewcastleUnited', scoreTwo: 2 },
	{ id: '7', teamOne: 'Anji', scoreOne: 2, teamTwo: 'RealMadrid', scoreTwo: 2 },
	{ id: '8', teamOne: 'RealMadrid', scoreOne: 3, teamTwo: 'Anji', scoreTwo: 1 },
	{ id: '7', teamOne: 'Anji', scoreOne: 5, teamTwo: 'Chelsea', scoreTwo: 0 },
	{ id: '8', teamOne: 'Chelsea', scoreOne: 4, teamTwo: 'Anji', scoreTwo: 1 },
	{ id: '7', teamOne: 'Anji', scoreOne: 1, teamTwo: 'Valencia', scoreTwo: 4 },
	{ id: '8', teamOne: 'Valencia', scoreOne: 4, teamTwo: 'Anji', scoreTwo: 1 },
	{ id: '7', teamOne: 'Anji', scoreOne: 3, teamTwo: 'WestBrom', scoreTwo: 0 },
	{ id: '8', teamOne: 'WestBrom', scoreOne: 1, teamTwo: 'Anji', scoreTwo: 2 },
	{ id: '5', teamOne: 'CSKA', scoreOne: 4, teamTwo: 'NewcastleUnited', scoreTwo: 1 },
	{ id: '6', teamOne: 'NewcastleUnited', scoreOne: 1, teamTwo: 'CSKA', scoreTwo: 2 },
	{ id: '5', teamOne: 'CSKA', scoreOne: 0, teamTwo: 'Barcelona', scoreTwo: 0 },
	{ id: '6', teamOne: 'Barcelona', scoreOne: 0, teamTwo: 'CSKA', scoreTwo: 0 },
	{ id: '5', teamOne: 'CSKA', scoreOne: 6, teamTwo: 'Zenit', scoreTwo: 0 },
	{ id: '6', teamOne: 'Zenit', scoreOne: 2, teamTwo: 'CSKA', scoreTwo: 6 },
	{ id: '5', teamOne: 'FCRostov', scoreOne: 1, teamTwo: 'NewcastleUnited', scoreTwo: 0 },
	{ id: '6', teamOne: 'NewcastleUnited', scoreOne: 2, teamTwo: 'FCRostov', scoreTwo: 1 },
	{ id: '6', teamOne: 'NewcastleUnited', scoreOne: 2, teamTwo: 'ACMilan', scoreTwo: 1 },
	{ id: '5', teamOne: 'ACMilan', scoreOne: 1, teamTwo: 'NewcastleUnited', scoreTwo: 1 },
	{ id: '7', teamOne: 'Anji', scoreOne: 4, teamTwo: 'Inter', scoreTwo: 3 },
	{ id: '8', teamOne: 'Inter', scoreOne: 1, teamTwo: 'Anji', scoreTwo: 2 },
	{ id: '8', teamOne: 'Inter', scoreOne: 2, teamTwo: 'RealMadrid', scoreTwo: 2 },
	{ id: '7', teamOne: 'RealMadrid', scoreOne: 3, teamTwo: 'Inter', scoreTwo: 4 },
	{ id: '7', teamOne: 'Chelsea', scoreOne: 1, teamTwo: 'Inter', scoreTwo: 8 },
	{ id: '8', teamOne: 'Inter', scoreOne: 9, teamTwo: 'Chelsea', scoreTwo: 1 },
	{ id: '7', teamOne: 'FCRostov', scoreOne: 3, teamTwo: 'ACMilan', scoreTwo: 0 },
	{ id: '8', teamOne: 'ACMilan', scoreOne: 0, teamTwo: 'FCRostov', scoreTwo: 3 },
	{ id: '7', teamOne: 'CSKA', scoreOne: 3, teamTwo: 'ACMilan', scoreTwo: 0 },
	{ id: '8', teamOne: 'ACMilan', scoreOne: 0, teamTwo: 'CSKA', scoreTwo: 3 },
	{ id: '7', teamOne: 'CSKA', scoreOne: 2, teamTwo: 'FCRostov', scoreTwo: 2 },
	{ id: '8', teamOne: 'FCRostov', scoreOne: 2, teamTwo: 'CSKA', scoreTwo: 4 },
]

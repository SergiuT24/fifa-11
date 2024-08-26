import Galatasaray from '../../components/league/4star-teams/Galatasaray';
import Cska from '../../components/league/4star-teams/Cska';
import Fiorentina from '../../components/league/4star-teams/Fiorentina';
import Schalke from '../../components/league/4star-teams/Schalke';
import Zenit from '../../components/league/4star-teams/Zenit';
import Napoli from '../../components/league/4star-teams/Napoli';

export const initialTeams = [
	{ id: 'Galatasaray', name: <Galatasaray />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'CSKA', name: <Cska />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Fiorentina', name: <Fiorentina />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Schalke', name: <Schalke />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Zenit', name: <Zenit />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Napoli', name: <Napoli />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
];

export const matchResults = [
	{ id: '1', teamOne: 'Napoli', scoreOne: 1, teamTwo: 'CSKA', scoreTwo: 2 },
	{ id: '2', teamOne: 'CSKA', scoreOne: 2, teamTwo: 'Napoli', scoreTwo: 3 },
	{ id: '3', teamOne: 'Schalke', scoreOne: 0, teamTwo: 'CSKA', scoreTwo: 2 },
	{ id: '4', teamOne: 'CSKA', scoreOne: 3, teamTwo: 'Schalke', scoreTwo: 3 },
	{ id: '5', teamOne: 'Fiorentina', scoreOne: 4, teamTwo: 'CSKA', scoreTwo: 1 },
	{ id: '6', teamOne: 'CSKA', scoreOne: 3, teamTwo: 'Fiorentina', scoreTwo: 1 },
	{ id: '7', teamOne: 'Fiorentina', scoreOne: 4, teamTwo: 'Schalke', scoreTwo: 1 },
	{ id: '8', teamOne: 'Schalke', scoreOne: 3, teamTwo: 'Fiorentina', scoreTwo: 4 },
	{ id: '9', teamOne: 'Napoli', scoreOne: 2, teamTwo: 'Fiorentina', scoreTwo: 3 },
	{ id: '10', teamOne: 'Fiorentina', scoreOne: 8, teamTwo: 'Napoli', scoreTwo: 1 },
	{ id: '11', teamOne: 'CSKA', scoreOne: 2, teamTwo: 'Galatasaray', scoreTwo: 1 },
	{ id: '12', teamOne: 'Galatasaray', scoreOne: 3, teamTwo: 'CSKA', scoreTwo: 2 },
	{ id: '13', teamOne: 'Schalke', scoreOne: 3, teamTwo: 'Napoli', scoreTwo: 2 },
	{ id: '14', teamOne: 'Napoli', scoreOne: 1, teamTwo: 'Schalke', scoreTwo: 3 },
	{ id: '15', teamOne: 'Fiorentina', scoreOne: 3, teamTwo: 'Zenit', scoreTwo: 0 },
	{ id: '16', teamOne: 'Zenit', scoreOne: 2, teamTwo: 'Fiorentina', scoreTwo: 9 },
];
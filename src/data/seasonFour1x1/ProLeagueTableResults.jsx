import Everton from '../../components/league/4star-teams/Everton';
import Bordeaux from '../../components/league/4star-teams/Bordeaux';
import Cska from '../../components/league/4star-teams/Cska';
import Fenerbahce from '../../components/league/4star-teams/Fenerbahce';
import Genoa from '../../components/league/4star-teams/Genoa';
import Getafe from '../../components/league/4star-teams/Getafe';
import Sampdoria from '../../components/league/4star-teams/Sampdoria';
import Lille from '../../components/league/4star-teams/Lille';
import WestHam from '../../components/league/4star-teams/WestHam';
import Sporting from '../../components/league/4star-teams/Sporting';

export const initialTeams = [
	{ id: 'Everton', name: <Everton />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Genoa', name: <Genoa />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Sporting', name: <Sporting />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Getafe', name: <Getafe />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Fenerbahce', name: <Fenerbahce />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Sampdoria', name: <Sampdoria />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Lille', name: <Lille />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'CSKA', name: <Cska />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'WestHam', name: <WestHam />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Bordeaux', name: <Bordeaux />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
];

export const matchResults = [
	// Played Games
	{ id: '1', teamOne: 'Bordeaux', scoreOne: 2, teamTwo: 'Lille', scoreTwo: 3 },
	{ id: '2', teamOne: 'Lille', scoreOne: 3, teamTwo: 'Bordeaux', scoreTwo: 8 },
	{ id: '3', teamOne: 'Bordeaux', scoreOne: 8, teamTwo: 'Sampdoria', scoreTwo: 1 },
	{ id: '4', teamOne: 'Sampdoria', scoreOne: 1, teamTwo: 'Bordeaux', scoreTwo: 4 },
	{ id: '5', teamOne: 'WestHam', scoreOne: 0, teamTwo: 'CSKA', scoreTwo: 5 },
	{ id: '6', teamOne: 'CSKA', scoreOne: 3, teamTwo: 'WestHam', scoreTwo: 1 },
	{ id: '7', teamOne: 'Genoa', scoreOne: 3, teamTwo: 'Getafe', scoreTwo: 1 },
	{ id: '8', teamOne: 'Getafe', scoreOne: 2, teamTwo: 'Genoa', scoreTwo: 4 },
	{ id: '9', teamOne: 'Sampdoria', scoreOne: 2, teamTwo: 'Lille', scoreTwo: 1 },
	{ id: '10', teamOne: 'Lille', scoreOne: 3, teamTwo: 'Sampdoria', scoreTwo: 3 },
	{ id: '11', teamOne: 'WestHam', scoreOne: 1, teamTwo: 'Sporting', scoreTwo: 1 },
	{ id: '12', teamOne: 'Sporting', scoreOne: 2, teamTwo: 'WestHam', scoreTwo: 0 },
	{ id: '13', teamOne: 'Genoa', scoreOne: 1, teamTwo: 'Sampdoria', scoreTwo: 6 },
	{ id: '14', teamOne: 'Sampdoria', scoreOne: 3, teamTwo: 'Genoa', scoreTwo: 1 },
	{ id: '15', teamOne: 'Lille', scoreOne: 6, teamTwo: 'Getafe', scoreTwo: 0 },
	{ id: '16', teamOne: 'Getafe', scoreOne: 1, teamTwo: 'Lille', scoreTwo: 4 },
	{ id: '17', teamOne: 'Sampdoria', scoreOne: 2, teamTwo: 'Sporting', scoreTwo: 4 },
	{ id: '18', teamOne: 'Sporting', scoreOne: 2, teamTwo: 'Sampdoria', scoreTwo: 3 },
	{ id: '19', teamOne: 'Genoa', scoreOne: 1, teamTwo: 'CSKA', scoreTwo: 6 },
	{ id: '20', teamOne: 'CSKA', scoreOne: 3, teamTwo: 'Genoa', scoreTwo: 2 },
	{ id: '21', teamOne: 'Everton', scoreOne: 5, teamTwo: 'Getafe', scoreTwo: 1 },
	{ id: '22', teamOne: 'Getafe', scoreOne: 0, teamTwo: 'Everton', scoreTwo: 4 },
	{ id: '23', teamOne: 'Genoa', scoreOne: 4, teamTwo: 'Sporting', scoreTwo: 4 },
	{ id: '24', teamOne: 'Sporting', scoreOne: 3, teamTwo: 'Genoa', scoreTwo: 3 },
	{ id: '25', teamOne: 'Sampdoria', scoreOne: 3, teamTwo: 'CSKA', scoreTwo: 6 },
	{ id: '26', teamOne: 'CSKA', scoreOne: 3, teamTwo: 'Sampdoria', scoreTwo: 4 },
	{ id: '27', teamOne: 'Lille', scoreOne: 3, teamTwo: 'Everton', scoreTwo: 5 },
	{ id: '28', teamOne: 'Everton', scoreOne: 6, teamTwo: 'Lille', scoreTwo: 0 },
	{ id: '29', teamOne: 'Sampdoria', scoreOne: 10, teamTwo: 'Getafe', scoreTwo: 0 },
	{ id: '30', teamOne: 'Getafe', scoreOne: 0, teamTwo: 'Sampdoria', scoreTwo: 4 },
	{ id: '31', teamOne: 'Lille', scoreOne: 4, teamTwo: 'CSKA', scoreTwo: 3 },
	{ id: '32', teamOne: 'CSKA', scoreOne: 1, teamTwo: 'Lille', scoreTwo: 0 },
	{ id: '33', teamOne: 'Everton', scoreOne: 6, teamTwo: 'Genoa', scoreTwo: 1 },
	{ id: '34', teamOne: 'Genoa', scoreOne: 1, teamTwo: 'Everton', scoreTwo: 5 },
	{ id: '35', teamOne: 'Everton', scoreOne: 2, teamTwo: 'CSKA', scoreTwo: 1 },
	{ id: '36', teamOne: 'CSKA', scoreOne: 3, teamTwo: 'Everton', scoreTwo: 3 },
	{ id: '37', teamOne: 'Everton', scoreOne: 3, teamTwo: 'Bordeaux', scoreTwo: 2 },
	{ id: '38', teamOne: 'Bordeaux', scoreOne: 3, teamTwo: 'Everton', scoreTwo: 2 },
	{ id: '39', teamOne: 'Sampdoria', scoreOne: 1, teamTwo: 'WestHam', scoreTwo: 1 },
	{ id: '40', teamOne: 'WestHam', scoreOne: 1, teamTwo: 'Sampdoria', scoreTwo: 4 },
	{ id: '41', teamOne: 'Fenerbahce', scoreOne: 0, teamTwo: 'WestHam', scoreTwo: 0 },
	{ id: '42', teamOne: 'WestHam', scoreOne: 1, teamTwo: 'Fenerbahce', scoreTwo: 1 },
	{ id: '43', teamOne: 'Sampdoria', scoreOne: 5, teamTwo: 'Fenerbahce', scoreTwo: 1 },
	{ id: '44', teamOne: 'Fenerbahce', scoreOne: 4, teamTwo: 'Sampdoria', scoreTwo: 2 },
	{ id: '45', teamOne: 'Lille', scoreOne: 1, teamTwo: 'Fenerbahce', scoreTwo: 4 },
	{ id: '46', teamOne: 'Fenerbahce', scoreOne: 3, teamTwo: 'Lille', scoreTwo: 1 },
	{ id: '47', teamOne: 'Lille', scoreOne: 3, teamTwo: 'Genoa', scoreTwo: 2 },
	{ id: '48', teamOne: 'Genoa', scoreOne: 3, teamTwo: 'Lille', scoreTwo: 4 },
	{ id: '49', teamOne: 'Fenerbahce', scoreOne: 4, teamTwo: 'Genoa', scoreTwo: 0 },
	{ id: '50', teamOne: 'Genoa', scoreOne: 1, teamTwo: 'Fenerbahce', scoreTwo: 3 },
	{ id: '51', teamOne: 'Fenerbahce', scoreOne: 3, teamTwo: 'Getafe', scoreTwo: 0 },
	{ id: '52', teamOne: 'Getafe', scoreOne: 1, teamTwo: 'Fenerbahce', scoreTwo: 5 },
	{ id: '1', teamOne: 'Fenerbahce', scoreOne: 2, teamTwo: 'CSKA', scoreTwo: 1 },
	{ id: '1', teamOne: 'CSKA', scoreOne: 0, teamTwo: 'Fenerbahce', scoreTwo: 4 },
	{ id: '1', teamOne: 'Sporting', scoreOne: 2, teamTwo: 'Getafe', scoreTwo: 0 },
	{ id: '1', teamOne: 'Getafe', scoreOne: 1, teamTwo: 'Sporting', scoreTwo: 3 },
	{ id: '1', teamOne: 'Genoa', scoreOne: 2, teamTwo: 'WestHam', scoreTwo: 1 },
	{ id: '1', teamOne: 'WestHam', scoreOne: 0, teamTwo: 'Genoa', scoreTwo: 5 },
	{ id: '1', teamOne: 'Fenerbahce', scoreOne: 1, teamTwo: 'Bordeaux', scoreTwo: 5 },
	{ id: '1', teamOne: 'Bordeaux', scoreOne: 3, teamTwo: 'Fenerbahce', scoreTwo: 2 },
	{ id: '1', teamOne: 'Getafe', scoreOne: 0, teamTwo: 'CSKA', scoreTwo: 4 },
	{ id: '1', teamOne: 'CSKA', scoreOne: 2, teamTwo: 'Getafe', scoreTwo: 1 },
	{ id: '1', teamOne: 'Everton', scoreOne: 5, teamTwo: 'Sporting', scoreTwo: 3 },
	{ id: '1', teamOne: 'Sporting', scoreOne: 1, teamTwo: 'Everton', scoreTwo: 2 },
	{ id: '1', teamOne: 'Bordeaux', scoreOne: 4, teamTwo: 'Getafe', scoreTwo: 0 },
	{ id: '1', teamOne: 'Getafe', scoreOne: 1, teamTwo: 'Bordeaux', scoreTwo: 3 },
	{ id: '1', teamOne: 'Everton', scoreOne: 5, teamTwo: 'Fenerbahce', scoreTwo: 1 },
	{ id: '1', teamOne: 'Fenerbahce', scoreOne: 1, teamTwo: 'Everton', scoreTwo: 2 },
	{ id: '1', teamOne: 'WestHam', scoreOne: 0, teamTwo: 'Bordeaux', scoreTwo: 6 },
	{ id: '1', teamOne: 'Bordeaux', scoreOne: 4, teamTwo: 'WestHam', scoreTwo: 0 },
	// Everton
	{ id: '1', teamOne: 'Everton', scoreOne: '?', teamTwo: 'Sampdoria', scoreTwo: '?' },
	{ id: '1', teamOne: 'Everton', scoreOne: '?', teamTwo: 'WestHam', scoreTwo: '?' },
	// Genoa
	{ id: '1', teamOne: 'Genoa', scoreOne: '?', teamTwo: 'Bordeaux', scoreTwo: '?' },
	// Sporting CP
	{ id: '1', teamOne: 'Sporting', scoreOne: '?', teamTwo: 'Fenerbahce', scoreTwo: '?' },
	{ id: '1', teamOne: 'Sporting', scoreOne: '?', teamTwo: 'Lille', scoreTwo: '?' },
	{ id: '1', teamOne: 'Sporting', scoreOne: '?', teamTwo: 'CSKA', scoreTwo: '?' },
	{ id: '1', teamOne: 'Sporting', scoreOne: '?', teamTwo: 'Bordeaux', scoreTwo: '?' },
	// Getafe
	{ id: '1', teamOne: 'Getafe', scoreOne: '?', teamTwo: 'WestHam', scoreTwo: '?' },
	// Fenerbahce
	{ id: '1', teamOne: 'Fenerbahce', scoreOne: '?', teamTwo: 'Sporting', scoreTwo: '?' },
	// Sampdoria
	{ id: '1', teamOne: 'Sampdoria', scoreOne: '?', teamTwo: 'Everton', scoreTwo: '?' },
	// Lille
	{ id: '1', teamOne: 'Lille', scoreOne: '?', teamTwo: 'Sporting', scoreTwo: '?' },
	{ id: '1', teamOne: 'Lille', scoreOne: '?', teamTwo: 'WestHam', scoreTwo: '?' },
	// CSKA Moscow
	{ id: '1', teamOne: 'CSKA', scoreOne: '?', teamTwo: 'Sporting', scoreTwo: '?' },
	{ id: '1', teamOne: 'CSKA', scoreOne: '?', teamTwo: 'Bordeaux', scoreTwo: '?' },
	// West Ham
	{ id: '1', teamOne: 'WestHam', scoreOne: '?', teamTwo: 'Everton', scoreTwo: '?' },
	{ id: '1', teamOne: 'WestHam', scoreOne: '?', teamTwo: 'Getafe', scoreTwo: '?' },
	{ id: '1', teamOne: 'WestHam', scoreOne: '?', teamTwo: 'Lille', scoreTwo: '?' },
	// Bordeaux
	{ id: '1', teamOne: 'Bordeaux', scoreOne: '?', teamTwo: 'Genoa', scoreTwo: '?' },
	{ id: '1', teamOne: 'Bordeaux', scoreOne: '?', teamTwo: 'Sporting', scoreTwo: '?' },
	{ id: '1', teamOne: 'Bordeaux', scoreOne: '?', teamTwo: 'CSKA', scoreTwo: '?' },
];
export const fetchResults = async () => {
	try {
		const response = await fetch('https://match-results-bucket.s3.eu-central-1.amazonaws.com/results.json');
		const data = await response.json();

		// Prelucrarea datelor și returnarea lor într-un format dorit
		return data.map((match, index) => ({
			id: (index + 1).toString(),
			teamOne: match.teamOne,
			scoreOne: match.scoreOne,
			teamTwo: match.teamTwo,
			scoreTwo: match.scoreTwo
		}));
	} catch (error) {
		console.error('Error fetching match results:', error);
		return [];
	}
};
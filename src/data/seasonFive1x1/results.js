export const fetchResults = async () => {
	console.log('Fetching results...');
	try {
		const response = await fetch('https://match-results-bucket.s3.eu-central-1.amazonaws.com/matchResults.json');
		console.log('Response received:', response);

		const data = await response.json();
		console.log('Data parsed:', data);
		return data;
	} catch (error) {
		console.error('Error fetching match results:', error);
		return [];
	}
};
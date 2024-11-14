export let getResults = [];  // Start with an empty array

// Function to fetch data from S3 and format it
const fetchMatchResults = async () => {
	try {
		const response = await fetch('https://match-results-bucket.s3.eu-central-1.amazonaws.com/matchResults.json');
		const data = await response.json();

		// Format the data as needed
		getResults = data.map((match, index) => ({
			id: (index + 1).toString(),  // Ensure the id is a string and starts from 1
			teamOne: match.teamOne,
			scoreOne: match.scoreOne,
			teamTwo: match.teamTwo,
			scoreTwo: match.scoreTwo
		}));

		console.log(getResults);  // Log to see the results in the console

	} catch (error) {
		console.error('Error fetching match results:', error);
	}
};

// Call the function to fetch and populate matchResults
fetchMatchResults();


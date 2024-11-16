const fetchResults = async () => {
	console.log('Fetching results...');
	try {
		const response = await fetch('https://match-results-bucket.s3.eu-central-1.amazonaws.com/matchResults.json');
		console.log('Response received:', response);

		const data = await response.json();
		console.log('Data parsed:', data);

		// Выбираем только необходимые данные и возвращаем массив
		const formattedData = data.map(item => ({
			id: item.id,
			teamOne: item.teamOne,
			scoreOne: item.scoreOne,
			teamTwo: item.teamTwo,
			scoreTwo: item.scoreTwo
		}));

		console.log('Formatted Data:', formattedData);
		return formattedData;
	} catch (error) {
		console.error('Error fetching match results:', error);
		return [];
	}
};

fetchResults();

// Экспортируем результат
export const results = await fetchResults();

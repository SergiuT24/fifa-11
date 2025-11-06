import React from "react";

const TeamsForRandom = () => {
	const teams = [
		{ name: "Real Madrid", budget: "202.9 mln" },
		{ name: "Valencia", budget: "164.4 mln" },
		{ name: "Newcastle Und", budget: "133.2 mln" },
		{ name: "Anji", budget: "118.1 mln" },
		{ name: "Barcelona", budget: "117.1 mln" },
		{ name: "West Brom", budget: "106.8 mln" },
		{ name: "Inter", budget: "105.5 mln" },
		{ name: "CSKA", budget: "92.5 mln" },
		{ name: "FC Rostov", budget: "83.6 mln" },
		{ name: "Zenit", budget: "46.9 mln" },
		{ name: "AC Milan", budget: "44.3 mln" },
		{ name: "Chelsea", budget: "28.3 mln" },
	];

	return (
		<div className="max-w-md mx-auto mr-3 mt-10 bg-gray-900 text-white rounded-2xl shadow-lg p-2">
			<h3 className="text-center text-xl font-semibold mb-4 border-b border-gray-700 pb-2">
				Club Budget
			</h3>
			<ul className="space-y-2">
				{teams.map((team, index) => (
					<li
						key={index}
						className="flex justify-between items-center gap-2 bg-gray-800 hover:bg-gray-700 transition rounded-xl px-2 py-2"
					>
						<span className="text-sm">{team.name}</span>
						<span className="font-semibold text-emerald-400">{team.budget}</span>
					</li>
				))}
			</ul>
		</div>
	);
};

export default TeamsForRandom;

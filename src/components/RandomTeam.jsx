import React, { useState } from "react";
import { shuffle } from "./helper";

function RandomTeam(props) {
  const [noOfTeam, setNoOfTeam] = useState();
  const [teams, setTeams] = useState([]);

  const handleGeneratorClick = () => {
    const shuffledArray = shuffle(props.list);
    if (!noOfTeam || noOfTeam <= 0) {
      setTeams([]);
    } else {
      const noOfPlayers = Math.floor(shuffledArray.length / noOfTeam);
      const res = [];
      for (let i = 0; i < noOfTeam; i++) {
        res.push(shuffledArray.slice(i * noOfPlayers, (i + 1) * noOfPlayers));
      }
      setTeams(res);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 p-6 bg-gray-100 rounded-lg shadow-md w-full max-w-lg mx-auto">
      <h2 className="text-xl font-semibold text-gray-700">
        Random Team Generator
      </h2>

      <input
        className="border-2 border-gray-300 p-2 rounded-lg w-full focus:ring-2 focus:ring-blue-400 focus:outline-none"
        onChange={(event) => setNoOfTeam(parseInt(event.target.value, 10) || 0)}
        type="number"
        placeholder="Enter number of teams"
      />

      <button
        className="bg-green-500 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-green-600 transition"
        onClick={handleGeneratorClick}
      >
        Generate
      </button>

      {teams.length > 0 && (
        <div className="w-full bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-bold text-gray-800 mb-2">Teams:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {teams.map((team, teamIndex) => (
              <div
                key={teamIndex}
                className="border border-gray-300 rounded-lg p-3 bg-gray-50"
              >
                <h4 className="font-semibold text-blue-600">
                  Team {teamIndex + 1}
                </h4>
                <ul className="list-disc pl-5 text-gray-700">
                  {team.map((member, memberIndex) => (
                    <li key={memberIndex} className="py-1">
                      {member}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default RandomTeam;

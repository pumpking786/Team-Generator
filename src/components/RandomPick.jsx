import React, { useState } from "react";
import { shuffle } from "./helper";

function RandomPick(props) {
  const [noOfPlayers, setNoOfPlayers] = useState();
  const [randomPeople, setRandomPeople] = useState([]);

  const handlePickClick = () => {
    const shuffledArray = shuffle(props.list);
    if (!noOfPlayers || noOfPlayers <= 0) {
      setRandomPeople([]);
    } else {
      const slicedArray = shuffledArray.slice(0, noOfPlayers);
      setRandomPeople(slicedArray);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 p-6 bg-gray-100 rounded-lg shadow-md w-full max-w-md mx-auto">
      <h2 className="text-xl font-semibold text-gray-700">
        Random Player Picker
      </h2>

      <input
        className="border-2 border-gray-300 p-2 rounded-lg w-full focus:ring-2 focus:ring-blue-400 focus:outline-none"
        onChange={(event) =>
          setNoOfPlayers(parseInt(event.target.value, 10) || 0)
        }
        type="number"
        placeholder="Enter number of players"
      />

      <button
        className="bg-green-500 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-green-600 transition"
        onClick={handlePickClick}
      >
        Pick
      </button>

      {randomPeople.length > 0 && (
        <ol className="w-full bg-white p-4 rounded-lg shadow-md">
          {randomPeople.map((player, index) => (
            <li key={index} className="text-lg font-medium text-gray-800 py-1">
              {index + 1}. {player}
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}

export default RandomPick;

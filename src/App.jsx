import { useState } from "react";
import PeopleListInput from "./components/PeopleListInput";
import RandomPick from "./components/RandomPick";
import RandomTeam from "./components/RandomTeam";

function App() {
  const [playerList, setPlayerList] = useState([]);
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold text-gray-700 mb-6">
        Team & Player Picker
      </h1>

      <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md space-y-6">
        <PeopleListInput onChange={setPlayerList} />
        <RandomPick
          list={playerList}
          onSelectedPlayersChange={setSelectedPlayers}
        />
        <RandomTeam list={selectedPlayers} />
      </div>
    </div>
  );
}

export default App;

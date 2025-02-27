import { useState } from "react";
import PeopleListInput from "./components/PeopleListInput";
// import RandomPick from "./components/RandomPick";
import RandomTeam from "./components/RandomTeam";

function App() {
  const [playerList, setPlayerList] = useState([]);

  return (
    <div
      className="min-h-screen bg-gray-100 flex flex-col items-center p-6"
      style={{
        backgroundImage:
          "url('https://static.vecteezy.com/system/resources/previews/012/700/238/non_2x/lucky-dice-banner-with-6x6-vector.jpg')",
      }}
    >
      <h1 className="text-3xl font-extrabold text-gray-800 mb-12 text-center uppercase tracking-wide drop-shadow-lg">
        🎲 Random Team Generator 🔥
      </h1>

      <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md space-y-6">
        <PeopleListInput onChange={setPlayerList} />
        {/* <RandomPick list={playerList} /> */}
        <RandomTeam list={playerList} />
      </div>
    </div>
  );
}

export default App;

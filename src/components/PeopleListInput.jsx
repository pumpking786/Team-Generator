import React from "react";

function PeopleListInput(props) {
  return (
    <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-md w-full">
      <h2 className="text-xl font-semibold text-gray-700 mb-2">Players List</h2>
      <textarea
        id="names"
        className="border-2 border-gray-300 rounded-lg p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent resize-none w-full h-32"
        placeholder="Enter the name of players using comma ','
Example: Ram, Shyam, Hari, Arjun"
        onChange={(event) => {
          const listing = event.target.value;
          const list = listing
            .split(",")
            .filter((str) => str.trim().length)
            .map((str) => str.trim());
          props.onChange(list);
        }}
      ></textarea>
    </div>
  );
}

export default PeopleListInput;

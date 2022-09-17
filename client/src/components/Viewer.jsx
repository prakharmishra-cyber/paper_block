import React, { useState } from "react";
import axios from "axios";
import Result from "./Result";

const Viewer = () => {
  const [searchField, setSearchField] = useState("");
  const [results, setResults] = useState([]);

  const handleSubmit = () => {
    if (searchField.length > 0) {
      axios
        .get(`http://localhost:5000/papers/getTags/${searchField}`)
        .then((res) => {
          setResults(res.data);
          setSearchField("");
        })
        .catch((error) => {
          console.log(error);
        });
    }else {
      alert('Search Field is Empty');
    }
  };

  return (
    <div className="flex space-x-2 m-4 flex-col h-screen">
      <div className=" border-2 w-full border-indigo-600 border-solid shadow-md p-2 m-2 rounded-md h-2/12">
        <p className="pb-2 font-mono text-indigo-600">Enter the Subject Name</p>
        <div className="flex space-x-2  space-y-1 flex-col md:flex-row">
          <input
            type="text"
            id="rounded-email"
            value={searchField}
            className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-11/12 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
            placeholder="Subject Name"
            onChange={(e) => setSearchField(e.target.value)}
          />

          <button
            type="button"
            onClick={handleSubmit}
            className="py-2 px-4  bg-indigo-200 hover:bg-indigo-700 md:w-1/12 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
          >
            &#128269;
          </button>
        </div>
      </div>

      <div className="rounded-md border-2 w-full border-indigo-600 border-solid p-2 m-2 shadow-lg">
        {results.length === 0 ? (
          <div className="font-mono text-indigo-600 text-center">
            No Records Found / Enter Subject Name
          </div>
        ) : (
          <>
            <div className="text-2xl ml-3 text-indigo-600">
              Found {results.length} Results
            </div>
            <hr className="mr-2" />
            {results.map((element, index) => {
              return (
                <Result
                  details={element}
                  l={results.length}
                  key={element.FileName}
                />
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default Viewer;

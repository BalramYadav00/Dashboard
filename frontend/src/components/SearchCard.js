import React, { useEffect, useState } from "react";
import { searchInArrayOfObjects } from "./CustomComponents";

function SearchCard() {
  let SuperData = JSON.parse(localStorage.getItem("mainData"));
  const [Search, setSearch] = useState(SuperData);
  const [Filter, setFilter] = useState("");
  const [year, setYear] = useState(null);
  const SearchHandler = () => {
    setSearch(searchInArrayOfObjects(SuperData, Filter, year));
  };
  return (
    <div className="shadow-md hover:shadow-lg mx-12 w-full p-4 my-2 rounded-lg">
      <div className=" flex space-x-4 mb-2 w-full">
        <input
          className=" basis-4/4 appearance-none border-2 border-gray-200 rounded-full w-full py-2 px-4 text-gray-700 leadin
        g-tight focus:outline-none focus:bg-white focus:border-green-500"
          placeholder="Search through Sector, City, region etc., for results "
          value={Filter}
          onChange={(e) => setFilter(e.target.value)}
        />
        <input
          className="basis-1/4 appearance-none border-2 border-gray-200 rounded-full w-full py-2 px-4 text-gray-700
         leading-tight focus:outline-none focus:bg-white focus:border-green-500"
          type="number"
          placeholder="Filter throught start/end year"
          value={year}
          onChange={e => setYear(e.target.value.replace(/\D/g, '').slice(0, 4))}
          maxLength="4"
        />
        {/* <input
          className="basis-1/4 appearance-none border-2 border-gray-200 rounded-full w-full py-2 px-4
           text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
          type="number"
          placeholder="End year"
        /> */}
        <button
          onClick={SearchHandler}
          className="text-gray-600 hover:text-green-600 font-semibold border-2 border-green-500 px-2 rounded-3xl"
        >
          {" "}
          Search
        </button>
      </div>
      <div className=" h-96 overflow-y-scroll">
        {Search.map((item) => (
          <div className="shadow-lg p-4 rounded-lg">
            <a href={item.url} target="_blank" rel="noreferrer">
              <div className="flex flex-col text-gray-700 font-mono">
                <div>Title: {item.title}</div>
                <div>
                  Insights: {item.insight ? item.insight : "Not availabe"}
                </div>
                <div>
                  <p className="text-blue-400">
                    Click to View full details....
                  </p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchCard;

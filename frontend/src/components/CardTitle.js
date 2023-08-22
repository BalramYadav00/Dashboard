import React from "react";
import { BiBarChart } from "react-icons/bi";
function CardTitle() {
  let data = JSON.parse(localStorage.getItem("mainData"));
  function getUniqueFieldValues(dataArray, field) {
    const uniqueValuesSet = new Set();
    const uniqueValuesArray = [];

    dataArray.forEach((item) => {
      if (item.hasOwnProperty(field)) {
        const fieldValue = item[field];
        if (!uniqueValuesSet.has(fieldValue)) {
          uniqueValuesSet.add(fieldValue);
          uniqueValuesArray.push(fieldValue);
        }
      }
    });

    return uniqueValuesArray;
  }

  let sourceData = getUniqueFieldValues(data, "source");
  let sctorData = getUniqueFieldValues(data, "sector");
  let regionData = getUniqueFieldValues(data, "region");
  return (
    <div className="text-gray-500 flex px-6 space-x-2">
      <div className="font-mono basis-1/3 rounded-md p-4">
        <div class="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden">
          <div class="p-6">
            <h2 class="text-xl font-semibold mb-2">Article from resources </h2>
            <div class="flex items-center justify-between mb-4">
              <div class="flex items-center">
                <p class="text-5xl font-bold text-green-500 mr-2">
                  {sourceData.length}+
                </p>
                <svg
                  class="w-10 h-10 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
              <BiBarChart className="text-green-400" size={60} />
            </div>
          </div>
        </div>
      </div>
      <div className="font-mono basis-1/3 rounded-md p-4">
        <div class="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden">
          <div class="p-6">
            <h2 class="text-xl font-semibold mb-2">Article from regions </h2>
            <div class="flex items-center justify-between mb-4">
              <div class="flex items-center">
                <p class="text-5xl font-bold text-blue-400 mr-2">
                  {regionData.length}+
                </p>
                <svg
                  class="w-10 h-10 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
              <BiBarChart className="text-blue-400" size={60} />
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="font-mono basis-1/3 rounded-md p-4">
        <div class="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden">
          <div class="p-6">
            <h2 class="text-xl font-semibold mb-2">Article from sectors </h2>
            <div class="flex items-center justify-between mb-4">
              <div class="flex items-center">
                <p class="text-5xl font-bold text-yellow-400 mr-2">
                  {sctorData.length}+
                </p>
                <svg
                  class="w-10 h-10 text-yellow-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
              <BiBarChart className="text-yellow-400" size={60} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardTitle;

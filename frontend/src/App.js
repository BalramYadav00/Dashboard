import React, { useEffect, useState } from "react";
import Dashboard from "./screens/Dashboard";
import axios from "axios";
function App() {
  const apiUrl = "http://localhost:8080/api/data/";
  useEffect(() => {
    setLoading(true)
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        localStorage.setItem("mainData", JSON.stringify(response.data));
        setLoading(false)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    //  data.labels = newdata.map(data => data.topic)
  }, []);

  const [loading, setLoading] = useState(true);
  // const [mainData, setMainData] = useState(null);

  // useEffect(() => {
  //   // Simulate fetching data from localStorage
  //   const data = localStorage.getItem("mainData");
  //   setTimeout(() => {
  //     setMainData(data);
  //     setLoading(false);
  //   }, 2000); // Simulating 2 seconds of loading time
  // }, []);

  return loading ? (
    <LoadingScreen data={"Application Loading...."} />
  ) :  (
    <div>
      {/* Your HomeScreen content goes here */}
      <Dashboard />
    </div>
  )
}

const LoadingScreen = ({ data }) => {
  return (
    <div className="flex items-center justify-center h-screen bg-green-400">
      <div className="text-white font-mono text-4xl flex font-bold ">
      <div className="w-[50%]  flex-center h-10">
    <div
      style={{ width: `${100}px`, height: `${100}px` }}
      className="animate-spin">
      <div className="h-full w-full border-8 border-t-white
       border-b-white- rounded-[50%]">
      </div>
    </div>
  </div>
  {/* {data} */}
      </div>
    </div>
  );
};

export default App;

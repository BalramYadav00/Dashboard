import React from "react";
import Menu from "../components/Menu";
import TopCardView from "../components/TopCardView";
import BarChart from "../components/BarChart";
import DoughnutChat from "../components/DoughnutChart";
import { LineChart } from "../components/LineChart";
import CardTitle from "../components/CardTitle";
import UserBar from "../components/UserBar";
import SearchCard from "../components/SearchCard";
function Dashboard() {
  return (
    <div className=" flex  ">
      <Menu />
      <div className="">
        <UserBar />
        <TopCardView />
        <CardTitle />
        <div className=" flex flex-row  mx-6">
          <DoughnutChat />
          <LineChart />
        </div>
        <div className="flex flex-row ">
          <SearchCard />
        </div>
        <footer className=" text-green-500 text-center py-4">
      <p>© 2023 BlackCoffer. All rights reserved.</p>
    </footer>
      </div>
      
    </div>
  );
}

export default Dashboard;

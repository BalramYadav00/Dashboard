import React, { useState } from "react";
import { RxDashboard } from "react-icons/rx";
import CustomIcon from "./CustomIcon";
import {FaShoppingBag} from 'react-icons/fa'
import {TbBrandGoogleAnalytics, TbBrandBooking}  from 'react-icons/tb'
import {BiSolidBank} from 'react-icons/bi'
import {BsFillFileEarmarkTextFill} from 'react-icons/bs'
function Menu() {
  const [show, setShow] = useState(false);

  const menu = [
    {
      id: "dashboard",
      title: "Dashboard",
      link: "#",
      Icon: RxDashboard
    },
    {
      id: "E-commerce",
      title: "E-commerce",
      link: "#",
      Icon: FaShoppingBag
    },
    {
      id: "Analytics",
      title: "Analytics",
      link: "#",
      Icon: TbBrandGoogleAnalytics
    },
    {
      id: "Banking",
      title: "Banking",
      link: "#",
      Icon: BiSolidBank
    },
    {
      id: "Booking",
      title: "Booking",
      link: "#",
      Icon: TbBrandBooking
    },
    {
      id: "File",
      title: "File",
      link: "#",
      Icon: BsFillFileEarmarkTextFill
    },
   
  ];

  return (
    <main className=" sticky top-0 flex flex-row h-screen">
    <div className="">
      <div className="border-r-2 w-20 h-full flex flex-col my-4">
        <div className="flex flex-row justify-center items-center">
          <img
            class="h-8 w-auto "
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/2048px-Spotify_logo_without_text.svg.png"
            alt="Workflow"
          />
        </div>

        <div className="mt-4 overflow-y-auto no-scrollbar">
          {menu.map((data) => (
            <div key={data.id} className="my-3">
              <a href={data.link}>
                <div className=" flex flex-col py-2 focus:text-[#00A76F] text-[#637381] hover:text-[#00A76F] focus:bg-[#D6F1E8] hover:bg-[#D6F1E8] rounded-xl">
                  <CustomIcon  Icon={data.Icon} />
                  <p className=" place-self-center text-xs font-semibold">
                    {data.title}
                  </p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
    </main>
  );
}

export default Menu;

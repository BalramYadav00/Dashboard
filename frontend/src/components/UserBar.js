import React from "react";
import { RiNotification4Fill } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { BiSearchAlt } from "react-icons/bi";
import {ImCtrl} from 'react-icons/im'
function UserBar() {
  return (
    <div className="text-gray-500  sticky top-0 z-[999] bg-white bg-opacity-80 py-4 px-8 flex justify-between items-center">
      <div className="">
        <a href="#"><BiSearchAlt size={24} /></a></div>
      <div className="flex items-center">
        <ul className="flex space-x-4">
          <li>
            <a href="#">
              <RiNotification4Fill size={24} />
            </a>
          </li>
          <li>
            <a href="#">
              <IoMdSettings size={24} />
            </a>
          </li>

          {/* <li>
            <a href="#">Services</a>
          </li> */}
          <li>
            <a href="#">
              <FaUserCircle className="text-green-500" size={24} />
            </a>
          </li>
        </ul>
        {/* Add other items here if needed */}
      </div>
    </div>
  );
}

export default UserBar;

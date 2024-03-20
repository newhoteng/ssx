import React from 'react';
import { IoIosArrowUp } from "react-icons/io";

const SideNav = () => {
  return (
    <nav className="px-8 py-4 flex flex-col items-cente gap-6 w-1/4 h-[calc(100vh-55px)] bg-lightgrey fixed">
      <button className="bg-accentpink h-[30px] rounded-md text-white font-medium">Dashboard</button>
      <button className="bg-accentpink h-[30px] rounded-md text-white font-meduim" >Reports</button>
      <button className="bg-accentpink h-[30px] rounded-md text-white font-medium" >LP Trading</button>
      <button className="bg-accentpink h-[30px] rounded-md text-white font-medium" >Trading History</button>
      <button className="bg-accentpink h-[30px] rounded-md text-white font-medium mt-auto flex items-center justify-center gap-2 relative" >
        <span>Code Maintenance</span>
        <IoIosArrowUp />
        <div className="bg-white absolute w-full text-[#374151] top-[-80px] hidden">
          <div className="h-[40px] border flex items-center justify-center">Some Menu Item</div>
          <div className="h-[40px] border flex items-center justify-center">Some Menu Item</div>
        </div>
      </button>

    </nav>
  )
}

export default SideNav
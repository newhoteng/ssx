import React from 'react';
import { IoIosArrowUp } from "react-icons/io";

const EquityPage = () => {
  return (
    <main className="flex border-2 border-red-600 max-w-[1504px] my-0 mx-auto pr-2 py-0">
      <nav className="px-2 flex flex-col items-cente gap-6 border border-violet-800 w-1/4 h-[calc(100vh-55px)] bg-lightgrey py-4">
        <button className="bg-accentpink h-[30px] rounded-md">Dashboard</button>
        <button className="bg-accentpink h-[30px] rounded-md" >Reports</button>
        <button className="bg-accentpink h-[30px] rounded-md" >LP Trading</button>
        <button className="bg-accentpink h-[30px] rounded-md" >Trading History</button>
        <button className="bg-accentpink h-[30px] rounded-md mt-auto flex items-center justify-center gap-2" ><span>Code Maintenance</span><IoIosArrowUp /></button>
      </nav>
      <section className="border-2 border-yellow-600 flex-1">
        Main Section
      </section>
    </main>
  )
}

export default EquityPage
import React from 'react';
import { IoIosArrowUp } from "react-icons/io";
import { FaCediSign } from "react-icons/fa6";

const EquityPage = () => {
  return (
    <main className="flex max-w-[1504px] my-0 mx-auto py-0 relative top-[55px]">
      {/* Side Nav */}
      <nav className="px-4 py-4 flex flex-col items-cente gap-6 w-1/4 h-[calc(100vh-55px)] bg-lightgrey fixed left-0">
        <button className="bg-accentpink h-[30px] rounded-md">Dashboard</button>
        <button className="bg-accentpink h-[30px] rounded-md" >Reports</button>
        <button className="bg-accentpink h-[30px] rounded-md" >LP Trading</button>
        <button className="bg-accentpink h-[30px] rounded-md" >Trading History</button>
        <button className="bg-accentpink h-[30px] rounded-md mt-auto flex items-center justify-center gap-2" ><span>Code Maintenance</span><IoIosArrowUp /></button>
      </nav>
      {/* Main Section (expense rate) */}
      <section className="py-4 px-4 w-3/4 ml-[25%]">
        <div className="flex flex-col gap-4 mb-[50px]">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold">Exchange Rates</h2>
            <form>
              <select name="currency" className="rounded border-[0.5px] border-deepgrey w-[300px] h-[40px] outline-none">
                <option value="cedis"><span>Cedis</span> <FaCediSign /></option>
                <option value="naira">Naira</option>
                <option value="shilling">Shilling</option>
                <option value="rand">Rand</option>
              </select>
            </form>
          </div>
          <div className="graph border border-blue-600 flex gap-4">
            <div className="border border-yellow-600 w-1/3 aspect-video bg-blue-200">
              Graph 1
            </div>
            <div className="border border-yellow-600 w-1/3 aspect-video bg-blue-200">
              Graph 2
            </div>
            <div className="border border-yellow-600 w-1/3 aspect-video bg-blue-200">
              Graph 3
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold">Recent Requests</h2>
            <button className="px-2 font-medium h-[40px] border-2 rounded-md border-accentmagenta">View All Requests</button>
          </div>
          <table className="">
            <thead>
              <tr className="border-y-2 border-white bg-deepgrey text-center h-[50px]">
                <th scope="col">Provider</th>
                <th scope="col">Broker</th>
                <th scope="col">Client ID</th>
                <th scope="col">Transaction Amount</th>
                <th scope="col">Transaction ID</th>
                <th scope="col">Status</th>
                <th scope="col">Date</th>
              </tr>
            </thead>
            <tbody className="text-center">
              <tr className="bg-lightgrey border-y-2 border-white h-[35px]">
                <td>Example</td>
                <td>CDH</td>
                <td>123466</td>
                <td>23,400.00</td>
                <td>56789</td>
                <td>Fullfilled</td>
                <td>01-09-2023</td>
              </tr>
              <tr className="bg-lightgrey border-y-2 border-white h-[35px]">
                <td>Example</td>
                <td>GoldCoast</td>
                <td>123456</td>
                <td>1,200,000.00</td>
                <td>56789</td>
                <td>Pending</td>
                <td>01-09-2023</td>
              </tr>
              <tr className="bg-lightgrey border-y-2 border-white h-[35px]">
                <td>Example</td>
                <td>CDH</td>
                <td>123466</td>
                <td>23,400.00</td>
                <td>56789</td>
                <td>Fullfilled</td>
                <td>01-09-2023</td>
              </tr>
              <tr className="bg-lightgrey border-y-2 border-white h-[35px]">
                <td>Example</td>
                <td>GoldCoast</td>
                <td>123456</td>
                <td>1,200,000.00</td>
                <td>56789</td>
                <td>Pending</td>
                <td>01-09-2023</td>
              </tr>
              <tr className="bg-lightgrey border-y-2 border-white h-[35px]">
                <td>Example</td>
                <td>CDH</td>
                <td>123466</td>
                <td>23,400.00</td>
                <td>56789</td>
                <td>Fullfilled</td>
                <td>01-09-2023</td>
              </tr>
              <tr className="bg-lightgrey border-y-2 border-white h-[35px]">
                <td>Example</td>
                <td>GoldCoast</td>
                <td>123456</td>
                <td>1,200,000.00</td>
                <td>56789</td>
                <td>Pending</td>
                <td>01-09-2023</td>
              </tr>
              <tr className="bg-lightgrey border-y-2 border-white h-[35px]">
                <td>Example</td>
                <td>CDH</td>
                <td>123466</td>
                <td>23,400.00</td>
                <td>56789</td>
                <td>Fullfilled</td>
                <td>01-09-2023</td>
              </tr>
              <tr className="bg-lightgrey border-y-2 border-white h-[35px]">
                <td>Example</td>
                <td>GoldCoast</td>
                <td>123456</td>
                <td>1,200,000.00</td>
                <td>56789</td>
                <td>Pending</td>
                <td>01-09-2023</td>
              </tr>
              <tr className="bg-lightgrey border-y-2 border-white h-[35px]">
                <td>Example</td>
                <td>CDH</td>
                <td>123466</td>
                <td>23,400.00</td>
                <td>56789</td>
                <td>Fullfilled</td>
                <td>01-09-2023</td>
              </tr>
              <tr className="bg-lightgrey border-y-2 border-white h-[35px]">
                <td>Example</td>
                <td>GoldCoast</td>
                <td>123456</td>
                <td>1,200,000.00</td>
                <td>56789</td>
                <td>Pending</td>
                <td>01-09-2023</td>
              </tr>
              <tr className="bg-lightgrey border-y-2 border-white h-[35px]">
                <td>Example</td>
                <td>CDH</td>
                <td>123466</td>
                <td>23,400.00</td>
                <td>56789</td>
                <td>Fullfilled</td>
                <td>01-09-2023</td>
              </tr>
              <tr className="bg-lightgrey border-y-2 border-white h-[35px]">
                <td>Example</td>
                <td>GoldCoast</td>
                <td>123456</td>
                <td>1,200,000.00</td>
                <td>56789</td>
                <td>Pending</td>
                <td>01-09-2023</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  )
}

export default EquityPage
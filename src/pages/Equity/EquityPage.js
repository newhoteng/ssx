import React from 'react';
import { IoIosArrowUp } from "react-icons/io";
import { FaCediSign } from "react-icons/fa6";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Line } from "react-chartjs-2";

// https://ssx-or60.onrender.com/

import cediDollar from "../../data/CediDollar.json";
import cediEuro from "../../data/CediEuro.json";
import cediPounds from "../../data/CediPound.json";

// defaults.maintainAspectRatio = false;
defaults.responsive = true;

// defaults.plugins.title.display = true;
// defaults.plugins.title.align = "start";
// defaults.plugins.title.font.size = true;
// defaults.plugins.title.color = "#374151";
// max-w-[1504px]

const EquityPage = () => {
  return (
    <main className="flex my-0 mx-auto py-0 relative top-[55px]">
      {/* Side Nav */}
      <nav className="px-8 py-4 flex flex-col items-cente gap-6 w-1/4 h-[calc(100vh-55px)] bg-lightgrey fixed">
        <button className="bg-accentpink h-[30px] rounded-md text-white">Dashboard</button>
        <button className="bg-accentpink h-[30px] rounded-md text-white" >Reports</button>
        <button className="bg-accentpink h-[30px] rounded-md text-white" >LP Trading</button>
        <button className="bg-accentpink h-[30px] rounded-md text-white" >Trading History</button>
        <button className="bg-accentpink h-[30px] rounded-md text-white mt-auto flex items-center justify-center gap-2" ><span>Code Maintenance</span><IoIosArrowUp /></button>
      </nav>
      {/* Main Section (expense rate) */}
      <section className="py-4 px-8 w-3/4 ml-[25%]">
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
          <div className="flex flex-col xl:flex-row gap-4">
            <div className="border rounded-md xl:w-1/3 aspect-video xl:aspect-video bg-lightgrey">
              <Line data={{
                labels: cediDollar.map((data) => data.label),
                datasets: [
                  {
                    label: "USD Exchange Rate (last 5 days)",
                    data: cediDollar.map((data) => data.rate),
                    borderColor: "#010050",
                    backgroundColor: "#010050",
                  }
                ],
              }}
              options={{
                elements: {
                  line: {
                    tension: 0.5,
                  }
                },
              }}
               />
            </div>
            <div className="border rounded-md xl:w-1/3 aspect-video xl:aspect-video bg-lightgrey">
              <Line data={{
                labels: cediEuro.map((data) => data.label),
                datasets: [
                  {
                    label: "EUR Exchange Rate (last 5 days)",
                    data: cediEuro.map((data) => data.rate),
                    borderColor: "#010050",
                    backgroundColor: "#010050",
                  }
                ],
              }}
              options={{
                elements: {
                  line: {
                    tension: 0.5,
                  }
                },
              }}
               />
            </div>
            <div className="border rounded-md xl:w-1/3 aspect-video xl:aspect-video bg-lightgrey">
              <Line data={{
                labels: cediPounds.map((data) => data.label),
                datasets: [
                  {
                    label: "GBP Exchange Rate (last 5 days)",
                    data: cediPounds.map((data) => data.rate),
                    borderColor: "#010050",
                    backgroundColor: "#010050",
                  }
                ],
              }}
              options={{
                elements: {
                  line: {
                    tension: 0.5,
                  }
                },
              }}
               />
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
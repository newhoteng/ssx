import React from 'react';
import { Chart as ChartJS} from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { PiCaretDownLight } from 'react-icons/pi';
import { FaCediSign } from "react-icons/fa6";

import cediDollar from "../../data/CediDollar.json";
import cediEuro from "../../data/CediEuro.json";
import cediPounds from "../../data/CediPound.json";


const ExchangeRates = () => {
  return (
    <div className="flex flex-col gap-4 mb-[50px] border-[1px] rounded-md border-[#E5E7EB] bg-white px-8 py-6">
          <div className="flex sm:flex-row flex-col items-center gap-4 sm:justify-between">
            <h2 className="font-medium font-['Fira_Sans'] text-[17px] text-[#0B66B4]">Exchange Rates</h2>
            <form>
              <div className="relative">
                <select name="currency" className="bg-transparent relative appearance-none px-2 rounded border-[0.5px] border-deepgrey w-[300px] h-[40px] z-10 outline-none">
                  <option value="cedis">Cedis</option>
                  <option value="naira">Naira</option>
                  <option value="shilling">Shilling</option>
                  <option value="rand">Rand</option>
                </select>
                <PiCaretDownLight className="rounded h-[40px] w-[40px] p-[10px] absolute right-0 top-0" />
              </div>
            </form>
          </div>
          <div className="max-xl:flex-col flex flex-wrap justify-center items-center gap-8">
            <div className="max-xl:w-3/4 w-2/5">
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
                    tension: 0,
                  }
                },
              }}
               />
            </div>
            <div className="max-xl:w-3/4 w-2/5">
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
                  // line: {
                  //   tension: 0.5,
                  // }
                },
              }}
               />
            </div>
            <div className="max-xl:w-3/4 w-2/5">
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
                  // line: {
                  //   tension: 0.5,
                  // }
                },
              }}
               />
            </div>
          </div>
        </div>
  )
}

export default ExchangeRates
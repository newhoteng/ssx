import React from 'react';
import { Chart as ChartJS} from "chart.js/auto";
import { Line } from "react-chartjs-2";
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
              <select name="currency" className="rounded border-[0.5px] border-deepgrey w-[300px] h-[40px] outline-none">
                <option value="cedis">Cedis</option>
                <option value="naira">Naira</option>
                <option value="shilling">Shilling</option>
                <option value="rand">Rand</option>
              </select>
            </form>
          </div>
          <div className="flex flex-col xl:flex-row flex-wrap gap-4 border border-red-600">
            <div className="xl:w-1/2 aspect-video">
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
            <div className="border rounded-md xl:w-1/2 aspect-video xl:aspect-video bg-lightgrey">
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
            <div className="border rounded-md xl:w-1/2 aspect-video xl:aspect-video bg-lightgrey">
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
  )
}

export default ExchangeRates
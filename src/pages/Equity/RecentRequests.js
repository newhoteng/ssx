import React from 'react';

const RecentRequests = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h2 className="font-bold">Recent Requests</h2>
        <button className="px-2 font-medium h-[40px] border-2 rounded-md border-accentmagenta">View All Requests</button>
      </div>
      <table className="">
        <thead>
          <tr className="border-y-2 border-white bg-deepgrey text-center h-[50px] tab-head">
            <th className="sm:table-cell hidden" scope="col">Provider</th>
            <th className="sm:table-cell hidden" scope="col">Broker</th>
            <th scope="col">Client ID</th>
            <th className="text-wrap" scope="col">Transaction Amount</th>
            <th className="sm:table-cell hidden" scope="col">Transaction ID</th>
            <th scope="col">Status</th>
            <th className="sm:table-cell hidden" scope="col">Date</th>
          </tr>
        </thead>
        <tbody className="text-center">
          <tr className="bg-lightgrey border-y-2 border-white h-[35px]">
            <td className="sm:table-cell hidden">Example</td>
            <td className="sm:table-cell hidden">CDH</td>
            <td>123466</td>
            <td>23,400.00</td>
            <td className="sm:table-cell hidden">56789</td>
            <td>Fullfilled</td>
            <td className="sm:table-cell hidden">01-09-2023</td>
          </tr>
          <tr className="bg-lightgrey border-y-2 border-white h-[35px]">
            <td className="sm:table-cell hidden">Example</td>
            <td className="sm:table-cell hidden">GoldCoast</td>
            <td>123456</td>
            <td>1,200,000.00</td>
            <td className="sm:table-cell hidden">56789</td>
            <td>Pending</td>
            <td className="sm:table-cell hidden">01-09-2023</td>
          </tr>
          <tr className="bg-lightgrey border-y-2 border-white h-[35px]">
            <td className="sm:table-cell hidden">Example</td>
            <td className="sm:table-cell hidden">CDH</td>
            <td>123466</td>
            <td>23,400.00</td>
            <td className="sm:table-cell hidden">56789</td>
            <td>Fullfilled</td>
            <td className="sm:table-cell hidden">01-09-2023</td>
          </tr>
          <tr className="bg-lightgrey border-y-2 border-white h-[35px]">
            <td className="sm:table-cell hidden">Example</td>
            <td className="sm:table-cell hidden">GoldCoast</td>
            <td>123456</td>
            <td>1,200,000.00</td>
            <td className="sm:table-cell hidden">56789</td>
            <td>Pending</td>
            <td className="sm:table-cell hidden">01-09-2023</td>
          </tr>
          <tr className="bg-lightgrey border-y-2 border-white h-[35px]">
            <td className="sm:table-cell hidden">Example</td>
            <td className="sm:table-cell hidden">CDH</td>
            <td>123466</td>
            <td>23,400.00</td>
            <td className="sm:table-cell hidden">56789</td>
            <td>Fullfilled</td>
            <td className="sm:table-cell hidden">01-09-2023</td>
          </tr>
          <tr className="bg-lightgrey border-y-2 border-white h-[35px]">
            <td className="sm:table-cell hidden">Example</td>
            <td className="sm:table-cell hidden">GoldCoast</td>
            <td>123456</td>
            <td>1,200,000.00</td>
            <td className="sm:table-cell hidden">56789</td>
            <td>Pending</td>
            <td className="sm:table-cell hidden">01-09-2023</td>
          </tr>
          <tr className="bg-lightgrey border-y-2 border-white h-[35px]">
            <td className="sm:table-cell hidden">Example</td>
            <td className="sm:table-cell hidden">CDH</td>
            <td>123466</td>
            <td>23,400.00</td>
            <td className="sm:table-cell hidden">56789</td>
            <td>Fullfilled</td>
            <td className="sm:table-cell hidden">01-09-2023</td>
          </tr>
          <tr className="bg-lightgrey border-y-2 border-white h-[35px]">
            <td className="sm:table-cell hidden">Example</td>
            <td className="sm:table-cell hidden">GoldCoast</td>
            <td>123456</td>
            <td>1,200,000.00</td>
            <td className="sm:table-cell hidden">56789</td>
            <td>Pending</td>
            <td className="sm:table-cell hidden">01-09-2023</td>
          </tr>
          <tr className="bg-lightgrey border-y-2 border-white h-[35px]">
            <td className="sm:table-cell hidden">Example</td>
            <td className="sm:table-cell hidden">CDH</td>
            <td>123466</td>
            <td>23,400.00</td>
            <td className="sm:table-cell hidden">56789</td>
            <td>Fullfilled</td>
            <td className="sm:table-cell hidden">01-09-2023</td>
          </tr>
          <tr className="bg-lightgrey border-y-2 border-white h-[35px]">
            <td className="sm:table-cell hidden">Example</td>
            <td className="sm:table-cell hidden">GoldCoast</td>
            <td>123456</td>
            <td>1,200,000.00</td>
            <td className="sm:table-cell hidden">56789</td>
            <td>Pending</td>
            <td className="sm:table-cell hidden">01-09-2023</td>
          </tr>
          <tr className="bg-lightgrey border-y-2 border-white h-[35px]">
            <td className="sm:table-cell hidden">Example</td>
            <td className="sm:table-cell hidden">CDH</td>
            <td>123466</td>
            <td>23,400.00</td>
            <td className="sm:table-cell hidden">56789</td>
            <td>Fullfilled</td>
            <td className="sm:table-cell hidden">01-09-2023</td>
          </tr>
          <tr className="bg-lightgrey border-y-2 border-white h-[35px]">
            <td className="sm:table-cell hidden">Example</td>
            <td className="sm:table-cell hidden">GoldCoast</td>
            <td>123456</td>
            <td>1,200,000.00</td>
            <td className="sm:table-cell hidden">56789</td>
            <td>Pending</td>
            <td className="sm:table-cell hidden">01-09-2023</td>
          </tr>
          <tr className="bg-lightgrey border-y-2 border-white h-[35px]">
            <td className="sm:table-cell hidden">Example</td>
            <td className="sm:table-cell hidden">CDH</td>
            <td>123466</td>
            <td>23,400.00</td>
            <td className="sm:table-cell hidden">56789</td>
            <td>Fullfilled</td>
            <td className="sm:table-cell hidden">01-09-2023</td>
          </tr>
          <tr className="bg-lightgrey border-y-2 border-white h-[35px]">
            <td className="sm:table-cell hidden">Example</td>
            <td className="sm:table-cell hidden">GoldCoast</td>
            <td>123456</td>
            <td>1,200,000.00</td>
            <td className="sm:table-cell hidden">56789</td>
            <td>Pending</td>
            <td className="sm:table-cell hidden">01-09-2023</td>
          </tr>
          <tr className="bg-lightgrey border-y-2 border-white h-[35px]">
            <td className="sm:table-cell hidden">Example</td>
            <td className="sm:table-cell hidden">CDH</td>
            <td>123466</td>
            <td>23,400.00</td>
            <td className="sm:table-cell hidden">56789</td>
            <td>Fullfilled</td>
            <td className="sm:table-cell hidden">01-09-2023</td>
          </tr>
          <tr className="bg-lightgrey border-y-2 border-white h-[35px]">
            <td className="sm:table-cell hidden">Example</td>
            <td className="sm:table-cell hidden">GoldCoast</td>
            <td>123456</td>
            <td>1,200,000.00</td>
            <td className="sm:table-cell hidden">56789</td>
            <td>Pending</td>
            <td className="sm:table-cell hidden">01-09-2023</td>
          </tr>
          <tr className="bg-lightgrey border-y-2 border-white h-[35px]">
            <td className="sm:table-cell hidden">Example</td>
            <td className="sm:table-cell hidden">CDH</td>
            <td>123466</td>
            <td>23,400.00</td>
            <td className="sm:table-cell hidden">56789</td>
            <td>Fullfilled</td>
            <td className="sm:table-cell hidden">01-09-2023</td>
          </tr>
          <tr className="bg-lightgrey border-y-2 border-white h-[35px]">
            <td className="sm:table-cell hidden">Example</td>
            <td className="sm:table-cell hidden">GoldCoast</td>
            <td>123456</td>
            <td>1,200,000.00</td>
            <td className="sm:table-cell hidden">56789</td>
            <td>Pending</td>
            <td className="sm:table-cell hidden">01-09-2023</td>
          </tr>
          
        </tbody>
      </table>
    </div>
  )
}

export default RecentRequests
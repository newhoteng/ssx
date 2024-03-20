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
  )
}

export default RecentRequests
import React, { useState } from 'react';
import requestData from '../../data/Mock_request_data.json;'

const RecentRequests = () => {
  const [ hiddenRowClass, setHiddenRowClass ] = useState('hidden');
  const [ data, setData ] = useState(requestData)

  const updateRowVisibility = () => {
    if (hiddenRowClass == "hidden") {
      setHiddenRowClass('visible');
    } else {
      setHiddenRowClass('hidden');
    }
  };

  return (
    <div className="flex flex-col gap-4 border-[1px] rounded-md border-[#E5E7EB] bg-white py-6 px-8">
      <div className="flex items-center justify-between">
        <h2 className="font-medium font-['Fira_Sans'] text-[17px] text-[#0B66B4]">Recent Requests</h2>
        <button
          type="button"
          className="px-3 text-[16px] h-[35px] border-2 rounded-md border-[#0B6CB4] text-[#0B6CB4] hover:text-white hover:bg-[#0B6CB4]"
          onClick={updateRowVisibility}
        >
          {hiddenRowClass == 'hidden' ? 'View All Requests' : 'View Less Requests'}
        </button>
      </div>
      <table className="">
        <thead>
          <tr className="text-center h-[50px] tab-head">
            <th className="sm:table-cell hidden" scope="col">Provider</th>
            <th className="sm:table-cell hidden" scope="col">Broker</th>
            <th scope="col">Client ID</th>
            <th className="text-wrap" scope="col">Transaction Amount</th>
            <th className="sm:table-cell hidden" scope="col">Transaction ID</th>
            <th scope="col">Status</th>
            <th className="sm:table-cell hidden" scope="col">Date</th>
          </tr>
        </thead>
        <tbody className="text-center font-light">
          {data.map((d) => (
            <tr
              className="h-[35px]"
              key={d.transaction_id}
            >
              <td className="sm:table-cell hidden">{d.provider}</td>
              <td className="sm:table-cell hidden">{d.broker}</td>
              <td>123466</td>
              <td>23,400.00</td>
              <td className="sm:table-cell hidden">56789</td>
              <td>Fullfilled</td>
              <td className="sm:table-cell hidden">01-09-2023</td>
            </tr>
          ))}
          <tr className="h-[35px]">
            <td className="sm:table-cell hidden">Example</td>
            <td className="sm:table-cell hidden">CDH</td>
            <td>123466</td>
            <td>23,400.00</td>
            <td className="sm:table-cell hidden">56789</td>
            <td>Fullfilled</td>
            <td className="sm:table-cell hidden">01-09-2023</td>
          </tr>
          <tr className="h-[35px]">
            <td className="sm:table-cell hidden">Example</td>
            <td className="sm:table-cell hidden">GoldCoast</td>
            <td>123456</td>
            <td>1,200,000.00</td>
            <td className="sm:table-cell hidden">56789</td>
            <td>Pending</td>
            <td className="sm:table-cell hidden">01-09-2023</td>
          </tr>
          <tr className="h-[35px]">
            <td className="sm:table-cell hidden">Example</td>
            <td className="sm:table-cell hidden">CDH</td>
            <td>123466</td>
            <td>23,400.00</td>
            <td className="sm:table-cell hidden">56789</td>
            <td>Fullfilled</td>
            <td className="sm:table-cell hidden">01-09-2023</td>
          </tr>
          <tr className="h-[35px]">
            <td className="sm:table-cell hidden">Example</td>
            <td className="sm:table-cell hidden">GoldCoast</td>
            <td>123456</td>
            <td>1,200,000.00</td>
            <td className="sm:table-cell hidden">56789</td>
            <td>Pending</td>
            <td className="sm:table-cell hidden">01-09-2023</td>
          </tr>
          <tr className="h-[35px]">
            <td className="sm:table-cell hidden">Example</td>
            <td className="sm:table-cell hidden">CDH</td>
            <td>123466</td>
            <td>23,400.00</td>
            <td className="sm:table-cell hidden">56789</td>
            <td>Fullfilled</td>
            <td className="sm:table-cell hidden">01-09-2023</td>
          </tr>
          <tr className={`${hiddenRowClass} h-[35px]`}>
            <td className="sm:table-cell hidden">Example</td>
            <td className="sm:table-cell hidden">GoldCoast</td>
            <td>123456</td>
            <td>1,200,000.00</td>
            <td className="sm:table-cell hidden">56789</td>
            <td>Pending</td>
            <td className="sm:table-cell hidden">01-09-2023</td>
          </tr>
          <tr className={`${hiddenRowClass} h-[35px]`}>
            <td className="sm:table-cell hidden">Example</td>
            <td className="sm:table-cell hidden">CDH</td>
            <td>123466</td>
            <td>23,400.00</td>
            <td className="sm:table-cell hidden">56789</td>
            <td>Fullfilled</td>
            <td className="sm:table-cell hidden">01-09-2023</td>
          </tr>
          <tr className={`${hiddenRowClass} h-[35px]`}>
            <td className="sm:table-cell hidden">Example</td>
            <td className="sm:table-cell hidden">GoldCoast</td>
            <td>123456</td>
            <td>1,200,000.00</td>
            <td className="sm:table-cell hidden">56789</td>
            <td>Pending</td>
            <td className="sm:table-cell hidden">01-09-2023</td>
          </tr>
          <tr className={`${hiddenRowClass} h-[35px]`}>
            <td className="sm:table-cell hidden">Example</td>
            <td className="sm:table-cell hidden">CDH</td>
            <td>123466</td>
            <td>23,400.00</td>
            <td className="sm:table-cell hidden">56789</td>
            <td>Fullfilled</td>
            <td className="sm:table-cell hidden">01-09-2023</td>
          </tr>
          <tr className={`${hiddenRowClass} h-[35px]`}>
            <td className="sm:table-cell hidden">Example</td>
            <td className="sm:table-cell hidden">GoldCoast</td>
            <td>123456</td>
            <td>1,200,000.00</td>
            <td className="sm:table-cell hidden">56789</td>
            <td>Pending</td>
            <td className="sm:table-cell hidden">01-09-2023</td>
          </tr>
          <tr className={`${hiddenRowClass} h-[35px]`}>
            <td className="sm:table-cell hidden">Example</td>
            <td className="sm:table-cell hidden">CDH</td>
            <td>123466</td>
            <td>23,400.00</td>
            <td className="sm:table-cell hidden">56789</td>
            <td>Fullfilled</td>
            <td className="sm:table-cell hidden">01-09-2023</td>
          </tr>
          <tr className={`${hiddenRowClass} h-[35px]`}>
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
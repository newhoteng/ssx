import React, { useState } from 'react';
import { FaSort } from "react-icons/fa";
import requestData from '../../data/Mock_request_data.json';

const RecentRequests = () => {
  const [ rowsToDisplay, setRowsToDisplay ] = useState(5)
  const [ data, setData ] = useState(requestData.slice(0, rowsToDisplay))
  const [ order, setOrder ] = useState('ASC')

  const sorting = (col) => {
    if (order === 'ASC') {
      const sorted = [...data].sort((a, b) => 
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      setData(sorted);
      setOrder("DSC");
    }
    if (order === 'DSC') {
      const sorted = [...data].sort((a, b) => 
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
      setData(sorted);
      setOrder("ASC");
    }
  }

  const sortingDateCol = (col) => {
    if (order === 'DSC') {
      const sorted = [...data].sort((a, b) => {
        let alist = a[col].split("/")
        let blist = b[col].split("/")
        return new Date(alist[2], alist[1], alist[0]) - new Date(blist[2], blist[1], blist[0]);
      })
      setData(sorted);
      setOrder("ASC");
    }
    if (order === 'ASC') {
      const sorted = [...data].sort((a, b) => {
        let alist = a[col].split("/")
        let blist = b[col].split("/")
        return new Date(blist[2], blist[1], blist[0]) - new Date(alist[2], alist[1], alist[0]);
      })
      setData(sorted);
      setOrder("DSC");
    }
  }

  const sortingAmountCol = (col) => {
    if (order === 'DSC') {
      const sorted = [...data].sort((a, b) => {
        let aVal = a[col].substring(1)
        let bVal = b[col].substring(1)
        return parseFloat(aVal) - parseFloat(bVal);
      })
      setData(sorted);
      setOrder("ASC");
    }
    if (order === 'ASC') {
      const sorted = [...data].sort((a, b) => {
        let aVal = a[col].substring(1)
        let bVal = b[col].substring(1)
        return parseFloat(bVal) - parseFloat(aVal);
      })
      setData(sorted);
      setOrder("DSC");
    }
  }

  const updateRowVisibility = () => {
    if (rowsToDisplay == 5) {
      setData(requestData)
      setRowsToDisplay(requestData.length);
    } if (rowsToDisplay !== 5) {
      setData(requestData.slice(0, 5))
      setRowsToDisplay(5);
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
          {rowsToDisplay === 5 ? 'View All Requests' : 'View Less Requests'}
        </button>
      </div>
      <table className="">
        <thead>
          <tr className="text-center h-[50px] tab-head">
            <th onClick={() => sorting('provider')} className="sm:table-cell hidden" scope="col"><div className='flex items-center justify-center gap-1'><span>Provider</span><FaSort className='text-gray-400' /></div></th>
            <th onClick={() => sorting('broker')} className="sm:table-cell hidden" scope="col"><div className='flex items-center justify-center gap-1'><span>Broker</span><FaSort className='text-gray-400' /></div></th>
            <th scope="col">Client ID</th>
            <th onClick={() => sortingAmountCol('transaction_amount')} className="text-wrap" scope="col"><div className='flex items-center justify-center gap-1'><span>Transaction Amount</span><FaSort className='text-gray-400' /></div></th>
            <th className="sm:table-cell hidden" scope="col">Transaction ID</th>
            <th onClick={() => sorting('status')} scope="col"><div className='flex items-center justify-center gap-1'><span>Status</span><FaSort className='text-gray-400' /></div></th>
            <th onClick={() => sortingDateCol('date')} className="sm:table-cell hidden" scope="col"><div className='flex items-center justify-center gap-1'><span>Date</span><FaSort className='text-gray-400' /></div></th>
          </tr>
        </thead>
        <tbody className="text-center font-light">
          {data.map((d) => (
            <tr
                className={`h-[35px]`}
                key={d.id}
            >
              <td className="sm:table-cell hidden">{d.provider}</td>
              <td className="sm:table-cell hidden">{d.broker}</td>
              <td>{d.client_id}</td>
              <td>{d.transaction_amount}</td>
              <td className="sm:table-cell hidden">{d.transaction_id}</td>
              <td>{d.status}</td>
              <td className="sm:table-cell hidden">{d.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default RecentRequests
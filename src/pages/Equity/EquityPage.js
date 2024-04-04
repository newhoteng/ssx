import React from 'react';
import SideNav from './SideNav';
import ExchangeRates from './ExchangeRates';
import RecentRequests from './RecentRequests';

// https://ssx-or60.onrender.com/

const EquityPage = () => {
  return (
    <main className="flex my-0 mx-auto py-0 relative top-[107px]">
      <SideNav />
      <section className="py-8 pr-2 xl:pr-8 w-full lg:w-3/4 lg:ml-[25%] px-2 xl:px-0">
        <ExchangeRates />
        <RecentRequests />
      </section>
    </main>
  )
}

export default EquityPage

// className="py-4 px-2 xl:px-8 w-full lg:w-3/4 lg:ml-[25%] border-4 border-blue-600 bg-white"
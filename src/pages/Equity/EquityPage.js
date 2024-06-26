import React from 'react';
import SideNav from './SideNav';
import ExchangeRates from './ExchangeRates';
import RecentRequests from './RecentRequests';

// https://ssx-or60.onrender.com/ px-2 xl:px-8 lg:px-6

const EquityPage = () => {
  return (
    <main className="flex my-0 mx-auto py-0 relative top-[107px]">
      <SideNav />
      <section className="py-8 pr-2 lg:pr-6 xl:pr-8 w-full lg:w-3/4 lg:ml-[25%] px-2 xl:px-0">
        <ExchangeRates />
        <RecentRequests />
      </section>
    </main>
  )
}

export default EquityPage

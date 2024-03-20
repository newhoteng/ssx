import React from 'react';
import SideNav from './SideNav';
import ExchangeRates from './ExchangeRates';
import RecentRequests from './RecentRequests';

// https://ssx-or60.onrender.com/

// defaults.maintainAspectRatio = false;
// defaults.responsive = true;

const EquityPage = () => {
  return (
    <main className="flex my-0 mx-auto py-0 relative top-[55px]">
      <SideNav />
      <section className="py-4 px-2 xl:px-8 w-full lg:w-3/4 lg:ml-[25%]">
        <ExchangeRates />
        <RecentRequests />
      </section>
    </main>
  )
}

export default EquityPage
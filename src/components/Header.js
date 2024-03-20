import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { IoIosNotificationsOutline } from "react-icons/io";
import { AiOutlineBug } from "react-icons/ai";

const Header = () => {
  // Style for active link
  const navLinkStyles = ({ isActive }) => ({
    fontWeight: isActive ? '700' : '400',
  });

  return (
    <>
      <header className='border'>
        <div className="bg-gray-200 flex border-red-600 border h-[55px] max-w-[1504px] my-0 mx-auto px-2 py-0 ">
          <div>
            <div>
              <img className="" src="" alt="company logo" />
            </div>
            <nav className='border border-blue-500 flex justify-center'>
              <NavLink style={navLinkStyles} to="/">Equity</NavLink>
              <NavLink style={navLinkStyles} to="/fixedincome">Fixed Income</NavLink>
              <NavLink style={navLinkStyles} to="/myaccounts">My Accounts</NavLink>
              <NavLink style={navLinkStyles} to="/newsroom">Newsroom</NavLink>
              <NavLink style={navLinkStyles} to="/research">Research</NavLink>
              <NavLink style={navLinkStyles} to="/marketdata">Market Data</NavLink>
              <NavLink style={navLinkStyles} to="/analytics">Analytics</NavLink>
              <NavLink style={navLinkStyles} to="/liquidity">Liquidity</NavLink>
            </nav>
          </div>
          <div>
            <button className="bg-violet-600 text-white">Request LP</button>
            <button className="w-5 h-5 border-r"><AiOutlineBug /></button>
            <button><IoIosNotificationsOutline /></button>
            <button>HO</button>
          </div>
        </div>

      </header>
      <Outlet />
    </>
  )
}

export default Header
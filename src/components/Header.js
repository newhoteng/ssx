import React, { useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { IoIosNotificationsOutline } from "react-icons/io";
import { VscBug } from "react-icons/vsc";
import { IoIosArrowDown } from "react-icons/io";
import CompanyLogo from "../assets/favicon.webp"

const Header = () => {
  const [menuClass, setMenuClass] = useState('menu hidden');
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    if (!isMenuClicked) {
      setMenuClass('menu visible');
    } else {
      setMenuClass('menu hidden');
    }
    setIsMenuClicked(!isMenuClicked);
  };


  // Style for active link
  const navLinkStyles = ({ isActive }) => ({
    fontWeight: isActive ? '700' : '500',
  });

  // max-w-[1504px]
  return (
    <>
      <header className="bg-gray-200 fixed w-full z-[10]">
        <div className="flex justify-between items-center h-[55px] my-0 mx-auto px-8 py-0 ">
          <div className="flex items-center justify-center gap-6">
            <div className="w-[40px] h-[40px] flex items-center justify-center">
              <img className="" src={CompanyLogo} alt="company logo" />
            </div>
            <nav className="px-3 h-[40px] rounded-full border-2 border-accentmagenta flex justify-center items-center gap-3">
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
          <div className="flex items-center justify-center gap-3 border relative">
            <button className="mr-[12px] flex items-center justify-center px-2 bg-accentmagenta text-white rounded-md h-[40px]">Request LP</button>
            <button className="bg-white text-lg rounded-full flex items-center justify-center w-[40px] h-[40px]"><VscBug /></button>
            <button className="bg-white text-xl rounded-full flex items-center justify-center w-[40px] h-[40px]"><IoIosNotificationsOutline /></button>
            <button onClick={updateMenu} className="bg-white rounded-full flex items-center justify-center w-[40px] h-[40px] relative"><span>HO</span><IoIosArrowDown className="absolute w-[40px] bottom-[-1px] text-gray-400" /></button>
            <div id="sign-out" className={`${menuClass} bg-white h-[35px] px-2 absolute right-0 bottom-[-40px] flex items-center justify-center cursor-pointer`}>Sign Out</div>
          </div>
        </div>
      </header>
      <Outlet />
    </>
  )
}

export default Header
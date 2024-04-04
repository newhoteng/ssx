import React, { useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { IoIosNotificationsOutline } from "react-icons/io";
import { VscBug } from "react-icons/vsc";
import { PiCaretDownLight } from 'react-icons/pi';
import CompanyLogo from "../assets/favicon.webp"

const Header = () => {
  
  // User click action
  const [signOutClass, setSignOutClass] = useState('sign-out hidden');
  const [isUserClicked, setIsUserClicked] = useState(false);

  const updateUser = () => {
    if (!isUserClicked) {
      setSignOutClass('sign-out visible');
    } else {
      setSignOutClass('sign-out hidden');
    }
    setIsUserClicked(!isUserClicked);
  };


  // Style for active link
  const navLinkStyles = ({ isActive }) => ({
    color: isActive ? '#0B6CB4' : '',
  });

  // max-w-[1504px]
  return (
    <>
      <header className="bg-white fixed w-full z-[10] shadow-xl">
        <div className="text-[15px] h-[107px] flex justify-between items-center my-0 mx-auto px-2 xl:px-8 py-0 ">
          <div className="flex items-center justify-center xl:gap-6 md:gap-2">
            <div className="w-[40px] h-[40px] flex items-center justify-center">
              <img className="" src={CompanyLogo} alt="company logo" />
            </div>
            <nav className="text-[#032E42] px-3 h-[40px] flex justify-center items-center gap-4 font-semibold">
              <NavLink className="text-center w-min hover:text-[color:#0B6CB4]" style={navLinkStyles} to="/">EQUITY</NavLink>
              <NavLink className="text-center w-min xl:w-max hover:text-[color:#0B6CB4]" style={navLinkStyles} to="/fixedincome">FIXED INCOME</NavLink>
              <NavLink className="text-center w-min xl:w-max hover:text-[color:#0B6CB4]" style={navLinkStyles} to="/myaccounts">MY ACCOUNTS</NavLink>
              <NavLink className="text-center w-min hover:text-[color:#0B6CB4]" style={navLinkStyles} to="/newsroom">NEWSROOM</NavLink>
              <NavLink className="text-center w-min hover:text-[color:#0B6CB4]" style={navLinkStyles} to="/research">RESEARCH</NavLink>
              <NavLink className="text-center w-min xl:w-max hover:text-[color:#0B6CB4]" style={navLinkStyles} to="/marketdata">MARKET DATA</NavLink>
              <NavLink className="text-center w-min hover:text-[color:#0B6CB4]" style={navLinkStyles} to="/analytics">ANALYTICS</NavLink>
              <NavLink className="text-center w-min hover:text-[color:#0B6CB4]" style={navLinkStyles} to="/liquidity">LIQUIDITY</NavLink>
            </nav>
          </div>
          <div className="flex items-center justify-center xl:gap-3 md:gap-3 relative">
            <button className="flex items-center justify-center px-3 h-[35px] border-2 border-[#0B6CB4] text-[#0B6CB4] hover:text-white hover:bg-[#0B6CB4] rounded-md text-[16px] w-max">Request LP</button>
            <button className="text-lg"><VscBug /></button>
            <button className="text-xl"><IoIosNotificationsOutline /></button>
            <button onClick={updateUser} className="flex items-center justify-center gap-[2px]"><span className="w-[35px] h-[35px] rounded-full flex items-center justify-center  border-[0.5px] border-[#d1d2d5]" >HO</span><PiCaretDownLight className="text-lg" /></button>
            <div id="sign-out" className={`${signOutClass} bg-white h-[35px] px-2 absolute right-0 bottom-[-35px] flex items-center justify-center cursor-pointer`}>Sign Out</div>
          </div>
        </div>
      </header>
      <Outlet />
    </>
  )
}

export default Header

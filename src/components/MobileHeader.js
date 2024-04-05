import React, { useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { IoIosNotificationsOutline } from "react-icons/io";
import { VscBug } from "react-icons/vsc";
import { IoIosArrowDown } from "react-icons/io";
import { PiCaretDownLight } from 'react-icons/pi';
import CompanyLogo from "../assets/favicon.webp";
import { IoIosArrowUp } from "react-icons/io";
import { PiCaretUpLight } from 'react-icons/pi';


const MobileHeaderjs = () => {
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

  // to change burger classes
  const [burgerClass, setBurgerClass] = useState('burgerBar unclicked');
  const [menuClass, setMenuClass] = useState('menu hidden');
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const handleNavClick = () => {
    setMenuClass('menu hidden');
    setBurgerClass('burgerBar unclicked');
  };

  // toggle burger menu change
  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass('burgerBar clicked');
      setMenuClass('menu visible');
    } else {
      setBurgerClass('burgerBar unclicked');
      setMenuClass('menu hidden');
    }
    setIsMenuClicked(!isMenuClicked);
  };

  // Style for active link
  const navLinkStyles = ({ isActive }) => ({
    fontWeight: isActive ? '700' : '500',
  });

  return (
    <>
      <header className="shadow-md bg-white fixed w-full z-[10]">
        <div className="flex justify-between items-center h-[55px] my-0 mx-auto px-2 xl:px-8 py-0 ">
          <div className="flex items-center justify-center gap-6">
            <div className="w-[40px] h-[40px] flex items-center justify-center">
              <img className="" src={CompanyLogo} alt="company logo" />
            </div>
          </div>
          <div className="flex items-center justify-center gap-3 relative">
            <button className="bg-white text-lg rounded-full flex items-center justify-center w-[40px] h-[40px]"><VscBug /></button>
            <button className="bg-white text-xl rounded-full flex items-center justify-center w-[40px] h-[40px]"><IoIosNotificationsOutline /></button>
            <button onClick={updateUser} className="flex items-center justify-center gap-[2px]"><span className="w-[35px] h-[35px] rounded-full flex items-center justify-center  border-[0.5px] border-[#d1d2d5]" >HO</span><PiCaretDownLight className="text-lg" /></button>
            {/* <button onClick={updateUser} className="bg-white rounded-full flex items-center justify-center w-[40px] h-[40px] relative"><span>HO</span><IoIosArrowDown className="absolute w-[40px] bottom-[-1px] text-gray-400" /></button> */}
            <div id="sign-out" className={`${signOutClass} bg-white h-[35px] px-2 absolute right-0 bottom-[-40px] flex items-center justify-center cursor-pointer`}>Sign Out</div>
            <div className="burger-menu rounded-full bg-white w-[40px] h-[40px] flex flex-col items-center justify-center gap-[3px]" onClick={updateMenu} role="presentation">
              <div className={`${burgerClass} w-1/2 border border-[#374151] bg-[#374151] h-[3px]`} />
              <div className={`${burgerClass} w-1/2 border border-[#374151] bg-[#374151] h-[3px]`} />
              <div className={`${burgerClass} w-1/2 border border-[#374151] bg-[#374151] h-[3px]`} />
            </div>
          </div>
        </div>
        <nav className={`${menuClass} px-3 py-3 w-[300px] bg-lightgrey flex flex-col text-cente items-center gap-3 absolute right-0`}>
          <NavLink onClick={handleNavClick} className="text-center w-min hover:text-[color:#0B6CB4]" style={navLinkStyles} to="/">EQUITY</NavLink>
          <NavLink onClick={handleNavClick} className="text-center w-min xl:w-max hover:text-[color:#0B6CB4]" style={navLinkStyles} to="/fixedincome">FIXED INCOME</NavLink>
          <NavLink onClick={handleNavClick} className="text-center w-min xl:w-max hover:text-[color:#0B6CB4]" style={navLinkStyles} to="/myaccounts">MY ACCOUNTS</NavLink>
          <NavLink onClick={handleNavClick} className="text-center w-min hover:text-[color:#0B6CB4]" style={navLinkStyles} to="/newsroom">NEWSROOM</NavLink>
          <NavLink onClick={handleNavClick} className="text-center w-min hover:text-[color:#0B6CB4]" style={navLinkStyles} to="/research">RESEARCH</NavLink>
          <NavLink onClick={handleNavClick} className="text-center w-min xl:w-max hover:text-[color:#0B6CB4]" style={navLinkStyles} to="/marketdata">MARKET DATA</NavLink>
          <NavLink onClick={handleNavClick} className="text-center w-min hover:text-[color:#0B6CB4]" style={navLinkStyles} to="/analytics">ANALYTICS</NavLink>
          <NavLink onClick={handleNavClick} className="text-center w-min hover:text-[color:#0B6CB4]" style={navLinkStyles} to="/liquidity">LIQUIDITY</NavLink>

          {/* <NavLink onClick={handleNavClick} style={navLinkStyles} to="/">Equity</NavLink>
          <NavLink onClick={handleNavClick} style={navLinkStyles} to="/fixedincome">Fixed Income</NavLink>
          <NavLink onClick={handleNavClick} style={navLinkStyles} to="/myaccounts">My Accounts</NavLink>
          <NavLink onClick={handleNavClick} style={navLinkStyles} to="/newsroom">Newsroom</NavLink>
          <NavLink onClick={handleNavClick} style={navLinkStyles} to="/research">Research</NavLink>
          <NavLink onClick={handleNavClick} style={navLinkStyles} to="/marketdata">Market Data</NavLink>
          <NavLink onClick={handleNavClick} style={navLinkStyles} to="/analytics">Analytics</NavLink>
          <NavLink onClick={handleNavClick} style={navLinkStyles} to="/liquidity">Liquidity</NavLink> */}

          {/* <p className="font-normal cursor-pointer" >Dashboard</p>
          <p className="font-normal cursor-pointer" >Reports</p>
          <p className="font-normal cursor-pointer" >LP Trading</p>
          <p className="font-normal cursor-pointer" >Trading History</p>
          <button onClick={updateMenu} className="font-normal mt-auto flex items-center justify-start gap-2 relative cursor-pointer" >
            <span>Code Maintenance</span>
            <PiCaretUpLight />
            <div className={`${menuClass} bg-white absolute w-full text-[#374151] top-[-80px]`}>
              <div className="h-[40px] border flex items-center justify-center">Some Menu Item</div>
              <div className="h-[40px] border flex items-center justify-center">Some Menu Item</div>
            </div>
          </button> */}

          {/* <button onClick={handleNavClick} className="flex items-center justify-center px-2 bg-accentmagenta text-white rounded-md h-[40px]">Request LP</button>
          <button onClick={handleNavClick} className="bg-accentpink h-[30px] rounded-md text-white font-medium">Dashboard</button>
          <button onClick={handleNavClick} className="bg-accentpink h-[30px] rounded-md text-white font-meduim" >Reports</button>
          <button onClick={handleNavClick} className="bg-accentpink h-[30px] rounded-md text-white font-medium" >LP Trading</button>
          <button onClick={handleNavClick} className="bg-accentpink h-[30px] rounded-md text-white font-medium" >Trading History</button>
          <button onClick={handleNavClick} className="bg-accentpink h-[30px] rounded-md text-white font-medium mt-auto flex items-center justify-center gap-2 relative" >
            <span>Code Maintenance</span>
            <IoIosArrowUp />
            <div className={`bg-white absolute w-full text-[#374151] top-[-80px] hidden`}>
              <div className="h-[40px] border flex items-center justify-center">Some Menu Item</div>
              <div className="h-[40px] border flex items-center justify-center">Some Menu Item</div>
            </div>
          </button> */}
        </nav>
      </header>
      <Outlet />
    </>
  )
}

export default MobileHeaderjs
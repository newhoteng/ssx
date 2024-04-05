import React, { useState } from 'react';
import { PiCaretUpLight } from 'react-icons/pi';

const SideNav = () => {
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

  return (
    <nav className="hidden px-2 lg:px-6 xl:px-8 py-8 lg:flex flex-col items-start gap-4 w-1/4 h-[calc(100vh-107px)] fixed text-[17px]">
      <p className="font-normal cursor-pointer" >Dashboard</p>
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
      </button>
    </nav>
  )
}

export default SideNav
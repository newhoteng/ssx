import React, { useState, useEffect } from 'react';
import MobileHeader from './MobileHeader';
import Header from './Header';

const NavBar = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 1024;

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);

    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return width < breakpoint ? <MobileHeader /> : <Header />;
};

export default NavBar;
import React from 'react';
import IconLine from '../Icons/IconLine';
import IconNotification from '../Icons/IconNotification';
import IconArrowBottomBold from '../Icons/IconArrowBottomBold';
import { pathTitle } from '../../data/path';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const title = pathTitle[location.pathname] || 'Dashboard';

  return (
    <header className='fixed bg-white w-full z-50'>
      <section className='h-[99px] flex items-center justify-between px-[49px]'>
        <h1 className='text-[45px] text-second-color'>{title}</h1>

        <section className='flex items-center gap-x-5 pr-72'>
          <IconLine />
          <div className='flex items-center gap-x-2 cursor-pointer'>
            <IconNotification />
            <IconArrowBottomBold />
          </div>
          <IconLine />
          <div className='flex items-center gap-x-2 cursor-pointer'>
            <span className='text-[22px]'>YOHANNES AFFANDY</span>
            <IconArrowBottomBold />
          </div>
          <IconLine />
        </section>
      </section>
    </header>
  );
};

export default Header;

import React, { useState } from 'react';
import PTLoanMarketLogo from '../../assets/images/logo.svg';
import LinkSide from './LinkSide';
import LinkSubMenu from './LinkSubMenu';

import IconHome from '../Icons/IconHome';
import IconContact from '../Icons/IconContact';
import IconLoan from '../Icons/IconLoan';
import IconProduct from '../Icons/IconProduct';
import IconBank from '../Icons/IconBank';
import IconCreditScoring from '../Icons/IconCreditScoring';
import IconFaqs from '../Icons/IconFaqs';
import IconPipeline from '../Icons/IconPipeline';
import IconMarketingTool from '../Icons/IconMarketingTool';
import IconDashboardLight from '../Icons/IconDashboardLight';

const Sidebar = () => {
  const [isOpenSubMenu, setIsOpenSubMenu] = useState(false);

  const toggleSubMenu = (menu) => {
    setIsOpenSubMenu((prevMenu) => (prevMenu === menu ? null : menu));
  };

  return (
    <aside className='fixed z-50 border-r border-gray-200 top-0 left-0 w-[270px] h-screen bg-white   overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]'>
      <img
        className='w-[110px] h-[110px] mx-auto'
        src={PTLoanMarketLogo}
        alt='Logo PT Loan Market'
      />

      <ul className='flex flex-col gap-4 mt-[52px] mb-10 '>
        <LinkSide
          title={'Dashboard'}
          href={'/dashboard'}
          iconDefault={<IconHome />}
          iconLight={<IconDashboardLight />}
        />

        <LinkSide title={'Contact'} href={''} iconDefault={<IconContact />} />

        <LinkSide title={'Loan'} href={''} iconDefault={<IconLoan />} />

        <div>
          <div onClick={() => toggleSubMenu('product')}>
            <LinkSide
              title={'Product'}
              href={'#'}
              iconDefault={<IconProduct />}
              openSubMenu={isOpenSubMenu === 'product'}
              disableActiveStyle
            />
          </div>

          {/* Submenu Product*/}
          {isOpenSubMenu === 'product' && (
            <ul className='  mt-[15px] flex flex-col gap-4'>
              <LinkSubMenu title={'Bank Product'} href={'/product/bank'} />
              <LinkSubMenu title={'Product'} href={'/products'} />
              <LinkSubMenu
                title={'Category Product'}
                href={'/product/category'}
              />
            </ul>
          )}
        </div>
        {/* End Submenu Product */}

        <LinkSide title={'Bank'} href={''} iconDefault={<IconBank />} />
        <LinkSide
          title={'Credit Scoring'}
          href={''}
          iconDefault={<IconCreditScoring />}
        />
        <LinkSide title={"FAQ's"} href={''} iconDefault={<IconFaqs />} />
        <LinkSide title={'Pipeline'} href={''} iconDefault={<IconPipeline />} />
        <LinkSide
          title={'Pipeline Developer'}
          href={''}
          iconDefault={<IconPipeline />}
        />
        <LinkSide
          title={'Marketing Tools'}
          href={''}
          iconDefault={<IconMarketingTool />}
        />

        <div>
          <div onClick={() => toggleSubMenu('whatsapp')}>
            <LinkSide
              title={'Whatsapp'}
              href={'#'}
              iconDefault={<IconHome />}
              openSubMenu={isOpenSubMenu === 'whatsapp'}
              disableActiveStyle
            />
          </div>

          {isOpenSubMenu === 'whatsapp' && (
            <ul className='  mt-[15px] flex flex-col gap-4'>
              <LinkSubMenu title={'All Whatsapp'} href={'/whatsapp/all'} />
              <LinkSubMenu
                title={'Contact Whatsapp'}
                href={'/whatsapp/contact'}
              />
            </ul>
          )}
        </div>
      </ul>
    </aside>
  );
};

export default Sidebar;

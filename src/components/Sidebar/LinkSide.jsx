import React from 'react';
import { NavLink } from 'react-router-dom';
import IconArrowBottom from '../Icons/IconArrowBottom';
import IconArrowTop from '../Icons/IconArrowTop';

const LinkSide = ({
  title,
  href,
  iconLight,
  iconDefault,
  disableActiveStyle,
  openSubMenu,
}) => {
  return (
    <NavLink to={href}>
      {({ isActive }) => {
        const active = isActive && !disableActiveStyle;

        return (
          <div
            className={
              active
                ? `bg-main-color h-[60px] w-[250px] max-w-full flex items-center gap-x-7 px-2 mx-auto rounded-lg text-white text-[20px] cursor-pointer`
                : `h-[60px] w-[250px] flex items-center gap-x-7 px-2 mx-auto rounded-lg text-second-color text-[20px] cursor-pointer relative`
            }
          >
            {active ? iconLight : iconDefault}
            {title}

            {disableActiveStyle && (
              <span className='absolute right-5'>
                {openSubMenu ? <IconArrowBottom /> : <IconArrowTop />}
              </span>
            )}
          </div>
        );
      }}
    </NavLink>
  );
};

export default LinkSide;

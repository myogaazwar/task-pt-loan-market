import React from 'react';
import { NavLink } from 'react-router-dom';

const LinkSubMenu = ({ href, title }) => {
  return (
    <NavLink to={href}>
      {({ isActive }) => (
        <div
          className={`${
            isActive
              ? 'bg-main-color h-[60px] w-[250px] max-w-full flex items-center pl-[71px] gap-x-7 px-2 mx-auto rounded-lg text-white text-[20px] cursor-pointer'
              : 'h-[60px] w-[250px] max-w-full flex items-center pl-[71px] gap-x-7 px-2 mx-auto rounded-lg text-second-color text-[20px] cursor-pointer'
          } `}
        >
          {title}
        </div>
      )}
    </NavLink>
  );
};

export default LinkSubMenu;

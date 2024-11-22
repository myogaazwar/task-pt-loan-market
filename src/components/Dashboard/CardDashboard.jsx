import React from 'react';

const CardDashboard = ({ title, total, icon }) => {
  return (
    <div className='bg-white h-[140px] py-[29px] px-[21px] max-w-[270px] flex items-center justify-center gap-x-9 text-center shadow-second-color shadow-sm rounded-lg'>
      {icon}
      <span>
        <p className='text-[25px] font-semibold'>{title}</p>
        <p className='text-[35px] font-bold text-main-color'>{total}</p>
      </span>
    </div>
  );
};

export default CardDashboard;

import React from 'react';

const TypeBankProduct = ({ title, icon }) => {
  return (
    <div className='w-[274px] h-[180px] gap-y-5 max-h-full bg-white flex flex-col items-center justify-between text-[#999999] shadow-md rounded-md'>
      <div className='mt-[16px]'>{icon}</div>
      <p className='text-[22px] text-center h-full'>{title}</p>
    </div>
  );
};

export default TypeBankProduct;

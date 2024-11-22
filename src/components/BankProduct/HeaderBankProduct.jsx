import React from 'react';

const HeaderBankProduct = () => {
  return (
    <div className='h-[100px] bg-white text-[30px] flex items-center justify-center gap-x-16'>
      <h3 className='h-full  w-[250px] flex items-center justify-center border-b-4 border-main-color text-main-color font-bold cursor-pointer'>
        Bank
      </h3>
      <h3 className='h-full flex items-center  justify-center  w-[250px] cursor-pointer'>
        Developer
      </h3>{' '}
    </div>
  );
};

export default HeaderBankProduct;

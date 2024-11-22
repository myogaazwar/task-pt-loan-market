import React from 'react';
import HeaderBankProduct from '../components/BankProduct/HeaderBankProduct';
import IconHomeLight from '../components/Icons/BankProduct/IconHomeLight';
import TypeBankProduct from '../components/BankProduct/TypeBankProduct';
import IconSearchBlue from '../components/Icons/BankProduct/IconSearchBlue';
import IconArrowBottomLarge from '../components/Icons/BankProduct/IconArrowBottomLarge';
import IconAlphaSort from '../components/Icons/BankProduct/IconAlphaSort';
import PlusIcon from '../assets/icons/Bank_Product/plus.png';
import IconAccount from '../components/Icons/BankProduct/IconAccount';
import IconMagneticCard from '../components/Icons/BankProduct/IconMagneticCard';
import IconMoneyBox from '../components/Icons/BankProduct/IconMoneyBox';
import IconOrganization from '../components/Icons/BankProduct/IconOrganization';

const BankProductPage = () => {
  return (
    <main className='pt-[99px] border-t-2 h-screen'>
      <HeaderBankProduct />

      <section className='flex gap-x-10 mt-7 mx-[38px]'>
        <TypeBankProduct title={'KPR dan Multiguna'} icon={<IconHomeLight />} />
        <TypeBankProduct title={'Refinancing'} icon={<IconAccount />} />
        <TypeBankProduct
          title={'Kredit Modal Usaha dan Investasi'}
          icon={<IconMagneticCard />}
        />
        <TypeBankProduct title={'KPR dan Multiguna'} icon={<IconMoneyBox />} />
        <TypeBankProduct
          title={'Take Over dan Bridging Loan'}
          icon={<IconOrganization />}
        />
      </section>

      <section className='mt-10 mx-[38px] flex gap-x-14'>
        <form className='w-[500px] h-[80px] relative shadow-md rounded-[15px]  '>
          <input
            type='text'
            name='search'
            id='search'
            maxLength={30}
            placeholder='Cari berdasarkan Nama'
            className='h-full w-full px-[34px]  rounded-[15px] text-[25px]'
          />
          <IconSearchBlue
            className={'absolute top-[20px] right-[35px] cursor-pointer'}
          />
        </form>

        <div className='bg-white w-[350px] h-[80px] flex items-center justify-between gap-x-7 px-[34px] py-[25px] rounded-[15px] shadow-md cursor-pointer'>
          <h3 className='text-[25px]'>Kredit Kepemilikan...</h3>
          <IconArrowBottomLarge />
        </div>

        <div className='bg-white w-[200px] h-[80px] flex items-center justify-between gap-x-7 px-[34px] py-[25px] rounded-[15px] shadow-md cursor-pointer'>
          <IconAlphaSort />
          <h3 className='text-[25px]'>Sort</h3>
        </div>

        <button className='bg-main-color w-[320px] h-[80px] flex items-center justify-center gap-x-7 px-[34px] py-[25px] rounded-[15px] shadow-md cursor-pointer'>
          <img src={PlusIcon} alt='' />
          <span className='text-[22px] text-white'>Tambah Product</span>
        </button>
      </section>
    </main>
  );
};

export default BankProductPage;

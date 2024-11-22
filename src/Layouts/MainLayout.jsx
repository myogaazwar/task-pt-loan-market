import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';

const MainLayout = () => {
  return (
    <main className='relative'>
      <Sidebar />

      <section className='ml-[270px]  '>
        <Header />

        <section className='bg-third-color '>
          <Outlet />
        </section>
      </section>
    </main>
  );
};

export default MainLayout;

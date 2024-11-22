import React from 'react';

import photoProfile from '../assets/images/photo_profile.svg';
import IconOffice from '../components/Icons/Dashboard/IconOffice';
import IconTallerLine from '../components/Icons/Dashboard/IconTallerLine';
import Icon_id from '../components/Icons/Dashboard/Icon_id';
import IconEmail from '../components/Icons/Dashboard/IconEmail';
import IconContactBlue from '../components/Icons/Dashboard/IconContactBlue';
import CardDashboard from '../components/Dashboard/CardDashboard';
import IconLoanBlue from '../components/Icons/Dashboard/IconLoanBlue';
import IconProductBlue from '../components/Icons/Dashboard/IconProductBlue';

import pieLoan from '../assets/icons/Dashboard/pie_loan.png';
import pieTarget from '../assets/icons/Dashboard/pie_target.png';
import IconLargestLine from '../components/Icons/Dashboard/IconLargestLine';
import History from '../components/Dashboard/History';
import IconEditBlue from '../components/Icons/Dashboard/IconEditBlue';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';
import { topBankApproval } from '../data/topBankApproval';

const DashboardPage = () => {
  return (
    <main className='h-full max-w-[1920px] '>
      <section className=' fixed flex items-center gap-x-5 h-[250px] px-[49px] mt-[95px] bg-white w-full border-2 z-50'>
        <img src={photoProfile} alt='Yohannes Affandy' />

        <section className='px-[39px] flex flex-col gap-y-[17px]'>
          <h2 className='text-main-color text-[35px] font-semibold'>
            YOHANNES AFFANDY (JOJO)
          </h2>
          <div className='flex gap-x-10  '>
            <>
              <div className='flex flex-col  gap-y-[24px]'>
                <div className='flex items-center gap-x-4'>
                  <IconOffice />
                  <span className='text-[22px] font-medium'>
                    Loan Market Office Dev
                  </span>
                </div>

                <div className='flex items-center gap-x-4'>
                  <Icon_id />
                  <span className='text-[22px] font-medium'>LM9990001</span>
                </div>
              </div>
            </>

            <IconTallerLine />

            <>
              <div className='flex flex-col  gap-y-[24px]'>
                <div className='flex items-center gap-x-4'>
                  <IconEmail />
                  <span className='text-[22px] font-medium'>
                    it@loanmarket.co.id{' '}
                  </span>
                </div>

                <div className='flex items-center gap-x-4'>
                  <IconOffice />
                  <span className='text-[22px] font-medium'>
                    Loan Market Office Dev
                  </span>
                </div>
              </div>
            </>
          </div>
        </section>
      </section>

      <section className='pl-[39px] pt-[400px] 2xl:flex justify-between'>
        <div>
          <div id='parent-card' className='flex gap-x-5'>
            <CardDashboard
              title={'CONTACT'}
              total={'51'}
              icon={<IconContactBlue />}
            />
            <CardDashboard
              title={'LOAN'}
              total={'56'}
              icon={<IconLoanBlue />}
            />
            <CardDashboard
              title={'PRODUCT'}
              total={'80'}
              icon={<IconProductBlue />}
            />
            <CardDashboard
              title={'BANK'}
              total={'30'}
              icon={<IconContactBlue />}
            />
          </div>

          <div className='flex justify-between gap-x-5 mt-10 px-[78px] py-[45px] bg-white shadow-md'>
            <div className='flex flex-col items-center gap-y-6 '>
              <h3 className='text-[30px] font-semibold'>PINJAMAN DISETUJUI</h3>
              <img
                className='w-[180px]'
                src={pieLoan}
                alt='Pinjaman Disetujui'
              />
              <p className='text-[22px]'>2/5 Pinjaman telah disetujui</p>
            </div>

            <IconLargestLine />

            <div className='relative flex flex-col items-center gap-y-6 '>
              <h3 className='text-[30px] font-semibold'>TARGET</h3>
              <img className='w-[180px]' src={pieTarget} alt='Target' />
              <p className='text-[22px]'>
                Rp14.000.000.000,00 / Rp5.000.000.000
              </p>

              <button className='absolute top-0 right-0'>
                <IconEditBlue />
              </button>
            </div>
          </div>

          <div className='flex justify-between gap-x-5 mt-10 px-[78px] py-[45px] bg-white h-[700px] '>
            <div className='flex flex-col items-center gap-y-6 w-full '>
              <h3 className='text-[30px] font-semibold'>
                Top 5 Bank Approval Tertinggi
              </h3>

              <div className='shadow-md rounded-full w-max mt-10'>
                <Doughnut
                  width={500}
                  onMouseOver={(e) => (e.target.style.cursor = 'pointer')}
                  height='auto'
                  data={{
                    labels: topBankApproval.map((item) => item.name),
                    datasets: [
                      {
                        data: topBankApproval.map((item) => item.value),
                        spacing: 15,
                        offset: 0,
                        label: 'Total Approval',
                        backgroundColor: [
                          '#4A3764',
                          '#1FFFE1',
                          '#51C4E9',
                          '#146C94',
                          '#6150C1',
                        ],
                        borderWidth: 1,
                      },
                    ],
                  }}
                  options={{
                    plugins: {
                      legend: {
                        display: false,
                      },
                    },
                  }}
                />
              </div>
              {/* <CartTopBank /> */}
            </div>
          </div>
        </div>

        <History />
      </section>
    </main>
  );
};

export default DashboardPage;

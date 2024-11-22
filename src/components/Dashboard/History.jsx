import React from 'react';
import { history } from '../../data/history';

const History = () => {
  return (
    <div className='w-[400px] h-full bg-white py-[29px] px-[21px] mr-12 shadow-md'>
      <h3 className='text-[25px] font-semibold px-[23px]'>NOTIFICATION</h3>

      <div className='mt-5 px-[23px]'>
        {history.length > 0 &&
          history.map((item, index) => (
            <div className=' flex justify-between gap-x-4'>
              <span className='w-20'>{item.time}</span>
              <ol
                className={`${
                  index === history.length - 1 ? 'w-0 h-0' : ''
                } relative w-[2px] h-[150px] bg-second-color`}
              >
                <div
                  className={`${
                    index % 2 === 0 ? 'bg-main-color' : 'bg-second-color'
                  }  absolute top-0 right-[-9px] w-[20px] h-[20px] rounded-full`}
                ></div>
              </ol>
              <div>
                <p className='text-[18px] font-semibold w-[213px]'>
                  {item.status}
                </p>
                <p className='text=[14px] font-medium w-[200px] text-second-color'>
                  {item.people}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default History;

import React, { useState } from 'react';
import { IoChevronBackSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import meBg from '../assets/me_bg.png';
import emptyIcon from '../assets/no_data.png'

const MyOrder = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState('vo'); // Track which button is active

  // Handle button click
  const handleClick = (type) => {
    setIsActive(type);
  };

  // Shared styles
  const buttonBaseClass =
    'rounded-[4.266667vw] w-[48%] flex justify-center items-center border-[.266667vw] border-[#f0f0f0] font-semibold transition-colors duration-500';
  const textBaseClass = 'font-normal';


  return (
    <div className="bg-gradient-to-b from-[#ecfade] to-[#efefef] min-h-screen flex flex-col">
      {/* Header Section */}
      <header className='h-[16vw] w-full text-[5.333333vw]'>
        <div className='flex h-full'>
          <div className='w-1/3 flex justify-start items-center'>
            <button
              className='p-[0_4vw] h-[9.6vw] text-[28px]'
              onClick={() => navigate(-1)} // Navigate to the previous page
            >
              <IoChevronBackSharp />
            </button>
          </div>
          <div className='w-1/3 flex justify-center items-center'>
            My Order
          </div>
        </div>
      </header>

      {/* Content Section */}
      <div className='p-[0_4vw]'>

        {/* Balance and Revenue Box */}
        <div
          className='h-[29.3333vw] box-border p-[9.333333vw_2.4vw_2.666667vw] bg-no-repeat bg-[length:100%_100%] text-[3.466667vw] flex justify-between text-center text-black text-opacity-[.65]'
          style={{ backgroundImage: `url(${meBg})` }}
        >
          <div className='w-1/2'>
            <p className='font-extrabold text-[6.4vw] mb-[2.133333vw] text-black'> ₹0</p>
            <p>Deposit Balance</p>
          </div>
          <div className='w-1/2'>
            <p className='font-extrabold text-[6.4vw] mb-[2.133333vw] text-black'> ₹0</p>
            <p>Total Revenue</p>
          </div>
        </div>

        {/* Orders Buttons */}
        <div className='mt-[2.933333vw] relative'>
          <div className='h-[11.733333vw] text-[3.733333vw]'>
            <div className='flex justify-between h-[8.666667vw] bg-transparent box-content pb-[4vw]'>

              {/* Valid Orders Button */}
              <div className={`rounded-[4.266667vw] w-[48%] flex justify-center items-center border-[.266667vw] border-[#f0f0f0] text-[#323233] font-semibold transition-colors duration-500  ${isActive =='vo' ? 'bg-[#4CA335]':'bg-white'}`} onClick={()=>handleClick('vo')}>
                <span className={`font-normal ${isActive =='vo' ? 'text-white':'text-[#343434]'}`}>Valid Orders</span>
              </div>

              {/* Invalid Orders Button (Just an example, change as needed) */}
              <div className={`rounded-[4.266667vw] w-[48%] flex justify-center items-center border-[.266667vw] border-[#f0f0f0] text-[#323233] font-semibold transition-colors duration-500  ${isActive =='eo' ? 'bg-[#4CA335]':'bg-white'}`} onClick={()=>handleClick('eo')}>
                <span className={`font-normal ${isActive =='eo' ? 'text-white':'text-[#343434]'}`}>Expired Orders</span>
              </div>

            </div>
          </div>
        </div>

         <div className='m-[20vh_0] flex items-center justify-center'>
           <img src={emptyIcon} alt="" />
       </div>
      </div>
    </div>
  );
};

export default MyOrder;

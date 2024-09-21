// Deposit.jsx
import React, { useState } from 'react';
import { IoChevronBackSharp } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import withdrawImg from '../assets/withdraw.png';
import DepositCash from '../components/DepositCash';
import DepositUSDT from '../components/DepositUSDT';
import Explanation from '../components/Explanation';

const Deposit = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState('ca');

  const handleClick = (type) => {
    setIsActive(type);
  };

  return (
    <div className="bg-gradient-to-b from-[#ecfade] to-[#efefef] min-h-screen flex flex-col">
      <header className="h-[16vw] w-full text-[5.333333vw]">
        <div className="flex h-full">
          <div className="w-1/3 flex justify-start items-center">
            <button className="p-[0_3.2vw] h-[9.6vw] text-[28px]" onClick={() => navigate(-1)}>
              <IoChevronBackSharp />
            </button>
          </div>
          <div className="w-1/3 flex justify-center items-center">Help Center</div>
        </div>
      </header>

      <div className="p-[0_4.533333vw]">
        <div className="h-[11.733333vw]">
          <div className="flex justify-between h-[8.666667vw] bg-transparent">
            {['ca', 'ua'].map((type) => (
              <div
                key={type}
                className={`rounded-[4.266667vw] w-[48%] flex justify-center items-center border-[.266667vw] border-[#f0f0f0] transition-colors duration-500 ${isActive === type ? 'bg-[#4CA335]' : 'bg-white'}`}
                onClick={() => handleClick(type)}
              >
                <span className={`font-normal ${isActive === type ? 'text-white' : 'text-[#000]'}`}>{type === 'ca' ? 'CASH ACCOUNT' : 'USDT ACCOUNT'}</span>
              </div>
            ))}
          </div>
        </div>

        {isActive === 'ca' ? <DepositCash /> : <DepositUSDT />}
        <Explanation/>
      </div>
    </div>
  );
};

export default Deposit;

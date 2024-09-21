import { useState } from 'react';
import { IoChevronBackSharp } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti';
import emptyIcon from '../assets/no_data.png'

const TABS = {
  ACCOUNT: 'account',
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

const FundRecord = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(TABS.ACCOUNT); // Track which button is active

  // Handle button click
  const handleClick = (type) => {
    setIsActive(type);
  };

  const renderTabButton = (label, type) => {
    const isActiveTab = isActive === type;
    return (
      <div
        className={`rounded-[4.266667vw] w-[31%] flex justify-center items-center border-[.266667vw] border-[#f0f0f0] text-[#323233] font-semibold transition-colors duration-500 ${
          isActiveTab ? 'bg-[#4CA335]' : 'bg-white'
        }`}
        onClick={() => handleClick(type)}
        role="button"
        aria-pressed={isActiveTab}
      >
        <span className={`font-normal ${isActiveTab ? 'text-white' : 'text-[#343434]'}`}>{label}</span>
      </div>
    );
  };

  return (
    <div className="bg-gradient-to-b from-[#ecfade] to-[#efefef] min-h-screen flex flex-col">
      <header className="h-[16vw] w-full text-[5.333333vw]">
        <div className="flex h-full">
          <div className="w-1/3 flex justify-start items-center">
            <button
              className="p-[0_3.2vw] h-[9.6vw] text-[28px]"
              onClick={() => navigate(-1)} // Navigate to the previous page
            >
              <IoChevronBackSharp />
            </button>
          </div>
          <div className="w-1/3 flex justify-center items-center">Help Center</div>
        </div>
      </header>

      <div className="p-[0_4vw] mt-[1.333333vw] relative">
        <div className="mt-[2.933333vw] relative">
          <div className="h-[11.733333vw] text-[3.733333vw]">
            <div className="flex justify-between h-[8.666667vw] bg-transparent box-content pb-[4vw]">
              {renderTabButton('Account', TABS.ACCOUNT)}
              {renderTabButton('Deposit', TABS.DEPOSIT)}
              {renderTabButton('Withdraw', TABS.WITHDRAW)}
            </div>
          </div>
        </div>
        <div className="flex mb-[2.666667vw] text-[3.733333vw]">
          <div className="min-w-[30%] text-black text-opacity-65 mr-[1.333333vw] flex justify-center items-center">
            <p>Time</p>
            <TiArrowSortedDown color="#4ca335" />
          </div>
          <div className="min-w-[40%] relative  text-black text-opacity-65 mr-[1.333333vw] flex justify-center items-center">
            <div>All</div>
            <TiArrowSortedUp color="#4ca335" />
          </div>
        </div>
        <div className='m-[20vh_0] flex items-center justify-center'>
           <img src={emptyIcon} alt="" />
       </div>
      </div>
    </div>
  );
};

export default FundRecord;

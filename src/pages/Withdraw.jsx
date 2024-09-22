import React, { useState } from 'react'
import { IoChevronBackSharp } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom';
import AccountBalance from '../components/AccountBalance';
import WithdrawCash from '../components/WithdrawCash';
import ToBind from '../components/ToBind';
import ExplanationWithdraw from '../components/ExplainationWithdraw';
import WithdrawUSDT from '../components/WithdrawUSDT';
import AccountTypeSelector from '../components/AccountTypeSelector';

const Withdraw = () => {
    const navigate = useNavigate();
    const [isActive, setIsActive] = useState(1);

  return (
    <div className="bg-gradient-to-b from-[#ecfade] to-[#efefef] min-h-screen flex flex-col">
      <header className="h-[16vw] w-full text-[5.333333vw]">
        <div className="flex h-full">
          <div className="w-1/3 flex justify-start items-center">
            <button className="p-[0_3.2vw] h-[9.6vw] text-[28px]" onClick={() => navigate(-1)}>
              <IoChevronBackSharp />
            </button>
          </div>
          <div className="w-1/3 flex justify-center items-center">Withdraw</div>
        </div>
      </header>
      
      <div className="p-[0_4.533333vw]">
      <AccountTypeSelector isActive={isActive} setIsActive={setIsActive} />

        <AccountBalance/>
        {isActive === '1' ? <WithdrawCash /> : <WithdrawUSDT />}
        {/* <ToBind/> */}
        <ExplanationWithdraw/>
        </div>
      </div>
  )
}

export default Withdraw
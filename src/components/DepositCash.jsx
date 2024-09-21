// DepositCash.jsx
import React from 'react';
import { TbDiamondFilled } from "react-icons/tb";

const DepositCash = () => (
  <div className="depositCash">
    {/* Quick Amount Selection */}
    <div className="p-[4vw_2.666667vw_0] rounded-[2.666667vw] bg-white mb-[2.666667vw]">
      <p className="text-[#333] text-[4.266667vw] font-bold mb-[2.666667vw]">Quick amount</p>
      <div className="flex flex-wrap justify-between">
        {[1000, 3000, 5000, 10000, 30000, 50000].map((amount) => (
          <div
            key={amount}
            className="flex justify-center items-center w-[26.666667vw] h-[9.066667vw] bg-white border-[.266667vw] border-[#4ca335] rounded-[13.333333vw] mb-[2.666667vw]"
          >
            ₹{amount.toLocaleString()}
          </div>
        ))}
      </div>
    </div>

    {/* Deposit Amount Input */}
    <div className="p-[4vw_2.666667vw_2.666667vw] rounded-[2.666667vw] bg-white mb-[2.666667vw]">
      <p className="text-[#333] text-[4.266667vw] font-bold mb-[2.666667vw]">Deposit amount</p>
      <div className="border border-[#d9d9d9] rounded-[2.133333vw] h-[12.8vw] flex items-center w-full p-[2.666667vw_4.266667vw] overflow-hidden text-[#323233] text-[3.733333vw] bg-white">
        <span className="text-[3.733333vw] text-[#4ca335] mr-[1.333333vw]">₹</span>
        <input
          type="tel"
          inputMode="numeric"
          className="block w-full bg-transparent outline-none"
          placeholder="Please enter deposit amount..."
        />
      </div>
    </div>

    {/* Deposit Channel Section */}
    <div className="p-[4vw_2.666667vw_2.666667vw] rounded-[2.666667vw] bg-white mb-[2.666667vw]">
      <p className="text-[#333] text-[4.266667vw] font-bold mb-[2.666667vw]">Deposit Channel</p>
      <div className="border-[.533333vw] border-[#4ca335] flex justify-between items-center p-[4vw] rounded-[3.2vw] min-h-[18.933333vw]">
        <div>
          <p className="text-[#24223a] text-[4.266667vw]">Payment Gateway M</p>
          <p className="text-[#343434] text-[3.733333vw] mt-[2vw]">₹200~₹ 100,000</p>
        </div>
        <TbDiamondFilled fontSize={'5.466667vw'} color='#4CA335' />
      </div>
    </div>

    {/* Deposit Button */}
    <button
      className="mt-[6.666667vw] p-[0_4.266667vw] rounded-[2.133333vw] h-[12.8vw] text-[4.266667vw] text-white bg-[#4CA335] w-full outline-none active:bg-[#459330]"
      type="button"
    >
      <div>To Deposit</div>
    </button>
  </div>
);

export default DepositCash;

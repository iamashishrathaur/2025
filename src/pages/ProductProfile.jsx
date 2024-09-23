import React from 'react';
import { IoChevronBackSharp } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

const ProductProfile = () => {
  const navigate = useNavigate();

  return (
    <div className='relative bg-[#f8f9fa]'>
      {/* Header Section */}
      <header className='h-[16vw] w-full flex'>
       <div className='h-[16vw] w-full text-[5.333333vw] z-[99] flex items-center'>
       <button
          className='w-1/3 flex justify-start items-center p-[0_4vw] h-[9.6vw] text-[28px]'
          onClick={() => navigate(-1)}
          aria-label="Go back"
        >
          <IoChevronBackSharp />
        </button>
        <div className='w-1/3 flex justify-center items-center'>Profile</div>
       </div>
      </header>

      {/* Background Gradient */}
      <div className="absolute top-0 left-0 w-full h-[39.466667vw] bg-gradient-to-br from-[#b7e661] to-[#21c93e] rounded-b-[5.333333vw]"></div>

      {/* Buy Quantity and Daily Income Section */}
      <div className="rounded-[2.133333vw] bg-white m-[0_4vw] p-[.666667vw_4.266667vw_3.333333vw] relative z-10">
        {[
          { label: 'Buy Quantity', id: 'buy-quantity', type: 'tel', placeholder: 'Enter Quantity' },
          { label: 'Daily Income', id: 'daily-income', type: 'text', readOnly: true }
        ].map((input, index) => (
          <div key={index} className="mt-[4.266667vw]">
            <p className="text-[#333] text-[4vw]">{input.label}</p>
            <div className="border border-[#d9d9d9] rounded-[2.133333vw] mt-[1.333333vw] flex w-full p-[2.666667vw_4.266667vw] text-[3.733333vw] bg-white">
              <input
                type={input.type}
                id={input.id}
                className="block w-full text-[#323233] bg-transparent outline-none"
                placeholder={input.placeholder || ''}
                readOnly={input.readOnly || false}
              />
            </div>
          </div>
        ))}
        <p className="text-[#4ca335] text-[3.466667vw] mt-[1.333333vw]">Credit Available: ₹ 0</p>
        <button
          className="w-full mt-[4.8vw] p-[0_4.266667vw] rounded-[2.133333vw] h-[12.8vw] text-[4.266667vw] text-white bg-[#4ca335] flex justify-center items-center"
          type="button"
        >
          Submit
        </button>
      </div>

      {/* Upgrade Gift Pack Section */}
      <div className="rounded-[2.133333vw] bg-white m-[2.666667vw_4vw] text-[3.2vw] p-[4vw] relative z-10">
        <div className="content_top_box">
          <p className="text-[4.266667vw] font-bold mb-[4vw]">Upgrade Gift Pack - Daily</p>
          {[
            { label: 'Each price', value: '₹ 495.00' },
            { label: 'Revenue', value: '15 days' },
            { label: 'Maximum', value: '1' }
          ].map((item, index) => (
            <div key={index} className="flex justify-between mb-[3.2vw]">
              <p className="text-[#666] text-[4vw]">{item.label}</p>
              <p className={`text-[4vw] ${item.value.includes('₹') ? 'text-[#4ca335]' : 'text-black text-opacity-85'}`}>
                {item.value}
              </p>
            </div>
          ))}
        </div>
        <div className="relative border-t border-dashed border-[#cbcbcb] p-[3.333333vw_6.4vw_.666667vw] mt-[2vw]">
          <div className="flex justify-between">
            <p className="text-[#666] text-[4vw]">Total Revenue</p>
            <p className="text-[4.533333vw] font-bold text-[#4ca335]">₹ 0.00</p>
          </div>
          <div className='w-[4.266667vw] h-[4.266667vw] rounded-full bg-[#f8f9fa] absolute top-[-2.133333vw] left-[-5.333333vw]'></div>
          <div className='w-[4.266667vw] h-[4.266667vw] rounded-full bg-[#f8f9fa] absolute top-[-2.133333vw] right-[-5.333333vw]'></div>
        </div>
      </div>

      {/* VIP Notice Section */}
      <div className="m-[4vw_4vw_0] pb-[21.333333vw] relative z-10">
        <p className="text-black text-opacity-85 text-[4vw] mb-[1.333333vw]">Upgrade Gift Pack - Daily</p>
        <div className="flex">
          <div className="w-[1.333333vw] h-[1.333333vw] rounded-full bg-[#4ca335] mr-[1.333333vw] mt-[1.6vw]" />
          <div className="text-black text-opacity-65 text-[3.2vw] leading-[4.666667vw] w-[98%]">
            <p>
              When your VIP level reaches "<strong className="text-[#008a00]">VIP1</strong>", you can purchase this
              upgrade package. Hurry up to level up and claim it!
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar Section */}
      <div className="w-full h-[17.333333vw] fixed bottom-0 bg-white flex justify-between items-center p-[0_4vw_0_8.933333vw] z-20">
        <div>
          <p className="text-[3.2vw]">Actually Paid</p>
          <p className="text-[#4ca335] text-[4.533333vw] font-bold mt-[1.866667vw]">₹ 0.00</p>
        </div>
        <button
          className="p-[3.466667vw_9.066667vw] text-[3.466667vw] text-white rounded-[2.13333vw] h-[12.8vw] bg-[#4CA335] flex items-center justify-center"
          type="button"
        >
          Invest Now
        </button>
      </div>
    </div>
  );
};

export default ProductProfile;

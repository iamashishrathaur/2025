import React, { useState } from 'react';
import BottomBar from '../components/BottomBar';
import Product from '../components/Product';

import fundIcon1 from '../assets/fund_icon1.png';
import fundIcon1Active from '../assets/fund_icon1_active.png';
import fundIcon2 from '../assets/fund_icon2.png';
import fundIcon2Active from '../assets/fund_icon2_active.png';
import fundIcon3 from '../assets/fund_icon3.png';
import fundIcon3Active from '../assets/fund_icon3_active.png';
import fundIcon4 from '../assets/fund_icon4.png';
import fundIcon4Active from '../assets/fund_icon4_active.png';

const Products = () => {
  const [current, setCurrent] = useState(0);

  return (
    <>
      <div className="bg-gradient-to-b from-[#ecfade] to-[#efefef] min-h-screen flex flex-col relative">
        <div className="pb-[8vw] text-center bg-gradient-to-br from-[#b7e661] to-[#21c93e] sticky left-0 top-0">
          <div className="text-[5.333333vw] font-medium leading-[7.466667vw] p-[4.266667vw_0]">
            Product
          </div>

          <div className="flex justify-around">
            {[
              { name: "Land Fund", imgSrc: fundIcon1, activeSrc: fundIcon1Active },
              { name: "Upgrade Benefits", imgSrc: fundIcon2, activeSrc: fundIcon2Active },
              { name: "Seed Fund", imgSrc: fundIcon3, activeSrc: fundIcon3Active },
              { name: "Mutual Funds", imgSrc: fundIcon4, activeSrc: fundIcon4Active }
            ].map((item, index) => (
              <div key={index} className="text-center" onClick={() => setCurrent(index)}>
                <div
                  className={`w-[15.466667vw] h-[15.466667vw] flex justify-center items-center rounded-[3.2vw] m-[0_auto] ${
                    index === current ? 'bg-[#000]' : 'bg-[#bbeda9]'
                  }`}
                >
                  <div className="w-[5.866667vw] h-auto">
                    <img src={index === current ? item.activeSrc : item.imgSrc} alt={`${item.name} icon`} />
                  </div>
                </div>
                <p className="text-[3.733333vw] font-medium text-center mt-[2.133333vw]">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Content Container with Scroll-to-top behavior */}
        <div className="mt-[-3.2vw] pt-[3.2vw] mb-[20vw] rounded-t-[5.333333vw] bg-[#f0f1f3] z-0 flex-1 overflow-y-hidden h-screen">
          <Product 
            fundName="Land Fund No. 1" 
            status="Hot" 
            revenueDays={55} 
            dailyEarnings={198} 
            totalRevenue={10890} 
            currentPrice={495} 
            vip={1}
          />
          <Product 
            fundName="Land Fund No. 1" 
            status="Hot" 
            revenueDays={55} 
            dailyEarnings={198} 
            totalRevenue={10890} 
            currentPrice={495} 
            vip={1}
          />
          <Product 
            fundName="Land Fund No. 1" 
            status="Hot" 
            revenueDays={55} 
            dailyEarnings={198} 
            totalRevenue={10890} 
            currentPrice={495} 
            vip={1}
          />
        </div>
      </div>

      <div className="fixed bottom-0 left-0 w-full z-20">
        <BottomBar />
      </div>
    </>
  );
}

export default Products;

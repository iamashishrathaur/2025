import React, { useState } from 'react';
import { TiHomeOutline } from 'react-icons/ti';
import { TbCube } from 'react-icons/tb';
import { PiFlowerTulipBold } from 'react-icons/pi';
import { FaRegUser } from 'react-icons/fa';

const BottomBar = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Store the active button index

  // Define the button data for dynamic rendering
  const buttonData = [
    { label: 'Home', icon: TiHomeOutline },
    { label: 'Product', icon: TbCube },
    { label: 'Comment', icon: PiFlowerTulipBold },
    { label: 'Me', icon: FaRegUser },
  ];

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <footer className="bottom-bar">
      <div className="h-[16vw]" /> {/* Spacer */}
      <div
        className="fixed bottom-0 left-0 h-[16vw] w-full z-10 shadow-md bg-white flex transition-colors duration-250"
        style={{ boxShadow: '0 -0.533333vw 1.6vw 0 rgba(211, 211, 211, 0.24)' }}
      >
        {buttonData.map((button, index) => {
          const IconComponent = button.icon;
          const isActive = activeIndex === index;

          return (
            <button
              key={index}
              onClick={() => handleClick(index)}
              className={`flex-auto flex items-center justify-center p-[1.6vw_3.2vw_2.133333vw] bg-transparent z-10 transition-all duration-250 
                ${isActive ? 'text-[#4CA335]' : 'text-[#979797]'}`}
              style={{ transition: 'margin 0.25s' }}
            >
              <div
                className={`flex items-center transition-all duration-250 ${
                  isActive
                    ? 'bg-[#4CA335] rounded-[4.133333vw] p-[0_4vw_.266667vw] h-[8.266667vw] text-white'
                    : ''
                }`}
              >
                <IconComponent
                  className={`text-[5.333333vw] mr-[1.6vw] transition-colors duration-250 ${
                    isActive ? 'text-white' : 'text-[#bac3d2]'
                  }`}
                />
                {isActive && <span className="text-[3.733333vw] font-medium">{button.label}</span>}
              </div>
            </button>
          );
        })}
      </div>
    </footer>
  );
};

export default BottomBar;

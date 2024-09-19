import React from 'react'

const Demo = () => {
  return (
    <footer className="bottom-bar">
      <div className="h-[var(--bottom-navigation-height)]" />
      <div
        className="fixed w-full z-10 shadow-md"
        style={{ boxShadow: '0 -0.533333vw 1.6vw 0 var(--bottom-navigation-shadow-color)' }}
      >
        <button
          className="flex-1 flex flex-col items-center active"
          to="/home"
        >
          <div className="flex items-center bg-[#4ca335] h-[8.266667vw] leading-[8.266667vw] rounded-[4.133333vw] px-[4vw] py-[0.266667vw] box-content text-[3.733333vw] font-medium text-white">
            <i
              className="var-icon icon icon--set custom-icon text-white transition-none mr-[1.6vw]"
            />
            <span>Home</span>
          </div>
        </button>

        <button className="flex-1 flex flex-col items-center" to="/product">
          <div className="flex items-center mt-[1.6vw]">
            <i
              className="var-icon icon icon--set custom-icon text-[#bac3d2] transition-none mr-[1.6vw]"
            />
          </div>
        </button>

        <button className="flex-1 flex flex-col items-center" to="/comment">
          <div className="flex items-center mt-[1.6vw]">
            <i
              className="var-icon icon icon--set custom-icon text-[#bac3d2] transition-none mr-[1.6vw]"
            />
          </div>
        </button>

        <button className="flex-1 flex flex-col items-center" to="/me">
          <div className="flex items-center mt-[1.6vw]">
            <i
              className="var-icon icon icon--set custom-icon text-[#bac3d2] transition-none mr-[1.6vw]"
            />
          </div>
        </button>
      </div>
    </footer>
  );
}

export default Demo;

import React from 'react'
import { IoMdNotificationsOutline } from "react-icons/io";

const TopBar = () => {
  return (
    <div className="h-[17.333333vw] flex items-center justify-between p-[0_6.4vw]">
    <div className="items-center flex">
      <div className="h-[11.2vw] w-[11.2vw] rounded-full">
        <img
          src="https://api.dehaatll.com/storage/client/default.jpg"
        />
      </div>
      <div className="ml-[3.2vw] text-[#242424]">
        <p className="text-[3.2vw]">
          ID: 120041
        </p>
        <p className="text-[4.8vw] mt-[.666667vw]">
          790****205
        </p>
      </div>
    </div>
    <div className="h-[6.4vw] w-[6.4vw] relative">
      <i
        className="font-[4.8vw]"
        style={{ transitionDuration: "0ms" }}
      />
      <IoMdNotificationsOutline  className="text-[5.8vw]"/>
      {/**/}
    </div>
  </div>
  )
}

export default TopBar
import React from 'react'

const UserInfo = () => {
  return (
    <div className="h-[17.333333vw] flex items-center justify-between">
      <div className="items-center flex">
        <div className="h-[17.0667vw] w-[17.0667vw] rounded-full mr-[4.26667vw]">
          <img
            src="https://api.dehaatll.com/storage/client/default.jpg"
            className="rounded-full"
            alt="User Profile"
          />
        </div>
        <div>
          <div className="flex leading-3">
            <p className='text-[3.466667vw]'>ID: 120041</p>
            <i className="text-[#4CA335] text-[5.33333vw] ml-[1.33333vw]"></i>
          </div>
          <div className="text-[#949494] text-[3.466667vw] mt-[2.13333vw]">
            +91 790****205
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserInfo

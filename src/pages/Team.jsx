import React from 'react';
import { IoChevronBackSharp } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import teamBg from '../assets/team_bg.png';

const Team = () => {
  const navigate = useNavigate();
  
  // Function to copy the invite link to the clipboard
  const handleCopyLink = () => {
    navigator.clipboard.writeText('https://dehaatll.com/register?inviteCode=clr82kmh')
      .then(() => alert('Link copied to clipboard!'))
      .catch(() => alert('Failed to copy the link.'));
  };

  return (
    <div className="bg-gradient-to-b from-[#ecfade] to-[#efefef] min-h-screen flex flex-col">
      {/* Header Section */}
      <header className="h-[16vw] w-full text-[5.333333vw]">
        <div className="flex h-full">
          <div className="w-1/3 flex justify-start items-center">
            <button
              className="p-[0_4vw] h-[9.6vw] text-[28px]"
              onClick={() => navigate(-1)}
              aria-label="Go back"
            >
              <IoChevronBackSharp />
            </button>
          </div>
          <div className="w-1/3 flex justify-center items-center">
            Team
          </div>
          <div className="w-1/3"></div>
        </div>
      </header>

      {/* Main Content Section */}
      <div
        className="m-[1.333333vw_4vw_0] h-[40.933333vw] rounded-[2.133333vw] p-[6.133333vw_5.066667vw] text-[3.466667vw] bg-no-repeat leading-[5.333333vw]"
        style={{ backgroundImage: `url(${teamBg})`, backgroundSize: '100% 100%' }}
      >
        <div className="mb-[5.333333vw]">
          <p>Obtain Today Commission</p>
          <p className="font-bold text-[6.4vw] mt-[1.333333vw]">₹0</p>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p>Obtain Total Commission</p>
            <p className="font-medium text-[5.333333vw] mt-[1.333333vw]">₹0</p>
          </div>
          <div>
            <p>Total number of teams</p>
            <p className="font-medium text-[5.333333vw] mt-[1.333333vw]">₹0</p>
          </div>
        </div>
      </div>

      {/* Invite link */}
      <div className="rounded-[2.666667vw] bg-white p-[4vw] m-[2.666667vw_4vw_4vw]">
        <div className="text-[4.266667vw] font-bold mb-[2.4vw]">
          Invitation Link
        </div>
        <div className="flex justify-between items-center">
          <div className="border border-opacity-15 rounded-[2.133333vw] p-[2.133333vw] text-[2.933333vw] text-opacity-85 leading-[4vw] h-[12.8vw] w-[59.866667vw] break-words">
            https://dehaatll.com/register?inviteCode=clr82kmh
          </div>
          <button
            className="w-[21.2vw] h-[12.8vw] p-[0_.666667vw] text-white text-[3.466667vw] bg-[#4CA335] rounded-[2.133333vw] flex justify-center items-center"
            onClick={handleCopyLink}
            aria-label="Copy invitation link"
          >
            COPY LINK
          </button>
        </div>
      </div>
    </div>
  );
};

export default Team;

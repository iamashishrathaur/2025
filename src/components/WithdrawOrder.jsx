import { BiTransferAlt } from "react-icons/bi";
import { TbCreditCardPay } from "react-icons/tb";

const WithdrawOrder = () => {
  return (
    <div className="bg-white rounded-[2.13333vw] mb-[2.66667vw] flex justify-between p-[4vw]">
      <div className="text-[3.46667vw] flex">
        <div className="size-[10.6667vw] mr-[1.6vw] rounded-full flex justify-center items-center bg-[#ff4c4c] bg-opacity-[0.1]">
          {/* <IoWalletOutline className='text-[#ff4c4c] text-[4.668vw]'/> */}
          <TbCreditCardPay  className='text-[#ff4c4c] text-[4.668vw]'/>
          {/* className="text-[#ff4c4c]" */}
        </div>
        <div>
          <p className="text-black opacity-[0.85] text-[4vw] mb-[1.86667vw] font-medium">Withdraw</p>
          <p className="text-[#666666]">22-09-2024 07:43:01</p>
        </div>
      </div>
      <div>
        <div className="text-[4vw] font-bold text-[#ff4c4c]">-₹ 150</div>
        <div className="text-[#ffb51a] text-right text-[3.46667vw] mt-[1.86667vw] flex items-center">
          <div className='bg-[#ffb51a] rounded-full size-[3vw] flex justify-center items-center mr-[.9668vw]'><BiTransferAlt className="size-[2.43333vw] p- text-white"/></div>
          Processing
        </div>
      </div>
    </div>
  );
};

export default WithdrawOrder;

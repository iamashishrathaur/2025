import { RateReview} from '../components/RatingReview'

const CommentSample = () => {
  return (
    <div className="p-[0_5.333333vw_5.333333vw] rounded-[2.666667vw] bg-white m-[0_4vw_2.666667vw]">
    <div className="p-[2.666667vw_0] border-b border-[#e9ecef] flex items-center justify-between">
      <div>
        <RateReview rating={2}/>
        <p className="p1 text-[#999] text-[3.2vw] mt-[1.333333vw]">
          19-09-2024 15:08:07
        </p>
      </div>
      <div className="flex items-center">
        <div className="">
          <p className="text-[#333] text-[3.733333vw] font-bold text-right" />
          <p className="text-[#999] text-[3.2vw] text-right mt-[.666667vw]">
            994****189
          </p>
        </div>
        <div className="size-[7.733333vw] ml-[.8vw] rounded-full">
          <img
            src="https://api.dehaatll.com/storage/client/default.jpg"
          />
        </div>
      </div>
    </div>
    <div className="text-[#262626] text-[3.2vw] p-[2.666667vw_0]">
      Second withdraw successful
    </div>
    <div className="flex items-center flex-wrap">
      <div className="mr-[2vw] mb-[1.333333vw]" style={{ width: `calc(33.33% - 2vw)` }}>
        <img
          src="https://api.dehaatll.com/storage/client/23e86bc8-339c-434a-a7be-7f318f7f6025.jpg"
          alt="Image 1"
          className="w-full h-auto"
        />
      </div>
      <div className="mr-[2vw] mb-[1.333333vw]" style={{ width: `calc(33.33% - 2vw)` }}>
        <img
          src="https://api.dehaatll.com/storage/client/23e86bc8-339c-434a-a7be-7f318f7f6025.jpg"
          alt="Image 2"
          className="w-full h-auto"
        />
      </div>
      <div className="mr-[2vw] mb-[1.333333vw]" style={{ width: `calc(33.33% - 2vw)` }}>
        <img
          src="https://api.dehaatll.com/storage/client/23e86bc8-339c-434a-a7be-7f318f7f6025.jpg"
          alt="Image 3"
          className="w-full h-auto"
        />
      </div>
      
    </div>

  </div>
  
  )
}

export default CommentSample
import BottomBar from '../components/BottomBar'
import Product from '../components/Product'

const Products = () => {


  return (
    <>
      <div className="bg-gradient-to-b from-[#ecfade] to-[#efefef] min-h-screen flex flex-col relative">
        <div
          className="pb-[8vw] text-center bg-gradient-to-br from-[#b7e661] to-[#21c93e] sticky left-0 top-0 "

        >
          <div className="text-[5.333333vw] font-medium leading-[7.466667vw] p-[4.266667vw_0]">
            Product
          </div>

          <div className="flex justify-around">
            {[
              { name: "Land Fund", imgSrc: "" },
              { name: "Upgrade Benefits", imgSrc: "" },
              { name: "Seed Fund", imgSrc: "" },
              { name: "Mutual Funds", imgSrc: "" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-[15.466667vw] h-[15.466667vw] flex justify-center items-center rounded-[3.2vw] m-[0_auto] bg-[#bbeda9] active:bg-[#a9c8a2]">
                  <div className="w-[5.866667vw] h-auto">
                    <img src={item.imgSrc} alt={`${item.name} icon`} />
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
        <div
          className="mt-[-3.2vw] pt-[3.2vw] mb-[20vw] rounded-t-[5.333333vw] bg-[#f0f1f3] z-0 flex-1 overflow-y-hidden h-screen"
        >
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
  )
}

export default Products

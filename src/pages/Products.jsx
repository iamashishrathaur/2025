import React from 'react'
import BottomBar from '../components/BottomBar'
import Product from '../components/Product'

const Products = () => {
  return (
    <>
    <div className="bg-gradient-to-b from-[#ecfade] to-[#efefef] min-h-screen flex flex-col">
       <header className='h-[16vw] w-full text-[4.266667vw]'>
         <div className='flex justify-between items-center h-[16vw]'>
           <div></div>
           <div></div>
           <div></div>
         </div>
       </header>
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

    <BottomBar/>
    </>
  )
}

export default Products
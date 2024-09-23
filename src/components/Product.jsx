const Product = ({ fundName, status, revenueDays, dailyEarnings, totalRevenue, currentPrice,vip }) => {
    return (
      <div className="m-[0_4.4vw_2.666667vw] p-[3.333333vw_4vw_4.666667vw] bg-white relative rounded-[2.133333vw]">
        <div className="flex justify-between items-center pb-[3.2vw] border-b-[.266667vw] border-[#e9ecef] mb-[4vw]">
          <div>
            <p className="text-[#212529] text-[4.8vw]">
              {fundName}
              <span className="bg-[#ff6600] bg-opacity-20 text-[#f60] inline-block rounded-[0px_1.333333vw] text-[3.2vw] font-medium p-[1px_2vw]">{status}</span>
            </p>
            <p className="text-[#404040] text-[3.466667vw] mt-[2vw]">Revenue: {revenueDays} days</p>
          </div>
          <p className="text-[#4ca335] text-[6.4vw] min-w-[25%]">
            <span className="text-[3.733333vw] text-[#4ca335]">₹</span>
            {currentPrice}
          </p>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-[#4ca335] text-[4.8vw]">
              <span className="text-[3.733333vw] text-[#4ca335]">₹</span>
              {dailyEarnings}
            </p>
            <p className="text-[3.466667vw] text-[#595959] mt-[2vw]">Daily Earnings</p>
          </div>
          <div>
            <p className="text-[#4ca335] text-[4.8vw]">
              <span className="text-[3.733333vw] text-[#4ca335]">₹</span>
              {totalRevenue}
            </p>
            <p className="text-[3.466667vw] text-[#595959] mt-[2vw]">Total Revenue</p>
          </div>
          <div className="flex items-center">
            <button className="text-white text-[3.733333vw] text-center h-[8vw] leading-[8vw] p-[0_4vw] rounded-[4vw] bg-[#4ca335]">Invest</button>
          </div>
        </div>
        {vip>0 ? 
        <div className="w-[10vw] h-auto absolute right-0 top-0">
        <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEoAAABLCAYAAADXjBHUAAAABHNCSVQICAgIfAhkiAAABDJJREFUeJztmm9IJVUYh5+rFUqEECpIkNFSSQi5ELEg2RCsQUTaBhFExEoSwbIshBnhMmoR0oeWYiPEL0IEEYmEFUTEyI0IJBYiCCFCkKXoEutCLIZrvn24zOU6O6PvzJz5Y50HzpfrnTO/eeZ9j+feuQAzgPwPxnXgMlAF3gVOATcTkzdKcCHieV7e57wGvA/cG0fWW0VKcl1XRKQIWf54M46suaJEeZ4nPgXK+hY4ppX1dt4B/WpqpqgbBvwGHA9KaQkR9Srwjs5pNkxPTxd5+h7gC+Bu7QEXyOkulqiagm2o5r2sAwXbznXdogU1j1gL/MUsw5S0mppHrK3DB1mEiFNNjuOI53lFVNzFOKIA5k2HaN4SBKvJcRxxXfeG9xTQntdIsINfMBUgrJr8qtGQs6xTN8UUNQ60AqdjHncomi3B6uoqADMzM6ZPfxiPJD1wkZR3SYPneeJ5njiOI47jhM4T9brhUU0qCuDDpCd2HCeRlOAcfpvm0IaX04gC+CjpyV3XbaxLcSUXsMBfTysK4OMMA94gN6pFc2hBI3ySZcioKspJkFFRAJ/mJSjYav665rdzRm1olGVTweK0WdQ/B8PVZpzP0gRK2mZhskTEpKxM+DxJGE2b+VLC2itjWZlQAb6MGybYbsEqClZb1FfGYcINyMqMVuCruIF8GQcJCsrUyiqrKIBbgK/TBIxa1JPISvnQInPagG/iBotab/zdfBhh7XWURAHcCqwmCehXRVg7amQdNVEAt1H/FB475EHfHER97gv7W8qNaK50AN+lCKtai8Iw8FA1d24Hvk8YNpGsKEm9vb2lFgXQCawpA6rHYfswf1QqFZmdnZXNzU0ZGBgotSiAbuCHiFCpxkGby/b2dpmfn2/IrNVq0tHRUWpRUH98fYkMZIWN7u5uWV5e3ld1S0tL0tnZWXpRAHcAP5KxpL6+PqlWq/skLSwsSFdXV+lbr5k7gZ/ISNLg4KCsr6/vkzQ3NydtbW1x5ikNdwE/Y1jS6Oio1Gq1hqCdnR2ZmJiQSqUSd65ScQxYx5Ck8fFx2d7ebkja2tqSsbGxpPOVjnuAX0gpaWpqSvb29hqSNjY2ZGRkJM2cpeQ+4FcSXtTw8LDs7u42JK2trcnQ0FDaCi0t9wMbJLywxcVFERFZWVmR/v5+E61cavqBTRJcWEtLi0xOTkpPT48JSaUXBfAA9Ufapi74PysK6r/S/R0rSsWDwB9YUSoeAv7EilJxAriCFaViELiKFaXiYeAvrCgVDvVf7VpRCh4F/saKUnES2MGKUvEY8A9WlIrHsaLUPIEVpeZJrCg1T2FFqXkaK0rNM1hRap7FilLzHFaUmuexotS8gBWlZgwrSs2LWFFqXsKKUvMyVpSaM1hRas5iRak5hxWl5hWsKDUTWFFqXsOKUvM6VpSa84C0Fp3iCFAF+BeGl1l2plVbSQAAAABJRU5ErkJggg=="
        />
        </div>
       :''}
      </div>
    );
  };
  
  export default Product;
  
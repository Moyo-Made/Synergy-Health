import React from "react";

const Overview = () => {
  return (
    <div className="absolute top-[190px] left-[27rem]">
      <div className="">
        <h1 className="text-[#F80D38] text-[28px] font-semibold leading-[20px]">
          Welcome Lucy,
        </h1>
        <div className="mt-2">
          <span className="text-[#3C3633] text-[16px] font-normal leading-5">
            How are you feeling today?
          </span>
        </div>
      </div>

      <div className="flex gap-4 mt-36">
        {/* Vitals */}
        <div className="w-[470px] h-[325px] rounded-[16px] border-[3px] border-[#EEEEEE] ">
            <h1 className="text-[#3572EF] text-[16px] font-semibold leading-5">Vitals</h1>
        </div>

        {/* Events */}
        <div className="w-[550px] h-[325px] rounded-[16px] border-[3px] border-[#EEEEEE]"></div>
      </div>
    </div>
  );
};

export default Overview;

import React from "react";

const Voucher = () => {
  return (
    <div className="flex justify-between border-2 border-solid border-[--md-blue] rounded-lg p-4 w-[350px]">
      <div className="basis-1/2">
        <p>Get upto 30% Off on order value above $100</p>
        <span className="mt-3 text-[--md-blue]">Terms & Conditions</span>
      </div>
      <div className="p-5 rounded-lg flex flex-col items-center justify-center bg-[--cool-gray]">
        <span className="text-[--md-gray]">Use Code</span>
        <p >ORDER100</p>

      </div>
    </div>
  );
};

export default Voucher;

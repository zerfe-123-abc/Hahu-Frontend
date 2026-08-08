import { User } from "lucide-react";
import React from "react";

const SellerDetail = () => {
  return (
    <div className="text-2xl font-bold w-2xs h-2 p-2">
      <h1 className="tetx-lg align-center">Seller Details</h1>
      <h1 className="text-2xl font-semibold flex flex-1 gap-2 items-center">
        <User />
        Hahu customer
      </h1>
      <p className="text-lg font-bold">Verified Seller</p>
      <p className="text-lg">Seller Name</p>
      <p className="text-lg ">seller id</p>
      <p className="text-lg">Location</p>
      <p className="text-lg">Phone Number</p>
      <button className="bg-green-600 cursor-pointer text-white rounded-lg p-3 hover:scale-y-95 hover:bg-slate-500 hover:translate-x-2 transition-all duration-500 ease-in-out mt-3">
        view seller profile
      </button>
    </div>
  );
};

export default SellerDetail;

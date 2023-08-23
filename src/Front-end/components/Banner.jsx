import React from "react";
import iconBanerData from "../../Back-end/iconBaner";

const Banner = () => {
  return (
    <div className="bg-dark">
<div className="flex items-center justify-center  
    lg:h-[150px] p-4 lg:p-6 gap-4   max-w-7xl m-auto">
      {iconBanerData.map((one) => {
        return <div key={one.id} className="flex  Md:p-2 items-center justify-center h-full w-full">
          <img className="object-contain h-full w-full" src={one.image} alt="" />
        </div>;
      })}
    </div>
    </div>
    
  );
};

export default Banner;

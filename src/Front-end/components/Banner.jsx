import React from "react";
import iconBanerData from "../../Back-end/iconBaner";

const Banner = () => {
  return (
    <div className="flex items-center justify-center 
    h-[150px] p-2 md:p-4">
      {iconBanerData.map((one) => {
        return <div key={one.id} className="flex items-center justify-center h-full">
          <img className="object-cover h-full" src={one.image} alt="" />
        </div>;
      })}
    </div>
  );
};

export default Banner;

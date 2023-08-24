import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-[90px] bg-primary flex flex-col items-center justify-center">
      <div className="font-nunito-sans tracking-wider">
        © 2023 Všechna práva vyhrazena
      </div>
      <div className="flex items-center justify-center mt-4">
        <h2 className=" font-courgate tracking-wide text-xl  ">
          Karel <span className="text-purple-500">Švancar</span>{" "}
        </h2>
      </div>
    </div>
  );
};

export default Footer;

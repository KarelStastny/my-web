import React, { useState } from "react";
import { FaDiscord } from "react-icons/fa";
import { BsGithub, BsInstagram } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import MobileNavbar from "./MobileNavbar";
import SocialniSite from "./SocialniSite";
import ScroolProgres from "./ScroolProgres";

const Navbar = () => {
  const [close, setClose] = useState(true);
  const [openMobileNav, setOpenMobileNav] = useState(true);

  const toggleMobileNav = () => {
    setClose(!close);
    setOpenMobileNav(!openMobileNav);
  };
  
  return (
    <div className=" fixed right-0 left-0 bg-dark">
    <div className="max-w-6xl m-auto p-1  w-full  bg-dark ">
    
      <header className="flex  justify-between w-full items-center   h-[65px] ">
        {/* Logo */}
        <div className=" flex items-center justify-between w-full md:w-auto ">
          <div className="p-2 md:p-4 ">
          <h2 className=" cursor-pointer font-courgate tracking-wide text-xl md:text-2xl ">Karel <span className="text-purple-500">Švancar</span> </h2>
          </div>
          
          {/* Hamburger */}

          <div
            className="flex md:hidden p-2 md:p-4"
            onClick={() => toggleMobileNav()}
          >
            {close ? <GiHamburgerMenu size={30} className="hover:fill-purple-500 transition-all duration-100 cursor-pointer" /> : <IoClose size={30} className="hover:fill-purple-500 transition-all duration-100 cursor-pointer" />}{" "}
          </div>
        </div>
        

       
        {/* Menu Desktop */}
        <nav className=" gap-4 hidden md:flex items-center justify-center">
          <li className="text-lg font-chakra-petch tracking-wider text-purple-500 cursor-pointer hover:border-b-2 hover:text-purple-300 border-purple-300 transition-all duration-100">Home</li>
          <li className="text-lg font-chakra-petch tracking-wider text-purple-500 cursor-pointer hover:border-b-2 hover:text-purple-300 border-purple-300 transition-all duration-100">O mě</li>
          <li className="text-lg font-chakra-petch tracking-wider text-purple-500 cursor-pointer hover:border-b-2 hover:text-purple-300 border-purple-300 transition-all duration-100">Zkušenosti</li>
          <li className="text-lg font-chakra-petch tracking-wider text-purple-500 cursor-pointer hover:border-b-2 hover:text-purple-300 border-purple-300 transition-all duration-100">Projekty</li>
          <li className="text-lg font-chakra-petch tracking-wider text-purple-500 cursor-pointer hover:border-b-2 hover:text-purple-300 border-purple-300 transition-all duration-100">Kontakt</li>
        </nav>
        {/* Social Media */}
        <section className=" h-full  hidden md:flex p-4">
          <SocialniSite/>
        </section>
        
        
      </header>
      
      {/* Menu Mobile */}
      <div className=" relative w-full   ">
        <div className={` absolute  ${openMobileNav ? " -left-full " : " left-0 right-0 "} transition-all duration-100`}>
          <MobileNavbar toggleMobileNav={toggleMobileNav} />
        </div>
        </div>
    </div>
    <ScroolProgres/>
    </div>
  );
};

export default Navbar;

import React, { useState } from "react";
import { FaDiscord } from "react-icons/fa";
import { BsGithub, BsInstagram } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  const [close, setClose] = useState(true);
  const [openMobileNav, setOpenMobileNav] = useState(true);

  const toggleMobileNav = () => {
    setClose(!close);
    setOpenMobileNav(!openMobileNav);
  };
  
  return (
    <div className="max-w-6xl m-auto p-1  ">
    
      <header className="flex justify-between items-center h-[70px] border">
        {/* Logo */}
        <div className="flex items-center justify-between w-full md:w-auto border">
          <h2>Karel Švancar</h2>
          {/* Hamburger */}

          <div
            className="flex md:hidden"
            onClick={() => toggleMobileNav()}
          >
            {close ? <GiHamburgerMenu /> : <IoClose />}{" "}
          </div>
        </div>
        

       
        {/* Menu Desktop */}
        <nav className=" gap-2 hidden md:flex items-center justify-center">
          <li>Home</li>
          <li>O mě</li>
          <li>Zkušenosti</li>
          <li>Projekty</li>
          <li>Kontakt</li>
        </nav>
        {/* Social Media */}
        <section className=" gap-2 hidden md:flex">
          <i>
            <FaDiscord />
          </i>
          <i>
            <BsGithub />
          </i>
          <i>
            <BsInstagram />
          </i>
        </section>
        
      </header>
      {/* Menu Mobile */}
      <div className="relative ">
        <div className={`absolute ${openMobileNav ? "-left-full" : "left-0"} transition-all duration-100`}>
          <MobileNavbar toggleMobileNav={toggleMobileNav} />
        </div>
        </div>
    </div>
  );
};

export default Navbar;

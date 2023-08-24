import React, { useState } from "react";
import { FaDiscord } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { BsGithub, BsInstagram } from "react-icons/bs";
import SocialniSite from "./SocialniSite";

const MobileNavbar = ({ toggleMobileNav }) => {
  const [close, setClose] = useState(true);
  const [openMobileNav, setOpenMobileNav] = useState(false);

  return (
    <div className="w-full bg-dark p-4 z-10 ">
      {/* Menu */}
      <nav className="flex flex-col gap-2 p-4 ">
        <li className="text-white border-b border-white font-chakra-petch font-bold text-lg cursor-pointer hover:text-purple-500 transition-all " onClick={() => toggleMobileNav()}>Home</li>
        <li className="text-white border-b border-white font-chakra-petch font-bold text-lg cursor-pointer hover:text-purple-500 transition-all " onClick={() => toggleMobileNav()}>O mě</li>
        <li className="text-white border-b border-white font-chakra-petch font-bold text-lg cursor-pointer hover:text-purple-500 transition-all " onClick={() => toggleMobileNav()}>Zkušenosti</li>
        <li className="text-white border-b border-white font-chakra-petch font-bold text-lg cursor-pointer hover:text-purple-500 transition-all " onClick={() => toggleMobileNav()}>Projekty</li>
        <li className="text-white border-b border-white font-chakra-petch font-bold text-lg cursor-pointer hover:text-purple-500 transition-all " onClick={() => toggleMobileNav()}>Kontakt</li>
      </nav>
      {/* Social Media */}
      <section className="w-full h-full"> <SocialniSite/></section>
    </div>
  );
};

export default MobileNavbar;

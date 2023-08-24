import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import SocialniSite from "./SocialniSite";

const MobileNavbar = ({ toggleMobileNav, scrollToSection, sections }) => {
  const [openMobileNav, setOpenMobileNav] = useState(false);

  const toggleNav = (sectionId) => {
    setOpenMobileNav(false);
    toggleMobileNav();
    scrollToSection(sectionId);
  };

  return (
    <div
      className={`w-full bg-dark p-4 z-10 ${
        openMobileNav ? "" : "-left-2 right-full"
      } transition-all duration-100`}
    >
      <nav className="flex flex-col gap-2 p-4">
        {sections.map((section) => (
          <li
            key={section.id}
            className="text-white border-b border-white font-chakra-petch font-bold text-lg cursor-pointer hover:text-purple-500 transition-all"
            onClick={() => toggleNav(section.id)}
          >
            {section.label}
          </li>
        ))}
      </nav>
      <section className="w-full h-full">
        <SocialniSite />
      </section>
    </div>
  );
};

export default MobileNavbar;

import React, { useState } from "react";
import { FaDiscord } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { BsGithub, BsInstagram } from "react-icons/bs";

const MobileNavbar = ({ toggleMobileNav }) => {
  const [close, setClose] = useState(true);
  const [openMobileNav, setOpenMobileNav] = useState(false);

  return (
    <div className="w-full border">
      {/* Menu */}
      <nav className="flex flex-col gap-2">
        <li onClick={() => toggleMobileNav()}>Home</li>
        <li onClick={() => toggleMobileNav()}>O mě</li>
        <li onClick={() => toggleMobileNav()}>Zkušenosti</li>
        <li onClick={() => toggleMobileNav()}>Projekty</li>
        <li onClick={() => toggleMobileNav()}>Kontakt</li>
      </nav>
      {/* Social Media */}
      <section className="flex gap-2">
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
    </div>
  );
};

export default MobileNavbar;

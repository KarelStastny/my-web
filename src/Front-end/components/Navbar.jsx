import React from "react";
import { FaDiscord } from "react-icons/fa";
import { BsGithub, BsInstagram } from "react-icons/bs";

const Navbar = () => {
  return (
    <div>
      <header className="flex">
        {/* Logo */}
        <div><h2>Karel Švancar</h2></div>
        {/* Menu */}
        <nav>
            <li>Home</li>
            <li>O mě</li>
            <li>Projekty</li>
            <li>Kontakt</li>

        </nav>
        {/* Social Media */}
        <section>
            <i><FaDiscord/></i>
            <i><BsGithub/></i>
            <i><BsInstagram/></i>
        </section>
      </header>
    </div>
  );
};

export default Navbar;

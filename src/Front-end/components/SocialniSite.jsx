import React from "react";
import { FaDiscord } from "react-icons/fa";

import { BsGithub, BsInstagram } from "react-icons/bs";

const SocialniSite = () => {
  return (
    <section className="flex gap-4 items-center justify-center mt-3">
      <a href="https://discordapp.com/user/448679048860663818" target="_blank" rel="noopener noreferrer">
        <i>
          <FaDiscord
            size={30}
            className="hover:fill-purple-500 cursor-pointer"
          />
        </i>
      </a>
      <a href="https://github.com/KarelStastny" target="_blank" rel="noopener noreferrer">
        {" "}
        <i>
          <BsGithub
            size={30}
            className="hover:fill-purple-500 cursor-pointer"
          />
        </i>
      </a>

      <a href="https://www.instagram.com/karell.s_29/" target="_blank" rel="noopener noreferrer">
        {" "}
        <i>
          <BsInstagram
            size={30}
            className="hover:fill-purple-500 cursor-pointer"
          />
        </i>
      </a>
    </section>
  );
};

export default SocialniSite;

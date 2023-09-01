import React, { useState } from "react";
import { FaDiscord } from "react-icons/fa";

import { BsGithub, BsInstagram } from "react-icons/bs";

const SocialniSite = () => {
  const [showDiscord, setShowDiscord] = useState(false)


  return (
    <section className="flex gap-4 items-center justify-center mt-3">
      <div className="relative">
        <i>
          <FaDiscord
            size={30}
            className="hover:fill-purple-500 cursor-pointer"
            onClick={() => setShowDiscord(!showDiscord)}
          />
        </i>
        {showDiscord && (
          <div className="bg-dark border border-purple-500  rounded-lg absolute z-50 -bottom-16 -left-4">
            <p className="mx-4 my-2">Karel29#9746</p>
          </div>
        )}
      </div>
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

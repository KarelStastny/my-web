import React from 'react'
import { FaDiscord } from "react-icons/fa";

import { BsGithub, BsInstagram } from "react-icons/bs";

const SocialniSite = () => {
  return (
    <section className="flex gap-4 items-center justify-center mt-3">
        <i>
          <FaDiscord size={30} className="hover:fill-purple-500 cursor-pointer" />
        </i>
        <i>
          <BsGithub size={30} className="hover:fill-purple-500 cursor-pointer" />
        </i>
        <i>
          <BsInstagram size={30} className="hover:fill-purple-500 cursor-pointer" />
        </i>
      </section>
  )
}

export default SocialniSite

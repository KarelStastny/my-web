import React, { useState } from 'react';
import dataExperience from '../../Back-end/dataExperience';
import {MdKeyboardArrowDown,MdKeyboardArrowUp} from "react-icons/md"

const Experience = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (index) => {
    if (selected === index) {
      setSelected(null);
    } else {
      setSelected(index);
    }
  };

  return (
    <div className="faq">
      <div className="w-[350px] bg-dark">
        {dataExperience.map((one) => (
          <div className="itembox" key={one.id}>
            <div
              className="title flex justify-between items-center p-4 rounded bg-dark-brown cursor-pointer transition-colors hover:text-orange-icon"
              onClick={() => toggle(one.id)}
            >
              <h2 className="text-white-brown">{one.heading}</h2>
              <span className="text-2xl font-bold">{selected === one.id ? <MdKeyboardArrowUp/> : <MdKeyboardArrowDown/>}</span>
            </div>
            <div
              className={`content ${selected === one.id ? 'max-h-500px transition-max-height duration-2000' : 'max-h-0 overflow-hidden transition-max-height duration-700'}`}
            >
              <p className="p-4 text-justify">{one.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
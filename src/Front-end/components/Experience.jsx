import React, { useRef, useState } from "react";
import dataExperience from "../../Back-end/dataExperience";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const Experience = () => {
  const refExperience = useRef(null);
  const [selected, setSelected] = useState(null);

  const toggle = (index) => {
    if (selected === index) {
      setSelected(null);
    } else {
      setSelected(index);
    }
  };

  return (
    <div ref={refExperience} className="faq p-4 bg-dark">
      <div className="flex items-center justify-center mt-4">
        <h2 className=" font-courgate tracking-wide text-xl md:text-2xl lg:text-4xl ">
          Používané <span className="text-purple-500">Technologie</span>{" "}
        </h2>
      </div>
      <div className="w-full max-w-[500px] m-auto mt-8 ">
        {dataExperience.map((one) => (
          <div className="itembox" key={one.id}>
            <div
              className="flex justify-between items-center p-2 bg-primary rounded-md mb-2 cursor-pointer hover:text-purple-500 font-semibold pl-4 transition-all duration-150"
              onClick={() => toggle(one.id)}
            >
              <h2
                className={` ${
                  selected === one.id ? " text-purple-500" : "text-white"
                } md:text-lg `}
              >
                {one.heading}
              </h2>
              <span className="text-2xl font-bold">
                {selected === one.id ? (
                  <MdKeyboardArrowUp className="fill-purple-500" />
                ) : (
                  <MdKeyboardArrowDown className="fill-purple-500" />
                )}
              </span>
            </div>
            <div
              className={` ${
                selected === one.id
                  ? "max-h-500px transition-max-height duration-2000"
                  : "max-h-0 overflow-hidden transition-max-height duration-700"
              }`}
            >
              <p className=" px-4 pb-2 text-justify">{one.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;

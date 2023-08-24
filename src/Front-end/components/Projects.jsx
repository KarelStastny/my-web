import React, { useState } from "react";
import dataProject from "../../Back-end/dataProject";
import { IoCloseSharp } from "react-icons/io5";

const Projects = () => {
  const [selected, setSelected] = useState(null);
  const [selectedProject, setSelectedProject] = useState([]);

  // Přepínač
  const toggle = (one, index) => {
    setSelected(selected === index ? null : index);
    setSelectedProject(one);
  };
  console.log(selectedProject);

  return (
    <div className="max-w-6xl m-auto p-1 ">
      <div className="flex items-center justify-center mt-4">
        <h2 className=" font-courgate tracking-wide text-xl md:text-2xl lg:text-4xl ">
          Všechny <span className="text-purple-500">Projekty</span>{" "}
        </h2>
      </div>

      {/* Filter menu */}
      <div>
        <button>Všechny</button>
        <button>JavaScript</button>
        <button>React</button>
        <button>Styly</button>
        <button>Nejlepší projekty</button>
      </div>

      {/* Projekty */}
      <div className="flex items-center justify-center  flex-wrap gap-2 md:gap-6   ">
        {dataProject.map((one) => (
          <div
            key={one.id}
            onClick={() => toggle(one, one.id)}
            className=" cursor-pointer w-[75%] sm:w-[45%] lg:w-[30%] bg-dark hover:bg-purple-700  transition-all duration-100 rounded-lg"
          >
            {/* Img projektu */}
            <div className="h-[200px] w-full p-2">
              <img
                src={one.mainFoto}
                className="w-full h-full rounded-lg  object-cover"
                alt=""
              />
            </div>

            {/* text */}
            <div className="flex justify-between items-center rounded-lg  bg-primary m-2 h-[50px] p-2">
              <h2 className="w-[85%] uppercase font-semibold text-purple-500">
                {one.heading}
              </h2>
              <img
                className="w-[15%] h-full object-contain"
                src={one.mainTechnology}
                alt=""
              />
            </div>
          </div>
        ))}
      </div>
      {/* Otevřený projekt */}

      {selected !== null && (
        <div className="fixed top-0 left-0  w-screen h-screen bg-gray-500 bg-opacity-50 flex justify-center items-center">
          {/* Konkrtíní otevřený projekt */}

          <div className="bg-dark max-w-[90%] lg:max-w-[70%] mr-4 p-4 rounded-lg flex flex-col">
            {/* Horní část */}
            <section className="flex items-center justify-between">
              <div className="flex items-center justify-center">
                {/* Hlavní tech */}
                <img
                  src={selectedProject.mainTechnology}
                  className="w-[40px] md:w-[55px]  m-1 mr-8"
                  alt=""
                />

                {/* Ostatní tech */}
                <div className="flex ">
                  {selectedProject.secondTechnology.map((oneTech, index) => (
                    <img
                      key={index}
                      className="w-[20px] md:w-[30px]  m-2 object-contain"
                      src={oneTech.tech}
                      alt=""
                    />
                  ))}
                </div>
              </div>

              {/* Zavírací tlačítko
               */}
              <div>
                <button onClick={() => setSelected(null)}>
                  <IoCloseSharp
                    size={30}
                    className="fill-white hover:fill-purple-500 transition-all duration-100 "
                  />
                </button>
              </div>
            </section>

            {/* Spodní část */}
            <section className="flex items-center justify-center  flex-col md:flex-row">
              {/* Levá část */}
              <div className=" w-full md:w-[55%] ">
                <img
                  src={selectedProject.mainFoto}
                  className="rounded-lg"
                  alt=""
                />
              </div>
              {/* Pravá část */}
              <div className="w-full  md:w-[45%] md:p-4 mt-4 md:mt-0">
                <h2 className="font-nunito-sans text-xl text-purple-500 mb-6 md:mb-2 font-semibold">
                  {selectedProject.heading}
                </h2>
                <p className="underline font-nunito-sans text-lg ">
                  Popis projektu:
                </p>
                <p className="pl-2 font-thin mb-4">{selectedProject.text}</p>

                {/* Odkaz na projekt */}
                <div className="flex w-full justify-center items-center mt-6 mb-6">
                  <a
                    href={selectedProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    type="submit"
                    className=" border-2 rounded-md  border-purple-600 hover:bg-purple-600 hover:text-dark font-bold transition-all duration-200 py-2 px-4 text-center"
                  >
                    Přejít na projekt
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;

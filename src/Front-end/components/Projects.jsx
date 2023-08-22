import React, { useState } from "react";
import dataProject from "../../Back-end/dataProject";

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
            onClick={() => toggle(one, one.id)}
            className=" cursor-pointer w-[25%] bg-dark rounded-lg"
          >
            {/* Img projektu */}
            <div className="h-[200px] p-2">
              <img src={one.mainFoto} className="w-full h-full" alt="" />
            </div>

            {/* text */}
            <div className="flex justify-between items-center h-[50px] p-2">
              <h2 className="w-[85%]">{one.heading}</h2>
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
        <div className="fixed top-0 left-0  w-screen h-screen bg-gray-800 bg-opacity-50 flex justify-center items-center">
          {/* Konkrtíní otevřený projekt */}

          <div className="bg-red-100 p-4 rounded-lg flex flex-col">
            {/* Horní část */}
            <section className="flex items-center justify-between">
              <div className="flex">
                {/* Hlavní tech */}
                <img
                  src={selectedProject.mainTechnology}
                  className="w-[25px]"
                  alt=""
                />

                {/* Ostatní tech */}
                <div className="flex">
                {selectedProject.secondTechnology.map((oneTech, index) => (
                  <img
                    key={index}
                    className="w-[20px]"
                    src={oneTech.tech}
                    alt=""
                  />
                ))}
                </div>
               
              </div>

              {/* Zavírací tlačítko
               */}
              <div>
                <button onClick={() => setSelected(null)}>Zavřít</button>
              </div>
            </section>

            {/* Spodní část */}
            <section className="flex items-center justify-center">
              {/* Levá část */}
               <div>
                <img src={selectedProject.mainFoto} alt="" />
               </div>
              {/* Pravá část */}
              <div>
                <h2>{selectedProject.heading}</h2>
                <p>{selectedProject.text}</p>
                <p>{selectedProject.url}</p>
              </div>
            </section>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;

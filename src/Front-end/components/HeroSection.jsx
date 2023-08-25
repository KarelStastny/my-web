import React, { useRef } from "react";
import developer from "../../images/developer.png";

const HeroSection = ({ scrollToSection, sections }) => {
  const refHome = useRef(null)
  return (
    <div ref={refHome} className="w-full mt-[70px]  h-full md:pt-[130px] md:mb-[130px] md:flex">
      <div className="max-w-6xl m-auto p-1">
        {/* Hero Section */}
        <section className=" flex flex-col-reverse md:flex-row p-2">
          {/* Text */}
          <div className=" w-full lg:w-[60%] h-full flex items-start justify-center flex-col">
            <h1 className="text-purple-500 lg:text-2xl pb-2 lg:pb-4 tracking-wider font-bold text-md">
              Ahoj, jsem Karel.
            </h1>
            <h2 className="tracking-widest lg:text-4xl pb-2 lg:pb-4 font-bold text-2xl">
              Web Developer
            </h2>
            <p className="p-2 text-lg lg:text-xl font-nunito-sans text-justify md:text-left">
              Vítejte na mém webu, kde prezentuji své vývojové dovednosti a
              projekty. Jsem nadšený začínající frontend developer, který se
              snaží získat svou první pracovní příležitost.
            </p>
            <p className="p-2 text-lg lg:text-xl font-nunito-sans text-justify md:text-left">
              Moje práce je zaměřena na tvorbu moderních a responzivních
              webových stránek. Prozkoumejte mé projekty v sekci "Projekty" a
              pokud máte zájem spolupracovat, rád se sejdu online nebo na kávě.
            </p>
            <div className="flex w-full justify-center items-center mt-6 mb-6">
              <button onClick={() => scrollToSection("contact")} className=" border-2 rounded-md  border-purple-600 hover:bg-purple-600 hover:text-dark font-bold transition-all duration-200 py-2 px-4 text-center">
                Kontaktujte mě
              </button>
            </div>
          </div>
          {/* Foto */}
          <div className=" w-full lg:w-[40%]">
            <img src={developer} alt="" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default HeroSection;

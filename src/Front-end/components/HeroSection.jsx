import React from "react";
import developer from "../../images/developer.png";

const HeroSection = () => {
  return (
    <div className="w-full bg-dark">
      <div className="max-w-6xl m-auto p-1">
        {/* Hero Section */}
        <section className="border flex">
          {/* Text */}
          <div className="border w-[60%] flex items-start justify-center flex-col">
            <h1>Ahoj, jsem Karel.</h1>
            <h2>Web Developer</h2>
            <p>
              Vítejte na mém webu, kde prezentuji své vývojové dovednosti a projekty. Jsem nadšený začínající frontend developer, který se snaží získat svou první pracovní příležitost.
            </p>
            <p>
              Moje práce je zaměřena na tvorbu moderních a responzivních webových stránek. Prozkoumejte mé projekty v sekci "Projekty" a pokud máte zájem spolupracovat, rád se sejdeme na kávě nebo online.
            </p>
            <button>Kontaktujte mě</button>
          </div>
          {/* Foto */}
          <div className="border w-[40%]">
            <img src={developer} alt="" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default HeroSection;

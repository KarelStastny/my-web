import React, { useRef } from "react";
import { useForm, ValidationError } from "@formspree/react";
import SocialniSite from "./SocialniSite";

const Contact = () => {
  const refContact = useRef(null);
  const [state, handleSubmit] = useForm("maygojwe");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <div className="bg-dark">
      <div ref={refContact} className="max-w-6xl m-auto p-1 mt-11">
        <form
          className="flex flex-col max-w-[350px] md:max-w-[650px] p-2 md:p-4 m-auto  gap-2"
          onSubmit={handleSubmit}
        >
          <div className="flex items-center justify-center mt-4">
            <h2 className=" font-courgate tracking-wide text-xl md:text-2xl  ">
              Kontaktujte <span className="text-purple-500">mě</span>{" "}
            </h2>
          </div>

          <div className="flex flex-col md:flex-row gap-2 w-full items-center justify-center">
            {/* Jméno */}
            <input
              className="text-dark w-full p-2 rounded-lg outline-none border-2 border-purple-500"
              id="name"
              name="name"
              placeholder="Vaše Jméno"
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />

            {/* Email */}
            <input
              className="text-dark w-full p-2 rounded-lg  border-2 outline-none border-purple-500"
              id="email"
              type="email"
              name="email"
              placeholder="Email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          {/* Předmět */}
          <input
            className="text-dark w-full p-2 rounded-lg border-2 border-purple-500 outline-none"
            id="message"
            name="message"
            placeholder="Předmět"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          {/* Text Zprávy */}
          <textarea
            className="text-dark w-full outline-none p-2 rounded-lg   border-2 border-purple-500 min-h-[150px]"
            id="message"
            name="message"
            placeholder="Vaše zpráva"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <div className="flex w-full justify-center items-center mt-6 mb-6">
            <button
              type="submit"
              disabled={state.submitting}
              className=" border-2 rounded-md  border-purple-600 hover:bg-purple-600 hover:text-dark font-bold transition-all duration-200 py-2 px-4 text-center"
            >
              Odeslat
            </button>
          </div>
        </form>
        <div className="p-4">
          <SocialniSite />
        </div>
      </div>
    </div>
  );
};

export default Contact;

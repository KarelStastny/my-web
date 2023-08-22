import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const Contakt = () => {
  const [state, handleSubmit] = useForm("maygojwe");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <div className="max-w-6xl m-auto p-1">
      <form className="flex flex-col max-w-[350px] md:max-w-[650px] p-2 md:p-4 m-auto border gap-2" onSubmit={handleSubmit}>
        <label htmlFor="email">Email Address</label>

        <div className="flex flex-col md:flex-row gap-2 w-full items-center justify-center">
          {/* Jméno */}
          <input className="w-full p-2 rounded-lg outline-purple-500" id="name" name="name" placeholder="Vaše Jméno" />
          <ValidationError
            prefix="Name"
            field="name"
            errors={state.errors}
          />

          {/* Email */}
          <input className="w-full p-2 rounded-lg outline-purple-500" id="email" type="email" name="email" placeholder="email" />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        {/* Předmět */}
        <input className="w-full p-2 rounded-lg outline-purple-500" id="subject" name="subject" placeholder="Předmět" />
        <ValidationError
          prefix="Subject"
          field="subject"
          errors={state.errors}
        />
        {/* Text Zprávy */}
        <textarea className="w-full p-2 rounded-lg text-black outline-purple-500 min-h-[150px]" id="message" name="message" placeholder="Vaše zpráva" />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />

        <button className="flex items-center justify-center" type="submit" disabled={state.submitting}>
          <p className="bg-purple-800 text-white px-4 py-2 hover:bg-purple-600 rounded-lg">
          Submit
          </p>
          
        </button>
      </form>
    </div>
  );
};

export default Contakt;

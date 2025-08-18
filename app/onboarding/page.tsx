// remember to revert back to server rendered page, with client components and animations

"use client";

import { useState } from "react";

const OnboardingPage = () => {
  const [first_name, set_first_name] = useState<string>("");
  const [surname, set_surname] = useState<string>("");
  const [alias, set_alias] = useState<string>("");

  return (
    <div className="w-full min-h-screen flex justify-center items-center space-y-3 flex-col">
      <input
        className=" bg-black w-56 h-8 text-white"
        type="text"
        name="first_name"
        id="first_name"
        placeholder="first name"
      />
      <input
        className=" bg-black w-56 h-8 text-white"
        type="text"
        name="surname"
        id="surname"
        placeholder="surname"
      />
      <input
        className=" bg-black w-56 h-8 text-white"
        type="text"
        name="alias"
        id="alias"
        placeholder="alias"
      />

      <button className=" h-fit py-2 w-fit px-8 bg-black text-white">
        Complete!
      </button>
    </div>
  );
};

export default OnboardingPage;

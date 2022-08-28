import Icon from "astro-icon";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai/index";

export function LandingButton() {
  const handleClick = () => {
    window.location.href = "/home/";
    console.log("clicked");
  };
  return (
    <a href="/home">
      <button
        onClick={() => handleClick()}
        className="flex justify-between border-white border-2 pl-20 pr-20 pb-2 pt-2 rounded-xl text-white font-bold uppercase hover:bg-black/50 transition duration-300"
      >
        Next
        <AiOutlineArrowRight className="text-2xl" />
      </button>
    </a>
  );
}

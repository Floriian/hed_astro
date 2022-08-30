import React, { useState } from "react";
import { GrMenu } from "react-icons/gr/index";
import { BsCamera } from "react-icons/bs/index";
import { useScroll } from "../hooks/index";

interface INavLink {
  name: string;
  url: string;
}
interface INavLinks extends Array<INavLink> {}

type TNavLink = {
  name: string;
  url: string;
};

export default function Navbar() {
  const [open, setOpen] = useState<boolean>(true);
  const scroll = useScroll();

  const navLinks: INavLinks = [
    {
      name: "Főoldal",
      url: "/home",
    },
    {
      name: "Galéria",
      url: "/gallery",
    },
    {
      name: "Rólam",
      url: "/about-me",
    },
    {
      name: "Kapcsolat",
      url: "/contact",
    },
  ];

  const handleOpen = () => {
    console.log("clicked");
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  return (
    <>
      <nav className="flex justify-between items-center w-full absolute z-50">
        <BsCamera className="text-4xl m-10 w-100 hidden md:block" />
        <div className="md:hidden flex w-full justify-end">
          <button
            className="outline-none text-4xl m-2 z-50 fixed"
            onClick={() => setOpen(!open)}
          >
            <GrMenu />
          </button>
        </div>
        <div className="w-full hidden md:flex justify-center text-black">
          <ul className="flex flex-col p-4 mt-40 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
            {navLinks.map((navLink: TNavLink, index: number) => (
              <li key={index}>
                <a href={navLink.url} className="block text-sm">
                  {navLink.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      {open ? (
        <nav className="w-full z-40 fixed">
          <ul
            className={
              scroll <= 200
                ? "bg-transparent h-auto text-white"
                : "bg-white h-auto text-black"
            }
          >
            {navLinks.map((navLink: TNavLink, index: number) => (
              <li
                key={index}
                className={
                  scroll <= 200
                    ? "p-2 text-2xl first-letter:uppercase"
                    : "p-2 text-2xl first-letter:uppercase border-b-2 border-gray-100"
                }
              >
                <a href={navLink.url} className="block">
                  {navLink.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </>
  );
}

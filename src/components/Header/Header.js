/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [show, setShow] = useState(false);

  const [stickyClass, setStickyClass] = useState("relative");

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 100
        ? setStickyClass("fixed top-0 left-0 z-50")
        : setStickyClass("relative");
    }
  };

  return (
    <div>
      <nav className="w-full bg-black relative">
        <div
          className={`container bg-black mx-auto w-full h-20 px-6 flex items-center justify-between ${stickyClass} `}
        >
          <div className="">
            <h1 className="lg:ml-24 font-bold text-white">
              <Link to="/">ADVOCATE</Link>
            </h1>
          </div>
          {/* <svg
            aria-label="Home"
            className="cursor-pointer w-12 sm:w-auto"
            id="logo"
            enableBackground="new 0 0 300 300"
            height={74}
            viewBox="0 0 300 300"
            width={73}
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <g>
              <path
                fill="#4c51bf"
                d="m234.735 35.532c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16zm0 24c-4.412 0-8-3.588-8-8s3.588-8 8-8 8 3.588 8 8-3.588 8-8 8zm-62.529-14c0-2.502 2.028-4.53 4.53-4.53s4.53 2.028 4.53 4.53c0 2.501-2.028 4.529-4.53 4.529s-4.53-2.027-4.53-4.529zm89.059 60c0 2.501-2.028 4.529-4.53 4.529s-4.53-2.028-4.53-4.529c0-2.502 2.028-4.53 4.53-4.53s4.53 2.029 4.53 4.53zm-40.522-5.459-88-51.064c-1.242-.723-2.773-.723-4.016 0l-88 51.064c-1.232.715-1.992 2.033-1.992 3.459v104c0 1.404.736 2.705 1.938 3.428l88 52.936c.635.381 1.35.572 2.062.572s1.428-.191 2.062-.572l88-52.936c1.201-.723 1.938-2.023 1.938-3.428v-104c0-1.426-.76-2.744-1.992-3.459zm-90.008-42.98 80.085 46.47-52.95 31.289-23.135-13.607v-21.713c0-2.209-1.791-4-4-4s-4 1.791-4 4v21.713l-26.027 15.309c-1.223.719-1.973 2.029-1.973 3.447v29.795l-52 30.727v-94.688zm0 198.707-80.189-48.237 51.467-30.412 24.723 14.539v19.842c0 2.209 1.791 4 4 4s4-1.791 4-4v-19.842l26.027-15.307c1.223-.719 1.973-2.029 1.973-3.447v-31.667l52-30.728v94.729z"
              />
            </g>
          </svg> */}
          <div>
            <div
              onclick="toggleMenu(true)"
              className="sm:block md:hidden text-gray-500 hover:text-gray-700 focus:text-gray-700 focus:outline-none"
              onClick={() => setShow(!show)}
            >
              {show ? (
                <svg
                  aria-haspopup="true"
                  aria-label="Main Menu"
                  xmlns="http://www.w3.org/2000/svg"
                  className="md:hidden icon icon-tabler icon-tabler-menu"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#2c3e50"
                  fill="none"
                  strokeLinecap="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <line x1={4} y1={16} x2={20} y2={16} />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
              {show && (
                <div id="menu" className="block lg:hidden ">
                  <div
                    onClick={() => setShow(!show)}
                    className="block md:hidden lg:hidden text-gray-500 hover:text-gray-700 focus:text-gray-700 fixed focus:outline-none z-30 top-0 pt-6"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#2c3e50"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <line x1={18} y1={6} x2={6} y2={18} />
                      <line x1={6} y1={6} x2={18} y2={18} />
                    </svg>
                  </div>
                  <ul className="flex text-3xl md:text-base items-center py-10 md:flex flex-col md:flex-row justify-center fixed md:relative top-0 bottom-0 left-0 right-0 bg-white md:bg-transparent z-20">
                    <li className="text-gray-800 hover:text-gray-900 cursor-pointer lg:text-lg pt-10 md:pt-0">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="text-gray-800 hover:text-gray-900 cursor-pointer lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10">
                      <Link to="/about">About</Link>
                    </li>
                    <li className="text-gray-800 hover:text-gray-900 cursor-pointer lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10">
                      <Link to="/services">Services</Link>
                    </li>
                    <li className="text-gray-800 hover:text-gray-900 cursor-pointer lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10">
                      <Link to="/blog">Blog</Link>
                    </li>
                    <li className="text-gray-800 hover:text-gray-900 cursor-pointer lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10">
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <div id="menu" className="md:block lg:block hidden">
              <div
                onclick="toggleMenu(false)"
                className="block md:hidden lg:hidden text-gray-500 hover:text-gray-700 focus:text-gray-700 fixed focus:outline-none z-30 top-0 pt-6"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#2c3e50"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <line x1={18} y1={6} x2={6} y2={18} />
                  <line x1={6} y1={6} x2={18} y2={18} />
                </svg>
              </div>
              <ul className="flex text-3xl md:text-base items-center py-10 md:flex flex-col md:flex-row justify-center fixed md:relative top-0 bottom-0 left-0 right-0  md:bg-transparent z-20">
                <button className="btn hover:bg-white px-1 py-1 focus:outline-none bg-transparent transition duration-200 ease-in-out rounded border border-black">
                  <li className="text-white hover:text-black cursor-pointer lg:text-lg pt-10 md:pt-0 lg:mr-5 lg:ml-5 ">
                    <Link to="/">Home</Link>
                  </li>
                </button>
                <button className="btn hover:bg-white px-1 py-1 focus:outline-none bg-transparent transition duration-200 ease-in-out rounded border border-black ">
                  <li className="text-white  hover:text-black cursor-pointer lg:text-lg pt-10 md:pt-0 md:ml-5 lg:mr-5 md:mr-5">
                    <Link to="/about">About</Link>
                  </li>
                </button>
                <button className="btn hover:bg-white px-1 py-1 focus:outline-none bg-transparent transition duration-200 ease-in-out rounded border border-black ">
                  <li className="text-white hover:text-black cursor-pointer lg:text-lg pt-10 md:pt-0 md:ml-5 lg:mr-5 md:mr-5">
                    <Link to="/services">Services</Link>
                  </li>
                </button>
                <button className="btn hover:bg-white px-1 py-1 focus:outline-none bg-transparent transition duration-200 ease-in-out rounded border border-black ">
                  <li className="text-white hover:text-black cursor-pointer lg:text-lg pt-10 md:pt-0 md:ml-5 lg:mr-5 md:mr-5">
                    <Link to="/blog">Blog</Link>
                  </li>
                </button>
                <button className="btn hover:bg-white px-1 py-1 focus:outline-none bg-transparent transition duration-200 ease-in-out rounded border border-black ">
                  <li className="text-white hover:text-black cursor-pointer lg:text-lg pt-10 md:pt-0 md:ml-5 lg:mr-5 md:mr-5">
                    <Link to="/contact">Contact</Link>
                  </li>
                </button>
              </ul>
            </div>
          </div>
          <button className="focus:outline-none hidden md:block bg-transparent transition duration-150 ease-in-out hover:bg-white hover:text-black rounded border border-white text-white px-4 sm:px-8 py-1 sm:py-3 text-sm">
            <Link to="/contact">Sign In</Link>
          </button>
        </div>
      </nav>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";
// import img from '../../../assets/img/imae1.jpg'
export default function Heros() {
  return (
    <div>
      <div className=" hero min-h-screen ">
        <div className="container mx-auto flex flex-col items-center py-12 sm:py-24">
          <div className="w-11/12 sm:w-2/3 mb-5 sm:mb-10 mt-24">
            <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-gray-200 font-extrabold leading-tight">
              The Freedom to Create the{" "}
              <span className="text-gray-400">Websites</span> You Want
            </h1>
            <p className="mt-5 sm:mt-10 text-white font-normal text-center text-lg sm:text-lg">
              A professional website drives sales. Create a beautiful website to
              impress and engage new customers – and establish your business
              online.
            </p>
          </div>
          <div className=" flex justify-center items-center">
            {/* <button className="focus:outline-none bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-4 sm:px-10 py-2 sm:py-4 text-sm">
              Get Started
            </button> */}
            <button className="ml-4 focus:outline-none bg-black transition duration-150 ease-in-out hover:bg-white hover:text-black sm:hover:text-black rounded text-white px-12 sm:px-10 py-5 sm:py-4 text-xl">
              <Link to="/contact">Contact</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

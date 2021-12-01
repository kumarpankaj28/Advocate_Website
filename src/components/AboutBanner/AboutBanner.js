import React from 'react'
import img2 from "../../assets/img/imae1.jpg";

export default function AboutBanner() {
    return (
        <div>
            <div className="relative">
          <img
            className=" w-full h-96 object-cover rounded-md shadow-xl"
            src={img2}
            alt="Do not match img"
          />
          <div className="absolute top-4 left-80 overlaytwo h-96 flex flex-col item-center justify-center ">
            <h1 className=" z-40 text-5xl font-bold text-right mb-10 lg:text-center lg:text-7xl lg:px-56 text-green-500">
              ABOUT ME
            </h1>
          </div>
        </div>
        </div>
    )
}

import React from "react";
import { Link } from "react-router-dom";

function Offeritem({ svg, title, link, fliptext }) {
  return (
    <Link to={link} className="sm:w-full w-screen block pb-2">
      <div className="lg:px-0 px-4 w-full ">
        <div
          className={`p-5 lg:h-[300px] h-[350px] grid grid-cols-5 gap-8 bg-white rounded-md overflow-hidden shadow-sm shadow-white transition-shadow duration-300 hover:shadow-lg hover:shadow-blackk/10 border border-transparent hover:border-gray-200`}
        >
          <div className="w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0">
            <div className="rounded-full bg-bloo/5 w-full h-full flex items-center justify-center">
              <img
                src={svg}
                alt="svg"
                className="object-contain w-3/4 h-3/4 scale-[.85]"
              />
            </div>
          </div>
          <div className="col-span-4 ml-4">
            <h3 className="text-blackk fontweight_1 text-xl pt-1 pb-3 sm:text-2xl">
              {title}
            </h3>
            <h1 className="font-medium text-blackk/60 sm:text-xl text-lg ">
              {fliptext}
            </h1>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Offeritem;

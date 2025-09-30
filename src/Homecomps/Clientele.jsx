import React from "react";
import Clients from "./Clients";

function Clientele() {
  return (
    <div className="relative font-manrope text-blackk mb-8 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 w-full h-full -z-10">
        <div className="bg-map bg-no-repeat bg-cover bg-center h-full w-full opacity-70"></div>
      </div>

      <div className="relative max-w-5xl mx-auto">
        <h2 className="text-bloo text-center fontsize_2 fontweight_1 mb-2 sm:mb-3">
          Journey so far
        </h2>
        <h1 className="text-center fontsize_6 fontweight_1 mb-8 sm:mb-12 lg:mb-16">
          Milestones and Achievements
        </h1>

        {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 lg:gap-12"> */}
        <div style={{display :"flex" , justifyContent : "space-between" , columnGap : "1rem" }}>
          <Milestone number="14+" text="Years" smallText="Of Experience" />
          <Milestone
            number="150+"
            text="Projects"
            smallText="Delivered Successfully"
          />
          <Milestone number="60+" text="Clients" smallText="Globally" />
       
        </div>
        
      </div>
    </div>
  );
}

function Milestone({ number, text, smallText }) {
  return (
    <div className="text-center">
      <div className="text-bloo fontweight_1 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl mb-2">
        {number}
      </div>
      <div className="font-semibold text-base sm:text-lg lg:text-xl mb-1">
        {text}
      </div>
      <div className="text-sm lg:text-base text-gray-600">{smallText}</div>
    </div>
  );
}

export default Clientele;

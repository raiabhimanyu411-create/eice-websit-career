import React from "react";
import Footer from "../Othercomps/Footer";
import Copyright from "../Othercomps/Copyright";

import temp from "../assets/Compressed/temp.png";
import temp2 from "../assets/Compressed/temp2.png";
import espctquote1 from "../assets/Compressed/espctquote1.png";
import espctquote2 from "../assets/Compressed/espctquote2.png";
import petrosim1 from "../assets/Compressed/kbcchempetro1.png";
import petrosim2 from "../assets/Compressed/kbcchempetro2.png";
import adanigas1 from "../assets/Compressed/adanigas1.png";
import adanigas2 from "../assets/Compressed/adanigas2.png";
import datamgmt1 from "../assets/Compressed/datamgmt1.png";
import datamgmt2 from "../assets/Compressed/datamgmt2.png";
import scadanoralta1 from "../assets/Compressed/scadanoralta1.png";
import scadanoralta2 from "../assets/Compressed/scadanoralta2.png";
import NoraltaMath1 from "../assets/Compressed/noraltamath1.png";
import NoraltaMath2 from "../assets/Compressed/noraltamath2.png";
import "../fontCss.css";

import { GiVirtualMarker } from "react-icons/gi";
import { Link } from "react-router-dom";

function NoraltaMath() {
  return (
    <div className="">
      <div className="max-w-7xl  mx-auto px-4 2xl:pt-12 pt-32">
        <div className="w-full">
          <h1 className="text-bloo fontweight_1 text-center fontsize_2  py-2">
            FEMMS
          </h1>
          <h2 className="text-blackk  fontweight_1 text-center text-2xl sm:text-2xl mx-auto md:text-3xl lg:text-[32px] max-w-3xl py-1">
            Development of Fugitive Emission Monitoring, Estimation & Management
            System (FEMMS)
          </h2>
          <p className="fontweight_1 max-w-4xl mx-auto  text-blackk/60 fontsize_3 pt-4 px-4">
            Development of FEMMS: A comprehensive solution integrating advanced
            mathematical models and engineering techniques for monitoring,
            estimating, and managing fugitive emissions in industrial settings.
          </p>
          <div className="w-full max-w-7xl mx-auto items-center justify-center pt-8 pb-4 grid grid-cols-2 gap-4">
            <img src={temp2} alt="" className="w-full h-full object-fit" />
            <img src={temp} alt="" className="w-full h-full object-fit" />
          </div>
        </div>
        <div className="w-full pb-6">
          <h2 className="text-blackk max-w-3xl pb-2 fontweight_1 text-2xl sm:text-2xl mx-auto md:text-3xl lg:text-[32px] pt-12">
            Key Challenges
          </h2>
          <div className="max-w-3xl  mx-auto flex flex-col py-4 gap-4">
            <div className="flex gap-4 ">
              <h1 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2  py-2">
                01
              </h1>
              <p className="fontweight_1 text-blackk/60 fontsize_3 py-2">
                {" "}
                Data integration: Combining data from various sources including
                visual, infrared, and sensor-based measurements.
              </p>
            </div>
            <div className="flex gap-4">
              <h1 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2  py-2">
                02
              </h1>
              <p className="fontweight_1 text-blackk/60 fontsize_3 py-2">
                Mathematical modeling: Developing accurate models for emission
                estimation and flow prediction.
              </p>
            </div>
            <div className="flex gap-4">
              <h1 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2  py-2">
                03
              </h1>
              <p className="fontweight_1 text-blackk/60 fontsize_3 py-2">
                Visualization: Creating intuitive interfaces for displaying
                complex emission data.
              </p>
            </div>
            <div className="flex gap-4">
              <h1 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2  py-2">
                04
              </h1>
              <p className="fontweight_1 text-blackk/60 fontsize_3 py-2">
                Real-time monitoring: Implementing a system capable of
                continuous emission tracking and reporting.
              </p>
            </div>
            <div className="flex gap-4">
              <h1 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2  py-2">
                05
              </h1>
              <p className="fontweight_1 text-blackk/60 fontsize_3 py-2">
                Collaborative workflow: Designing a web-based platform for
                multi-user emission management.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-zinc-50 py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2  py-2">
            About Our Client
          </h1>
          <h2 className="text-blackk  fontweight_1 text-center text-2xl sm:text-2xl mx-auto md:text-3xl lg:text-[32px] max-w-3xl py-1">
            Noralta
          </h2>
          <p className="fontweight_1 text-blackk/60 text-center fontsize_3 pt-4">
            Noralta Technologies provides automation, instrumentation and
            electrical services to the energy industry.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4">
        <div className="pt-20 pb-6">
          <h1 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2  py-2">
            Unlocking Success
          </h1>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 pb-20">
          <div className="group cursor-pointer p-4 bg-zinc-50 rounded-md overflow-hidden shadow-sm shadow-zinc-50 transition-shadow duration-300 hover:shadow-lg hover:shadow-blackk/10 border border-zinc-50 border-transparent hover:border-gray-200 ">
            <div className="group-hover:scale-[.98] transition duration-200 grid grid-cols-1 gap-3">
              <div className="w-full h-full items-center justify-start px-2 pb-2">
                <GiVirtualMarker size={50} className="text-bloo" />
              </div>
              <div>
                <div className="flex flex-col p-2 text-start justify-end">
                  <h1 className="text-blackk fontweight_1 text-xl pt-1 pb-3 sm:text-2xl">
                    IDEATION:
                  </h1>
                  <p className="z-20 fontweight_1 text-blackk/60 fontsize_3">
                    We designed an integrated system that leverages digital
                    photogrammetry and mathematical surface modeling to provide
                    comprehensive fugitive emission management. Our focus was on
                    creating a platform that could accurately monitor, estimate,
                    and manage emissions in real-time.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="group cursor-pointer p-4 bg-zinc-50 rounded-md overflow-hidden shadow-sm shadow-zinc-50 transition-shadow duration-300 hover:shadow-lg hover:shadow-blackk/10 border border-zinc-50 border-transparent hover:border-gray-200 ">
            <div className="group-hover:scale-[.98] transition duration-200 grid grid-cols-1 gap-3">
              <div className="flex w-full h-full items-center justify-start px-2 pb-2">
                <GiVirtualMarker size={50} className="text-bloo" />
              </div>
              <div>
                <div className="flex flex-col p-2 text-start justify-end ">
                  <h1 className="text-blackk fontweight_1 text-xl pt-1 pb-3 sm:text-2xl">
                    OUR APPROACH
                  </h1>
                  <p className="z-20 fontweight_1 text-blackk/60 fontsize_3">
                    We prioritized the development of advanced mathematical
                    models using Mathematica for emission estimation and flow
                    prediction. By integrating digital photogrammetry techniques
                    from civil engineering, we created a robust system for
                    volumetric surface generation of gas emissions. The
                    implementation of a collaborative web-based workflow
                    management system ensured efficient emission management
                    across teams.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="group cursor-pointer p-4 bg-zinc-50 rounded-md overflow-hidden shadow-sm shadow-zinc-50 transition-shadow duration-300 hover:shadow-lg hover:shadow-blackk/10 border border-zinc-50 border-transparent hover:border-gray-200 ">
            <div className="group-hover:scale-[.98] transition duration-200 grid grid-cols-1 gap-3">
              <div className="flex w-full h-full items-center justify-start px-2 pb-2">
                <div className="grid grid-cols-2 gap-0">
                  <GiVirtualMarker size={50} className="text-bloo" />
                </div>
              </div>
              <div>
                <div className="flex flex-col p-2 text-start">
                  <h1 className="text-blackk fontweight_1 text-xl pt-1 pb-3 sm:text-2xl">
                    OUTCOMES
                  </h1>
                  <p className="z-20 fontweight_1 text-blackk/60 fontsize_3">
                    The FEMMS has revolutionized fugitive emission management in
                    industrial settings. The system's ability to integrate
                    visual and infrared imaging with mathematical modeling has
                    significantly improved emission detection, estimation
                    accuracy, and management efficiency.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full pb-20 px-4">
        <h2 className="text-blackk max-w-3xl pb-2 fontweight_1 text-2xl sm:text-2xl mx-auto md:text-3xl lg:text-[32px] pt-12">
          Project Outcomes
        </h2>
        <div className="max-w-3xl mx-auto flex flex-col py-4 gap-4">
          <div className="flex gap-4 rounded-xl border-2 border-blue-900/60 p-4 shadow-md shadow-blue-900/20">
            <h1 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2  py-2">
              01
            </h1>
            <p className="fontweight_1 text-blackk/60 fontsize_3 py-2">
              Developed a comprehensive Fugitive Emission Monitoring, Estimation
              & Management System (FEMMS).
            </p>
          </div>
          <div className="flex gap-4 rounded-xl border-2 border-blue-900/60 p-4 shadow-md shadow-blue-900/20">
            <h1 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2  py-2">
              02
            </h1>
            <p className="fontweight_1 text-blackk/60 fontsize_3 py-2">
              Implemented digital photogrammetry techniques for accurate
              volumetric surface generation of gas emissions.
            </p>
          </div>
          <div className="flex gap-4 rounded-xl border-2 border-blue-900/60 p-4 shadow-md shadow-blue-900/20">
            <h1 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2  py-2">
              03
            </h1>
            <p className="fontweight_1 text-blackk/60 fontsize_3 py-2">
              Created advanced mathematical surface models using Mathematica for
              precise emission estimation and flow prediction.
            </p>
          </div>
          <div className="flex gap-4 rounded-xl border-2 border-blue-900/60 p-4 shadow-md shadow-blue-900/20">
            <h1 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2  py-2">
              04
            </h1>
            <p className="fontweight_1 text-blackk/60 fontsize_3 py-2">
              Established a web-based collaborative workflow management system
              for efficient emission management.
            </p>
          </div>
          <div className="flex gap-4 rounded-xl border-2 border-blue-900/60 p-4 shadow-md shadow-blue-900/20">
            <h1 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2  py-2">
              05
            </h1>
            <p className="fontweight_1 text-blackk/60 fontsize_3 py-2">
              Successfully integrated visual, infrared, and mathematical
              modeling techniques to provide a holistic approach to emission
              monitoring and management.
            </p>
          </div>
        </div>
      </div>
      <div className="py-12 bg-zinc-50">
        <h1 className="text-bloo fontweight_1 text-center fontsize_2  py-2">
          More Like This
        </h1>
        <h2 className="text-blackk max-w-3xl pb-2 text-center fontweight_1 text-2xl sm:text-2xl mx-auto md:text-3xl lg:text-[32px]">
          Take a look at other Case Studies
        </h2>
        <div className="max-w-7xl mx-auto" style={{display : "flex" , flexWrap : "wrap" , justifyContent : "space-evenly" }} >
          <div className="other_case_study_box p-2 rounded-xl hover:scale-[.99] transition duration-300">
            <Link
              to="/Casestudy-PetroSIM"
              className="  p-2 md:p-4"
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
                <img
                  src={petrosim1}
                  className="  transition duration-300 filter grayscale hover:grayscale-0"
                />
                <div className="p-3 md:p-4">
                  <h3 className="fontweight_1 text-sm sm:text-base md:text-lg mb-1 sm:mb-2">
                    PetroSIM
                  </h3>
                  <p className=" text-blackk/60 fontsize_3 fontweight_1 text-left">
                    Product Quality Assurance for Refinery Simulation Tool
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className=" other_case_study_box  p-2 rounded-xl hover:scale-[.99] transition duration-300">
            <Link
              to="/Casestudy-Relimonitor"
              className=" p-2 md:p-4"
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
                <img
                  src={temp}
                  className=" transition duration-300 filter grayscale hover:grayscale-0"
                />
                <div className="p-3 md:p-4">
                  <h3 className="fontweight_1 text-sm sm:text-base md:text-lg mb-1 sm:mb-2">
                    RE.LI Monitor
                  </h3>
                  <p className=" text-blackk/60 fontsize_3 fontweight_1 text-left">
                    Developed a Real Time Sensor monitoring tool using SCADA
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className=" other_case_study_box p-2 rounded-xl hover:scale-[.99] transition duration-300">
            <Link
              to="/Casestudy-EspctQuote"
              className=" p-2 md:p-4"
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
                <img
                  src={espctquote1}
                  className=" transition duration-300 filter grayscale hover:grayscale-0"
                />
                <div className="p-3 md:p-4">
                  <h3 className="fontweight_1 text-sm sm:text-base md:text-lg mb-1 sm:mb-2">
                    ESPCT Quote
                  </h3>
                  <p className=" text-blackk/60 fontsize_3 fontweight_1 text-left">
                    Web Based Sales and Quotation Tool
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
      <Copyright />
    </div>
  );
}

export default NoraltaMath;

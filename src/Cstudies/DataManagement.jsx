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

import { GiVirtualMarker } from "react-icons/gi";
import { Link } from "react-router-dom";
import "../fontCss.css";

import "./Styles/Cstudies.css"

function DataManagement() {
  return (
    <div className="">
      <div className="max-w-7xl  mx-auto px-4 2xl:pt-12 pt-32">
        <div className="w-full">
          <h1 className="text-bloo fontweight_1 text-center fontsize_2  py-2">
            E&P Data Management on GIS
          </h1>
          <h2 className="text-blackk  fontweight_1 text-center text-2xl sm:text-2xl mx-auto md:text-3xl lg:text-[32px] max-w-3xl py-1">
            Construction and Operational Management System
          </h2>
          <p className="fontweight_1 max-w-4xl mx-auto  text-blackk/60 fontsize_3 pt-4 px-4">
            Development of a GIS-based real-time construction and operational
            management system for City Gas Distribution in Faridabad, India,
            integrating multiple data sources for comprehensive project
            execution and monitoring.
          </p>
          <div className="w-full max-w-7xl mx-auto items-center justify-center pt-8 pb-4 grid grid-cols-2 gap-4">
            <img src={temp} alt="" className="w-full h-full object-fit" />
            <img src={temp2} alt="" className="w-full h-full object-fit" />
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
                Implementing real-time construction data updates on a GIS
                platform
              </p>
            </div>
            <div className="flex gap-4">
              <h1 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2  py-2">
                02
              </h1>
              <p className="fontweight_1 text-blackk/60 fontsize_3 py-2">
                Integrating diverse data sources (Customer data, Honeywell
                SCADA, SAP) into a unified GIS system
              </p>
            </div>
            <div className="flex gap-4">
              <h1 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2  py-2">
                03
              </h1>
              <p className="fontweight_1 text-blackk/60 fontsize_3 py-2">
                Developing a final pipe book in APDM format
              </p>
            </div>
            <div className="flex gap-4">
              <h1 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2  py-2">
                04
              </h1>
              <p className="fontweight_1 text-blackk/60 fontsize_3 py-2">
                Ensuring seamless data flow between construction, operational,
                and financial systems
              </p>
            </div>
            <div className="flex gap-4">
              <h1 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2  py-2">
                05
              </h1>
              <p className="fontweight_1 text-blackk/60 fontsize_3 py-2">
                Creating a scalable solution that could be adapted for other
                city gas projects, particularly in the Middle East
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-zinc-50 py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2  py-2">
            About Our Clients
          </h1>

          <div className="dataManagement_our_clients">
            
            <div className="py-4  client_box ">
              <h2 className="text-blackk  fontweight_1 text-center text-2xl sm:text-2xl mx-auto md:text-3xl lg:text-[32px] max-w-3xl py-1">
                ENI
              </h2>
              <p className="fontweight_1 text-blackk/60 fontsize_3 pt-4">
                Eni S.p.A., acronym for and formerly legally known as Ente
                nazionale idrocarburi, is an Italian multinational energy
                company headquartered in Rome. It is considered one of the
                supermajor oil companies in the world, with a market
                capitalization of €50 billion, as of 31 December 2023.
              </p>
            </div>

            <div className="py-4  client_box  ">
              <h2 className="text-blackk  fontweight_1 text-center text-2xl sm:text-2xl mx-auto md:text-3xl lg:text-[32px] max-w-3xl py-1">
                SAIC
              </h2>
              <p className="fontweight_1 text-blackk/60 fontsize_3 pt-4">
                Science Applications International Corporation, Inc. is an
                American technology company headquartered in Reston, Virginia
                that provides government services and information technology
                support. They are a leading company in the cloud industry in
                USA.
              </p>
            </div>

          </div>


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
                    We envisioned a comprehensive GIS-based system that would
                    integrate real-time construction data, operational
                    information, and financial data for efficient management of
                    city gas distribution projects. Our focus was on creating a
                    versatile platform that could streamline project execution
                    and provide valuable insights for decision-making.
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
                    We prioritized the development of a Web GIS interface that
                    could handle real-time construction data updates. By
                    integrating multiple data sources, including customer
                    information, SCADA systems, and SAP, we aimed to create a
                    holistic view of the project. We also focused on producing
                    standardized documentation like the APDM pipe book to ensure
                    comprehensive project records.
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
                    The GIS-based system for the Faridabad City Gas Distribution
                    project has revolutionized project execution and monitoring.
                    Its ability to provide real-time construction updates,
                    integrated with operational and financial data, has
                    significantly improved project management efficiency.
                    Moreover, the potential for adapting this system into a
                    product for city gas projects, especially in the Middle
                    East, showcases the scalability and market relevance of our
                    solution.
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
              Successfully developed a Web GIS-based Real-time Pipe Book system
            </p>
          </div>
          <div className="flex gap-4 rounded-xl border-2 border-blue-900/60 p-4 shadow-md shadow-blue-900/20">
            <h1 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2  py-2">
              02
            </h1>
            <p className="fontweight_1 text-blackk/60 fontsize_3 py-2">
              Integrated real-time construction data with GIS for improved
              project monitoring
            </p>
          </div>
          <div className="flex gap-4 rounded-xl border-2 border-blue-900/60 p-4 shadow-md shadow-blue-900/20">
            <h1 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2  py-2">
              03
            </h1>
            <p className="fontweight_1 text-blackk/60 fontsize_3 py-2">
              Created a final pipe book in APDM format for comprehensive
              documentation
            </p>
          </div>
          <div className="flex gap-4 rounded-xl border-2 border-blue-900/60 p-4 shadow-md shadow-blue-900/20">
            <h1 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2  py-2">
              04
            </h1>
            <p className="fontweight_1 text-blackk/60 fontsize_3 py-2">
              Achieved integration of customer data, operational data (Honeywell
              SCADA), and SAP on GIS for charge area management
            </p>
          </div>
          <div className="flex gap-4 rounded-xl border-2 border-blue-900/60 p-4 shadow-md shadow-blue-900/20">
            <h1 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2  py-2">
              05
            </h1>
            <p className="fontweight_1 text-blackk/60 fontsize_3 py-2">
              Developed a potential product for city gas distribution projects,
              applicable in other regions
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

export default DataManagement;

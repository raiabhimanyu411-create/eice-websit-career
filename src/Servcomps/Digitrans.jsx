import React, { useState, useRef } from "react";
import laptop from "../assets/Compressed/Laptop.png";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

import dtransbanner from "../assets/Compressed/dtransbanner.jpg";
import servicebannerpattern from "../assets/Compressed/servicebannerpattern.png";

import { FiCheckCircle } from "react-icons/fi";

import dtdigital from "../assets/Compressed/dtdigital.svg";
import dtdesign from "../assets/Compressed/dtdesign.svg";
import dtconsulting from "../assets/Compressed/dtconsulting.svg";

import Footer from "../Othercomps/Footer.jsx";
import Copyright from "../Othercomps/Copyright.jsx";
import TalkToUs from "../Othercomps/Talktous";
import Reviews from "../Homecomps/Reviews";
import Clients from "../Homecomps/Clients";
import Clientele from "../Homecomps/Clientele";


// cs images

import opo from "../assets/Cs/opo.jpg"
import etp from "../assets/Cs/etp.jpg"

import adai from "../assets/Automobile/adai.jpeg"
import ccp from "../assets/Automobile/ccp.jpg"
import mpo from "../assets/Automobile/mpo.jpg"

import  aipdt from "../assets/medical/aipdt.jpeg"
import  tmp from "../assets/medical/tmp.jpeg"

import digital from "../assets/Service_and_technology/digital.png"



const industries = [
  { name: "OIL AND GAS INDUSTRY", id: "oil" },
  { name: "AUTOMOBILE INDUSTRY", id: "auto" },
  { name: "HEALTHCARE INDUSTRY", id: "health" },
];

const projects = {
  oil: [
    {
      title: "Offshore Platform Optimization",
      description:
        "Improved production efficiency by 25% through advanced AI-driven monitoring systems.",
        img : opo
        
    },
    {
      title: "Energy Trading Platform",
      description:
        "Built a blockchain-based trading platform, improving transaction security and reducing costs by 20%.",
        img : etp
    },
  ],
  auto: [
    
    {
      title: "Autonomous Driving AI",
      description:
        "Created a machine learning model improving object detection accuracy by 30% in diverse weather conditions.",
        img : adai
    },
    {
      title: "Connected Car Platform",
      description:
        "Designed a cloud-based system enabling OTA updates and predictive maintenance for 100,000+ vehicles.",
    img : ccp
      },
    {
      title: "Manufacturing Process Optimization",
      description:
        "Implemented an AI-driven system reducing production line downtime by 40% and improving quality control.",
        img :mpo
    },
  ],
  health: [
    {
      title: "AI-Powered Diagnostic Tool",
      description:
        "Developed an AI algorithm for early cancer detection, improving accuracy by 15% over traditional methods.",
        img : adai
    },
    {
      title: "Telemedicine Platform",
      description:
        "Created a secure, HIPAA-compliant telehealth solution, facilitating over 1 million virtual consultations.",
        img :tmp
    },
  ],
};


const CaseStudy = ({ title, description, image }) => (
  <div className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 md:p-4">
    <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
      <img
        src={image}
        alt={title}
        className="w-full h-32 sm:h-40 md:h-48 object-cover transition duration-300 filter grayscale hover:grayscale-0"
      />
      <div className="p-3 md:p-4">
        <h3 className="fontweight_1 text-sm sm:text-base md:text-lg mb-1 sm:mb-2">
          {title}
        </h3>
        <p className="text-gray-600 text-xs sm:text-sm">{description}</p>
      </div>
    </div>
  </div>
);

function Cstdmain() {
  const [activeIndustry, setActiveIndustry] = useState(industries[0].id);

  return (
    <div className="font-manrope px-4 sm:px-6 lg:px-8 ">
      <h2 className="text-bloo text-center text-xl sm:text-2xl lg:text-3xl fontweight_1 mb-2 sm:mb-4 py-1">
        Case Studies
      </h2>
      <h1 className="text-blackk  fontweight_1 text-center text-2xl sm:text-3xl mx-auto md:text-3xl lg:text-[32px] max-w-7xl py-1 pb-8">
        Explore how we digitally transformed other businesses
      </h1>
      <main className=" mx-auto max-w-7xl">
        <nav className="mb-8 sm:mb-12">
          <ul className="flex flex-wrap justify-center gap-2 sm:gap-4">
            {industries.map((industry) => (
              <li key={industry.id}>
                <button
                  onClick={() => setActiveIndustry(industry.id)}
                  className={`px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base rounded-full transition ${
                    activeIndustry === industry.id
                      ? "bg-blue-900 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {industry.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {industries.map((industry) => (
          <section
            key={industry.id}
            className={`mb-12 px-2 ${
              activeIndustry === industry.id ? "block" : "hidden"
            }`}
          >
            <h2 className="text-xl px-2 sm:text-2xl fontweight_1 mb-4 sm:mb-6">
              {industry.name}
            </h2>
            <div className="flex flex-wrap -mx-2">
              {projects[industry.id].map((project, index) => (
                <CaseStudy
                  key={index}
                  title={project.title}
                  description={project.description}
                  image={project.img}
                />
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}

function Digitrans() {
  return (
    <div>
      <div className="xl:-mt-8 -mt-4 bg-gradient-to-r from-transparent via-bloo/5 to-bloo/10 pt-16 md:pt-20 lg:pt-12 2xl:pt-0">
        <div className="relative font-manrope mx-auto sm:max-w-7xl w-screen ">
          <div className="absolute -z-20 inset-0 right-[75%]">
            <img src={servicebannerpattern} alt="" />
          </div>
          <div className="flex lg:flex-row flex-col px-4 py-20 items-center">
            <div className="w-full">
              <h1 className="text-blackk  fontweight_1 fontsize_6 ">
                Digital Transformation
              </h1>
              <h2 className="text-blackk/60 font-semibold max-w-5xl mx-auto sm:text-2xl py-4 text-2xl sm:leading-tight leading-snug text-left">
                {
                  "Revolutionize Your Business  Harness the Power of Digital Transformation for Sustainable Growth"
                }
              </h2>
            </div>
            <div className="lg:flex hidden items-center justify-end ">
              <div className="w-2/5">
                <img src={digital} alt="" className="rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 md:py-20 lg:py-16 ">
        <div className="relative font-manrope mx-auto px-4 lg:px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div>
              <h1 className="text-blackk  fontsize_2 fontweight_1">
                Embrace the Digital Future
                <span className="text-bloo"> Transformation </span>
                for Competitive Advantage
              </h1>
            </div>
            <div>
              <p className="font-medium text-blackk/60 sm:text-xl text-lg ">
                In today's digital landscape, businesses must adapt to stay
                relevant. EICE offers comprehensive digital transformation
                services to propel your organization forward.
              </p>
              <p className="font-medium text-blackk/60 sm:text-xl text-lg  py-2">
                Our strategic approach ensures alignment with your objectives,
                combining industry insights and cutting-edge technologies to
                drive meaningful change.
              </p>
              <p className="font-medium text-blackk/60 sm:text-xl text-lg ">
                We develop strategies that enhance operational efficiency,
                capabilities, and customer experiences. Partner with EICE to
                navigate the digital revolution and achieve long-term success.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative font-manrope mx-auto sm:max-w-7xl w-screen py-4">
        <h1 className="text-bloo fontweight_1 text-center fontsize_2  py-2">
          Core Competencies
        </h1>
        <h2 className="text-blackk  fontweight_1 text-center text-2xl sm:text-3xl mx-auto md:text-3xl lg:text-[32px] max-w-3xl py-1">
          Our Digital Transformation Expertise
        </h2>
        <div className="grid px-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 pt-8">
          <div className="group  p-8 bg-white rounded-md overflow-hidden shadow-sm shadow-white transition-shadow duration-300 hover:shadow-lg hover:shadow-blackk/10 border border-white border-transparent hover:border-gray-200 ">
            <div className="rounded-full flex items-start w-full">
              <img src={dtdigital} alt="" />
            </div>
            <div className="pt-2 h-full text-left">
              <h1 className="text-blackk fontweight_1 text-xl pt-1 pb-3 sm:text-2xl ">
                DIGITAL INNOVATION
              </h1>
              <p className="font-medium text-blackk/60 sm:text-xl text-lg ">
                We identify and implement cutting-edge digital solutions to
                drive innovation and create new value streams for your business.
              </p>
            </div>
          </div>
          <div className="group  p-8 bg-white rounded-md overflow-hidden shadow-sm shadow-white transition-shadow duration-300 hover:shadow-lg hover:shadow-blackk/10 border border-white border-transparent hover:border-gray-200 ">
            <div className=" rounded-full  flex items-start w-full">
              <img src={dtconsulting} alt="" className="scale-[0.85]" />
            </div>
            <div className="pt-2 h-full text-left">
              <h1 className="text-blackk fontweight_1 text-xl pt-1 pb-3 sm:text-2xl">
                DATA-DRIVEN INSIGHTS
              </h1>
              <p className="font-medium text-blackk/60 sm:text-xl text-lg ">
                We leverage advanced analytics and AI to extract actionable
                insights, enabling data-driven decision-making across your
                organization.
              </p>
            </div>
          </div>
          <div className="group  p-8 bg-white rounded-md overflow-hidden shadow-sm shadow-white transition-shadow duration-300 hover:shadow-lg hover:shadow-blackk/10 border border-white border-transparent hover:border-gray-200 ">
            <div className=" rounded-full  flex items-start w-full">
              <img src={dtdesign} alt="" className="scale-[0.8]" />
            </div>
            <div className="pt-2 h-full text-left">
              <h1 className="text-blackk fontweight_1 text-xl pt-1 pb-3 sm:text-2xl">
                DIGITAL EXPERIENCE DESIGN
              </h1>
              <p className="font-medium text-blackk/60 sm:text-xl text-lg ">
                We create seamless, intuitive digital experiences that delight
                users across all devices and platforms, enhancing customer
                engagement and loyalty.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-zinc-50 pb-16 ">
        <div className="relative font-manrope mx-auto sm:max-w-7xl w-screen pt-8">
          <h1 className="text-bloo responsiveFont1 text-center">
            Why Choose EICE
          </h1>
          <h2 className="text-blackk responsiveFont2 text-center px-4 mt-4">
            Key Advantages of Partnering with EICE for Your AI/ML and Generative
            AI Journey
          </h2>
        </div>
        <div className="">
          <div className="relative px-4 font-manrope mx-auto sm:max-w-7xl w-screen pt-16">
            <div className="grid grid-cols-1 gap-10">
              {[
                {
                  title: "Holistic Approach",
                  content:
                    "We offer end-to-end digital transformation solutions, from strategy to implementation and beyond.",
                },
                {
                  title: "Agile Methodologies",
                  content:
                    "Our agile approach ensures flexibility, rapid iterations, and continuous improvement throughout the transformation process.",
                },
                {
                  title: "Collaborative Partnership",
                  content:
                    "We work closely with your team, fostering knowledge transfer and ensuring alignment with your organization's goals.",
                },
                {
                  title: "Industry Expertise",
                  content:
                    "Our team of experts brings deep knowledge across various industries, ensuring tailored solutions for your specific sector.",
                },
                {
                  title: "Innovative Technologies",
                  content:
                    "We leverage cutting-edge technologies like AI, IoT, and blockchain to drive innovation and create competitive advantages.",
                },
                {
                  title: "Proven Track Record",
                  content:
                    "Our successful implementations across various industries demonstrate our ability to deliver tangible results and ROI.",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-8 ">
                  <div className="flex-shrink-0">
                    <FiCheckCircle className="w-6 h-6 text-emerald-500" />
                  </div>
                  <div>
                    <p className="font-medium text-blackk/60 sm:text-xl text-lg">
                      <span className="text-blackk fontweight_1 text-lg pt-1 pb-3 sm:text-xl">
                        {item.title}:{" "}
                      </span>
                      {item.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Cstdmain />
      <Reviews />
      <TalkToUs />
      <Footer />
      <Copyright />
    </div>
  );
}

export default Digitrans;

import React, { useState, useRef } from "react";
import laptop from "../assets/Compressed/Laptop.png";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import "../fontCss.css"

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
import Process from "../Homecomps/Process.jsx";
import { FaLightbulb } from "react-icons/fa";
import { LuBrainCircuit } from "react-icons/lu";
import { GrVirtualMachine } from "react-icons/gr";
import { Link } from "react-router-dom";


import ai from "../assets/Service_and_technology/ai.png"

// images
import inventry from "../assets/ai/inventry.jpg"
import logistics from "../assets/ai/logistics.jpg"
import sentiments from "../assets/ai/sentiments.jpg"
import voice from "../assets/ai/voice.jpg"


const industries = [
  { name: "Artificial Intelligence and Machine Learning", id: "ai" },
  
];

const projects = {
  ai: [
    {
      title: "VOICE CALL ASSISTANT",
      description: "Development of an Advanced AI Voice Call Assistant: Revolutionizing Customer Interaction and Efficiency",
      link: "/casestudy-VoiceCallAI",
      img : voice
    },
    {
      title: "Product Review Using Sentimental Analysis",
      description:"Enhancing Product Insights with AI: Advanced Sentiment Analysis of Product Reviews",
      link: "/casestudy-SentimentalAI",
      img : sentiments
    },
    {
      title: "Logistics Using AI",
      description: "Transforming Logistics Operations with AI: Enhancing Efficiency and Accuracy", 
      link: "/casestudy-LogisticsAI",
      img : logistics
    },
    {
      title: "Inventory Management Using AI",
      description: "Revolutionizing Inventory Management with AI: Enhancing Accuracy and Efficiency",
      link: "/casestudy-InventoryAI",
      img : inventry
    },
  ],
};

const CaseStudy = ({ title, description, image, link }) => (
  <Link to={link} className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 md:p-4">
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
  </Link>
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
                  link ={project.link}
                />
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}

function Aiml() {
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
                Generative AI and Machine Learning
              </h1>
              <h2 className="text-blackk/60 font-semibold max-w-5xl mx-auto sm:text-2xl py-4 text-2xl sm:leading-tight leading-snug text-left">
                {
                  "Revolutionize Your Business  Harness the Power of AI for Sustainable Growth"
                }
              </h2>
            </div>
            <div className="lg:flex hidden items-center justify-end ">
              <div className=" w-1/2">
                <img src={ai} alt="artifical inteligece" className="rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 md:py-20 lg:py-16 ">
        <div className="relative font-manrope mx-auto px-4 lg:px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div>
              <h1 className="text-blackk fontsize_2 fontweight_1  ">
                Embrace the AI Future 
                <span className="text-bloo"> Innovation </span>
                for Competitive Advantage
              </h1>
            </div>
            <div>
              <p className="font-medium text-blackk/60 sm:text-xl text-lg ">
                In today's rapidly evolving AI landscape, businesses must adapt
                to stay relevant. At EICE, we offer comprehensive AI/ML and
                generative AI services to propel your organization into the
                future.
              </p>
              <p className="font-medium text-blackk/60 sm:text-xl text-lg  py-4">
                Our strategic approach ensures alignment with your business
                objectives. Our experts combine industry insights with
                cutting-edge AI technologies to implement solutions that drive
                meaningful change.
              </p>
              <p className="font-medium text-blackk/60 sm:text-xl text-lg ">
                We develop AI strategies that not only meet your goals but also
                enhance operational efficiency, capabilities, and customer
                experiences. Partner with EICE to navigate the AI revolution and
                achieve long-term success in the age of artificial intelligence.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Process />
      <div className="relative font-manrope mx-auto sm:max-w-7xl w-screen py-4 pt-18 pb-8">
        <h1 className="text-bloo fontweight_1 text-center fontsize_2  py-2">
          Core Competencies
        </h1>
        <h2 className="text-blackk  fontweight_1 text-center text-2xl sm:text-3xl mx-auto md:text-3xl lg:text-[32px] max-w-3xl py-1">
          Our Digital Transformation Expertise
        </h2>
        <div className="grid px-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 pt-8">
          <div className="group  p-8 bg-white rounded-md overflow-hidden shadow-sm shadow-white transition-shadow duration-300 hover:shadow-lg hover:shadow-blackk/10 border border-white border-transparent hover:border-gray-200 ">
            <div className="rounded-full flex items-start w-full">
              <FaLightbulb size={48} className="text-bloo" />
            </div>
            <div className="pt-2 h-full text-left">
              <h1 className="text-blackk fontweight_1 text-xl pt-1 pb-3 sm:text-2xl ">
                AI INNOVATION
              </h1>
              <p className="font-medium text-blackk/60 sm:text-xl text-lg ">
                We identify and implement cutting-edge digital solutions to
                drive innovation and create new value streams for your business.
              </p>
            </div>
          </div>
          <div className="group  p-8 bg-white rounded-md overflow-hidden shadow-sm shadow-white transition-shadow duration-300 hover:shadow-lg hover:shadow-blackk/10 border border-white border-transparent hover:border-gray-200 ">
            <div className=" rounded-full  flex items-start w-full">
              <LuBrainCircuit size={48} className="text-bloo" />
            </div>
            <div className="pt-2 h-full text-left">
              <h1 className="text-blackk fontweight_1 text-xl pt-1 pb-3 sm:text-2xl">
                MACHINE LEARNING INSIGHTS
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
              <GrVirtualMachine size={48} className="text-bloo" />
            </div>
            <div className="pt-2 h-full text-left">
              <h1 className="text-blackk fontweight_1 text-xl pt-1 pb-3 sm:text-2xl">
                GENERATIVE AI SOLUTIONS
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

      <div className="bg-zinc-50 pb-12  my-4">
        <div className="relative font-manrope mx-auto sm:max-w-7xl w-screen pt-12">
          <h1 className="text-bloo responsiveFont1  flex items-center justify-center">
            Why Choose EICE
          </h1>
          <h2 className="text-blackk responsiveFont2  px-4 mt-4  text-center">
            Key Advantages of Partnering with EICE for Your AI/ML and Generative
            AI Journey
          </h2>
        </div>
        <div className="">
          <div className="relative px-4 font-manrope mx-auto sm:max-w-7xl w-screen pt-12">
            <div className="grid grid-cols-1 gap-10">
              {[
                {
                  title: "Holistic Approach",
                  content:
                    "We offer end-to-end AI solutions, from strategy to implementation and beyond.",
                },
                {
                  title: "State-of-the-Art AI Models",
                  content:
                    "Our approach leverages the latest AI models and techniques, ensuring cutting-edge solutions for your business challenges.",
                },
                {
                  title: "Collaborative Partnership",
                  content:
                    "We work closely with your team, fostering AI knowledge transfer and ensuring alignment with your organization's goals.",
                },
                {
                  title: "AI Industry Expertise",
                  content:
                    "Our team of AI experts brings deep knowledge across various industries, ensuring tailored AI solutions for your specific sector.",
                },
                {
                  title: "Innovative AI Technologies",
                  content:
                    "We leverage cutting-edge AI technologies like deep learning, natural language processing, and computer vision to drive innovation and create competitive advantages.",
                },
                {
                  title: "Proven AI Track Record",
                  content:
                    "Our successful AI implementations across various industries demonstrate our ability to deliver tangible results and ROI.",
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

export default Aiml;

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
import peep1 from "../assets/Compressed/Peep1.png";
import peep2 from "../assets/Compressed/Peep2.png";
import voicecall1 from "../assets/Compressed/voicecall1.png";
import voicecall2 from "../assets/Compressed/voicecall2.png";

import { GiVirtualMarker } from "react-icons/gi";
import { Link } from "react-router-dom";
import AiVoice from "../assets/ai/voice.jpg"
import "../fontCss.css"
import "./Styles/Cstudies.css"

function VoiceCallAI() {
  return (
    <div className="">
      <div className="max-w-7xl  mx-auto px-4 2xl:pt-12 pt-32">
        <div className="w-full">
          <h1 className="text-bloo fontweight_1 text-center fontsize_2  py-2">
            Voice Call Assistant
          </h1>
          <h2 className="text-blackk  fontweight_1 text-center text-2xl sm:text-2xl mx-auto md:text-3xl lg:text-[32px] max-w-5xl py-1">
            Development of an Advanced AI Voice Call Assistant: Revolutionizing
            Customer Interaction and Efficiency
          </h2>
          <p className=" max-w-4xl mx-auto  text-blackk/60 fontsize_3 fontweight_1 pt-4 px-4">
            For our client, we meticulously developed an AI-based voice call
            assistant technology by integrating large language models (LLMs),
            advanced speech-to-text, natural language processing (NLP), and
            text-to-speech methodologies. This integration ensured seamless,
            natural, and effective communication with their customers.
          </p>
          <div className="w-full h-full max-w-7xl mx-auto items-center justify-center pt-12 pb-4 flex flex-row flex-wrap gap-16">
            <img
              src={voicecall1}
              alt=""
              className="h-[400px] object-contain rounded-lg"
            />
            <div className="relative">
              <div className="w-full h-full absolute bg-bloo/10  rounded-lg"></div>
              <img
                src={voicecall2}
                alt=""
                className="h-[400px] z-20 object-contain"
              />
            </div>
          </div>
        </div>
        <div className="w-full pb-6 text-left">
          <h2 className="text-blackk max-w-3xl pb-2 fontweight_1 text-2xl sm:text-2xl mx-auto md:text-3xl lg:text-[32px] pt-12">
            Key Challenges
          </h2>
          <div className="max-w-3xl  mx-auto flex flex-col py-4 gap-4">
            <div className="flex gap-4 ">
              <h1 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2  py-2">
                01
              </h1>
              <p className=" text-blackk/60 fontsize_3 fontweight_1 py-2">
                {" "}
                Ensuring accurate speech recognition across diverse accents and
                languages.
              </p>
            </div>
            <div className="flex gap-4">
              <h1 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2  py-2">
                02
              </h1>
              <p className=" text-blackk/60 fontsize_3 fontweight_1 py-2">
                Maintaining real-time response generation and interaction
                throughout the call.
              </p>
            </div>
            <div className="flex gap-4">
              <h1 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2  py-2">
                03
              </h1>
              <p className=" text-blackk/60 fontsize_3 fontweight_1 py-2">
                Integrating sentiment analysis for improved emotional
                understanding and response.
              </p>
            </div>
            <div className="flex gap-4">
              <h1 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2  py-2">
                04
              </h1>
              <p className=" text-blackk/60 fontsize_3 fontweight_1 py-2">
                Development of robust contextual awareness for more personalized
                interactions.
              </p>
            </div>
            <div className="flex gap-4">
              <h1 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2  py-2">
                05
              </h1>
              <p className=" text-blackk/60 fontsize_3 fontweight_1 py-2">
                Ensuring data privacy and security during the storage and
                analysis of conversations.
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
          <h2 className="text-blackk  fontweight_1 text-center text-2xl sm:text-2xl mx-auto md:text-3xl lg:text-[32px] max-w-3xl py-1"></h2>
          <p className=" text-blackk/60  fontsize_3 fontweight_1">
            Our client is a leading IT consulting company operating
            internationally, renowned for delivering innovative technology
            solutions. They specialize in digital transformation, cloud
            computing, and cybersecurity services, helping businesses optimize
            their IT infrastructure. With a commitment to excellence, they
            empower organizations to achieve their strategic goals efficiently
            and securely.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4">
        <div className="pt-8 pb-6">
          <h1 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2  py-2">
            Unlocking Success
          </h1>
        </div>

        {/* changes for boxes orientation */}
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 ">

          <div className="group cursor-pointer px-4 bg-zinc-50 rounded-md overflow-hidden shadow-sm shadow-zinc-50 transition-shadow duration-300 hover:shadow-lg hover:shadow-blackk/10 border border-zinc-50 border-transparent hover:border-gray-200 ">
            <div className="group-hover:scale-[.98] transition duration-200 grid grid-cols-1 gap-3">
              <div className="w-full h-full items-center justify-start  ">
                <GiVirtualMarker size={50} className="text-bloo" />
              </div>
              <div>
                <div className="flex flex-col  text-start justify-end">
                  <h1 className="text-blackk fontweight_1 text-xl  pb-3 sm:text-2xl">
                    IDEATION
                  </h1>
                  <p className="z-20  text-blackk/60 fontsize_3 fontweight_1">
                    Our client aimed to enhance customer service efficiency, scalability, and cost-effectiveness. Recognizing AI's potential, we envisioned a solution to streamline repetitive tasks and deliver personalized interactions. We created an AI-based voice call assistant to act as a virtual receptionist, conduct surveys, and provide customer support. Leveraging NLP and machine learning, our solution handles diverse customer queries with accuracy and adaptability. Our mission was to AUTOMATE, OPTIMIZE & GROW their interactions and business processes, driving operational excellence and sustainable growth.
                  </p>
                </div>
                {/* Recognizing the transformative potential of AI, we
                    envisioned a solution that could streamline repetitive tasks
                    and deliver highly personalized interactions. We set out to
                    create an advanced AI-based voice call assistant that would
                    function as a virtual receptionist, conduct surveys, and
                    serve as a customer support agent.  */}
              </div>
            </div>
          </div>

          <div className="group cursor-pointer px-4 bg-zinc-50 rounded-md overflow-hidden shadow-sm shadow-zinc-50 transition-shadow duration-300 hover:shadow-lg hover:shadow-blackk/10 border border-zinc-50 border-transparent hover:border-gray-200 ">
            <div className="group-hover:scale-[.98] transition duration-200 grid grid-cols-1 gap-3">
              <div className="flex w-full h-full items-center justify-start ">
                <GiVirtualMarker size={50} className="text-bloo" />
              </div>
              <div>
                <div className="flex flex-col  text-start justify-end ">
                  <h1 className="text-blackk fontweight_1 text-xl  pb-3 sm:text-2xl">
                    OUR APPROACH
                  </h1>
                  <p className="z-20  text-blackk/60 fontsize_3 fontweight_1">
                    We used a multi-phase approach, starting with research and development to build an AI framework tailored to the client’s needs. The system handles outbound calls, using NLP for interactions based on predefined prompts and advanced speech recognition for real-time transcription and responses. We emphasized customization, scalability, and seamless integration to align with the client’s goals. Our core mission was to AUTOMATE, OPTIMIZE & GROW their customer interactions and processes.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="group cursor-pointer px-4 bg-zinc-50 rounded-md overflow-hidden shadow-sm shadow-zinc-50 transition-shadow duration-300 hover:shadow-lg hover:shadow-blackk/10 border border-zinc-50 border-transparent hover:border-gray-200 ">
            <div className="group-hover:scale-[.98] transition duration-200 grid grid-cols-1 gap-3">
              <div className="flex w-full h-full items-center justify-start ">
                <div className="grid grid-cols-2 gap-0">
                  <GiVirtualMarker size={50} className="text-bloo" />
                </div>
              </div>
              <div>
                <div className="flex flex-col  text-start">
                  <h1 className="text-blackk fontweight_1 text-xl  pb-3 sm:text-2xl">
                    OUTCOMES
                  </h1>
                  <p className="z-20  text-blackk/60 fontsize_3 fontweight_1">
                    The AI-based voice call assistant significantly enhanced operational efficiency and customer engagement. The client saw increased customer satisfaction due to the assistant’s 24/7 availability and personalized interactions. The scalable system managed a high volume of calls without additional staffing costs. Its integration capabilities ensured smooth incorporation into existing workflows, and multi-language support broadened the client’s global reach. Advanced data extraction and analysis provided actionable insights, driving business optimization and strategic decision-making.
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
            <p className=" text-blackk/60 fontsize_3 fontweight_1 py-2">
              Elevated Customer Satisfaction: The AI assistant's 24/7
              availability and tailored interactions enhanced the customer
              experience, leading to higher satisfaction and loyalty.
            </p>
          </div>
          <div className="flex gap-4 rounded-xl border-2 border-blue-900/60 p-4 shadow-md shadow-blue-900/20">
            <h1 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2  py-2">
              02
            </h1>
            <p className=" text-blackk/60 fontsize_3 fontweight_1 py-2">
              Streamlined Operational Efficiency: Automation of call handling
              processes significantly decreased operational burdens, enabling
              staff to concentrate on strategic and high-value activities.
            </p>
          </div>
          <div className="flex gap-4 rounded-xl border-2 border-blue-900/60 p-4 shadow-md shadow-blue-900/20">
            <h1 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2  py-2">
              03
            </h1>
            <p className=" text-blackk/60 fontsize_3 fontweight_1 py-2">
              Optimized Cost Efficiency: The flexible pay-as-you-go pricing
              model dramatically reduced operational expenses, offering a
              cost-effective alternative to conventional call center solutions.
            </p>
          </div>
          <div className="flex gap-4 rounded-xl border-2 border-blue-900/60 p-4 shadow-md shadow-blue-900/20">
            <h1 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2  py-2">
              04
            </h1>
            <p className=" text-blackk/60 fontsize_3 fontweight_1 py-2">
              Dynamic Scalability: The solution adeptly managed large volumes of
              calls and seamlessly scaled with the client’s growth, ensuring
              consistent service quality during peak periods.
            </p>
          </div>
          <div className="flex gap-4 rounded-xl border-2 border-blue-900/60 p-4 shadow-md shadow-blue-900/20">
            <h1 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2  py-2">
              05
            </h1>
            <p className=" text-blackk/60 fontsize_3 fontweight_1 py-2">
              Advanced Analytics and Insights: Comprehensive transcriptions and
              sophisticated sentiment analysis delivered profound business
              insights, driving continuous improvement and strategic
              decision-making.
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

export default VoiceCallAI;

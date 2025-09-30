import React from "react";
import Footer from "../Othercomps/Footer";
import Copyright from "../Othercomps/Copyright";
import petrosim1 from "../assets/Compressed/kbcchempetro1.png";
import petrosim2 from "../assets/Compressed/kbcchempetro2.png";
import { GiVirtualMarker } from "react-icons/gi";
import "../fontCss.css";

function PetroSIM() {
  return (
    <div className="">
      <div className="max-w-7xl  mx-auto px-4 2xl:pt-12 pt-32">
        <div className="w-full">
          <h1 className="text-bloo fontweight_1 text-center fontsize_2  py-2">
            PetroSIM
          </h1>
          <h2 className="text-blackk  fontweight_1 text-center text-2xl sm:text-2xl mx-auto md:text-3xl lg:text-[32px] max-w-3xl py-1">
            Product Quality Assurance for Refinery Simulation Tool
          </h2>
          <p className="fontweight_1 max-w-4xl mx-auto  text-blackk/60 fontsize_3 pt-4 px-4">
            PetroSIM: Comprehensive quality assurance and simulation tool for
            refinery operations, integrating advanced modeling capabilities with
            user-friendly interfaces for optimal process analysis and
            optimization.
          </p>
          <div className="w-full max-w-7xl mx-auto items-center justify-center pt-8 pb-4 grid grid-cols-2 gap-4">
            <img src={petrosim1} alt="" className="w-full h-full object-fit rounded-lg" />
            <img src={petrosim2} alt="" className="w-full h-full object-fit rounded-lg" />
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
                Integrating multiple equations of state (EOS) properties
                accurately
              </p>
            </div>
            <div className="flex gap-4">
              <h1 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2  py-2">
                02
              </h1>
              <p className="fontweight_1 text-blackk/60 fontsize_3 py-2">
                Ensuring user-friendliness while maintaining complex simulation
                capabilities
              </p>
            </div>
            <div className="flex gap-4">
              <h1 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2  py-2">
                03
              </h1>
              <p className="fontweight_1 text-blackk/60 fontsize_3 py-2">
                Developing a comprehensive help system for new users
              </p>
            </div>
            <div className="flex gap-4">
              <h1 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2  py-2">
                04
              </h1>
              <p className="fontweight_1 text-blackk/60 fontsize_3 py-2">
                Continuously updating the tool to keep pace with evolving
                refinery technologies
              </p>
            </div>
            <div className="flex gap-4">
              <h1 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2  py-2">
                05
              </h1>
              <p className="fontweight_1 text-blackk/60 fontsize_3 py-2">
                Balancing simulation accuracy with computational efficiency
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
            KBC
          </h2>
          <p className="fontweight_1 text-blackk/60 fontsize_3 pt-4">
            KBC is a subsidiary of Yokogawa Electric Corporation who deploy world
            class technology & expertise in energy & process management. As a
            leader in Digital Energy Management & Carbon Emissions Management,
            KBC innovates with novel, award-winning technologies for low and no
            carbon processes, delivering robust and proven automated
            surveillance to meet their client's sustainability goals.
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
                    We conceptualized a comprehensive refinery simulation tool
                    that combines advanced modeling capabilities with
                    user-friendly interfaces. Our focus was on creating a
                    versatile platform that could accurately simulate various
                    refinery processes while being accessible to users of
                    different expertise levels.
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
                    We prioritized the integration of multiple equations of
                    state properties to ensure accurate simulations across
                    various refinery operations. By developing an intuitive user
                    interface and comprehensive help system, we aimed to make
                    complex simulations accessible to a wide range of users. Our
                    ongoing development approach ensures the tool remains
                    current with evolving refinery technologies.
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
                    PetroSIM has revolutionized refinery simulations by
                    providing a powerful yet user-friendly tool for process
                    analysis and optimization. Its ability to perform all basic
                    refinery operations, coupled with the integration of
                    advanced EOS properties, has significantly improved
                    simulation accuracy and operational efficiency.
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
              Successfully developed a hydrocarbon process simulator capable of
              performing all basic refinery operations
            </p>
          </div>
          <div className="flex gap-4 rounded-xl border-2 border-blue-900/60 p-4 shadow-md shadow-blue-900/20">
            <h1 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2  py-2">
              02
            </h1>
            <p className="fontweight_1 text-blackk/60 fontsize_3 py-2">
              Integrated multiple EOS properties (Peng Robinson, RKSA, Amine
              packages) for versatile operations
            </p>
          </div>
          <div className="flex gap-4 rounded-xl border-2 border-blue-900/60 p-4 shadow-md shadow-blue-900/20">
            <h1 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2  py-2">
              03
            </h1>
            <p className="fontweight_1 text-blackk/60 fontsize_3 py-2">
              Created a user-friendly interface with comprehensive guide and
              help files
            </p>
          </div>
          <div className="flex gap-4 rounded-xl border-2 border-blue-900/60 p-4 shadow-md shadow-blue-900/20">
            <h1 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2  py-2">
              04
            </h1>
            <p className="fontweight_1 text-blackk/60 fontsize_3 py-2">
              Delivered a quality assurance tool that enhances refinery
              simulation accuracy and efficiency
            </p>
          </div>
        </div>
      </div>
      <Footer />
      <Copyright />
    </div>
  );
}

export default PetroSIM;

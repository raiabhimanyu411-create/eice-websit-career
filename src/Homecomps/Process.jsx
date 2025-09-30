import React from "react";
import { FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiDocker,
  SiJupyter,
  SiAnaconda,
  SiChatbot,
} from "react-icons/si";
import { GiDolphin, GiSeagull } from "react-icons/gi";
import { AiFillFire } from "react-icons/ai";
import { IoLeaf } from "react-icons/io5";
import { Routes, Route, Outlet, NavLink, Link } from "react-router-dom";
import { TbLetterG, TbLetterP, TbLetterT } from "react-icons/tb";

function Process() {
  return (
    <div>
      {/*Pattern*/}
      <div className="bg-bgplate bg-cover pt-20 "></div>
      {/* Proven processes,  unparalleled expertise, top notch tools */}
      <div className="bg-zinc-50">
        <div className="sm:max-w-7xl mx-auto w-screen">
          <div className="flex flex-col items-center justify-center pb-12 sm:pb-16 md:pb-20">
            <p className="text-bloo fontweight_1 text-xl sm:text-2xl lg:text-3xl mb-4 py-1">
              Agile Software Development
            </p>
            <h2 className="text-blackk fontweight_1 text-center text-2xl  md:text-3xl lg:text-[32px] max-w-4xl ">
              Proven processes,  unparalleled expertise, and top notch tools
            </h2>
          </div>

          <div className="flex flex-col gap-20 items-center w-full h-full justify-center max-w-7xl mx-auto">
            <div className="p-4 px-8 grid md:grid-cols-2 grid-cols-1 gap-12">
              <div className="justify-self-center bg-bannerai bg-cover w-[41vh] h-[38.3vh] scale-[1.1]"></div>
              <div>
                <div className="justify-center flex flex-col w-full h-full">
                  <h2 className="responsiveFont1 text-blackk">
                    Generative AI
                  </h2>
                  
                  <h2 className="sm:text-xl text-lg mt-1 font-medium fontweight_1 text-blackk/70">
                    In the fast-paced world of generative AI, staying ahead is
                    crucial for business success. At EICE, we specialize in
                    advanced AI/ML and generative AI solutions designed to
                    transform your organization. Our expert team integrates
                    industry knowledge with the latest AI advancements to
                    deliver impactful results. We tailor our AI strategies to
                    align with your specific business goals, enhancing
                    operational efficiency and elevating customer experiences.
                  </h2>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-8 p-4">
                <div className="w-9/12">
                  <h2 className="text-2xl font-semibold mb-4 text-gray-600">
                    Tech We Use
                  </h2>
                  <div className="flex items-center justify-center bg-gradient-to-br from-blue-900 to-blue-600 p-6 rounded-lg shadow-lg">
                    <div className="grid grid-cols-3 gap-12">
                      <FaPython className="text-white text-4xl" />
                      <SiJupyter className="text-white text-4xl" />
                      <SiAnaconda className="text-white text-4xl" />
                      <div className="flex flex-row">
                        <TbLetterG className="text-white text-4xl" />
                        <TbLetterP className="text-white text-4xl" />
                        <TbLetterT className="text-white text-4xl" />
                      </div>
                      <SiMongodb className="text-white text-4xl" />
                      <SiExpress className="text-white text-4xl" />
                    </div>
                  </div>
                </div>
                <div className="w-9/12">
                  <h2 className="text-2xl font-semibold mb-4 text-gray-600">
                    Things We Make
                  </h2>
                  <div className="flex items-center justify-center bg-gradient-to-br from-blue-900 to-blue-600 p-8 rounded-lg shadow-lg">
                    <div className="grid grid-cols-1 gap-3">
                      <h2 className="text-xl font-semibold mb-4 text-white">
                        ChatBots
                      </h2>
                      <h2 className="text-xl font-semibold mb-4 text-white">
                        Dataset Generation
                      </h2>
                    </div>
                  </div>
                </div>
                {/* <div className="w-full sm:w-1/2">
                                        <h2 className="text-2xl font-semibold mb-4 text-gray-600">API</h2>
                                        <div className="bg-gradient-to-br from-blue-900 to-blue-600 p-6 rounded-lg shadow-lg">
                                        <div className="grid grid-cols-2 gap-8">
                                            <AiFillFire className="text-white text-4xl" />
                                            <FaNodeJs className="text-white text-4xl" />
                                        </div>
                                        </div>
                                    </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Pattern*/}
      <div className="bg-bgplate bg-cover pt-20 rotate-180"></div>
    </div>
  );
}

export default Process;

// <div className="pt-40 flex flex-col gap-20 items-center w-full h-full justify-center max-w-7xl mx-auto">
//     <div className="p-4 px-8 grid md:grid-cols-2 grid-cols-1 gap-12">
//         <div className="md:order-last justify-self-center bg-mobdevhome bg-cover w-[48vh] h-[38.8vh] scale-[1.1]"></div>
//         <div>
//             <div className="justify-center flex flex-col w-full h-full">
//                 <h2 className="text-4xl fontweight_1 text-blackk">App Development</h2>
//                 <h2 className="text-2xl fontweight_1 text-blackk/70">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum sed iure ex necessitatibus tenetur, porro at obcaecati veritatis officia quos illo voluptatibus consequuntur. Aliquid aspernatur eaque quam voluptate nam. Quo!</h2>
//             </div>
//         </div>
//     </div>
//     <div>
//         <div className="flex flex-col sm:flex-row justify-center items-center gap-8 p-4">
//             <div className="w-9/12">
//                 <h2 className="text-2xl font-semibold mb-4  text-gray-600">Tech We Use</h2>
//                 <div className="flex items-center justify-center bg-gradient-to-br from-blue-900 to-blue-600 p-6 rounded-lg shadow-lg">
//                 <div className="grid grid-cols-3 gap-12">
//                     <FaPython className="text-white text-4xl" />
//                     <SiJupyter className="text-white text-4xl" />
//                     <SiAnaconda className="text-white text-4xl" />
//                     <div className="flex flex-row">
//                         <TbLetterG className="text-white text-4xl" />
//                         <TbLetterP className="text-white text-4xl" />
//                         <TbLetterT className="text-white text-4xl" />
//                     </div>
//                     <SiMongodb className="text-white text-4xl" />
//                     <SiExpress className="text-white text-4xl" />
//                 </div>
//                 </div>
//             </div>
//             <div className="w-9/12">
//                 <h2 className="text-2xl font-semibold mb-4 text-gray-600">Things we Make</h2>
//                 <div className="flex items-center justify-center bg-gradient-to-br from-blue-900 to-blue-600 p-6 rounded-lg shadow-lg">
//                 <div className="grid grid-cols-1 gap-3">
//                     <h2 className="text-2xl font-semibold mb-4 text-white">ChatBots</h2>
//                     <h2 className="text-2xl font-semibold mb-4 text-white">Dataset Generation</h2>
//                 </div>
//                 </div>
//             </div>
//             {/* <div className="w-full sm:w-1/2">
//                 <h2 className="text-2xl font-semibold mb-4 text-gray-600">API</h2>
//                 <div className="bg-gradient-to-br from-blue-900 to-blue-600 p-6 rounded-lg shadow-lg">
//                 <div className="grid grid-cols-2 gap-8">
//                     <AiFillFire className="text-white text-4xl" />
//                     <FaNodeJs className="text-white text-4xl" />
//                 </div>
//                 </div>
//             </div> */}
//         </div>
//     </div>
// </div>

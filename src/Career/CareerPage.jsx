import herosectionimg from "../assets/careerimages/Herosection.webp";

// React Icons imports
import { FaProjectDiagram, FaLightbulb, FaUsers, FaBalanceScale } from "react-icons/fa";
import { MdTrendingUp } from "react-icons/md";
import { GiAnvilImpact } from "react-icons/gi";
import Footer from "../Othercomps/Footer";
import officeimg from "../assets/careerimages/office.png";
import { useState } from "react";
import Jobpage from "./Jobpage";
import Copyright from "../Othercomps/Copyright";

// Hero Section component
function HeroSection() {
  return (
    <section className="relative ">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={herosectionimg}
          alt="Team working"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 py-20 lg:py-28 flex flex-col lg:flex-row items-center">
        {/* Left Text */}
        <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Shape the Future, <br /> Innovate with Us.
          </h1>
          <p className="text-gray-600 max-w-md mx-auto lg:mx-0">
            Join EICE Technology and be part of a team that’s building the next
            generation of AI and digital solutions. Your journey starts here.
          </p>
          <div>
            <button className="px-6 py-3 bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-md shadow-md transition">
              Explore Open Roles
            </button>
          </div>
        </div>

        {/* Right side empty (image already covers bg) */}
        <div className="lg:w-1/2"></div>
      </div>
    </section>
  );
}

// Experience Life Section component
function ExperienceLifeSection() {
  return (
    <section className="flex flex-wrap justify-center items-center gap-10 p-12 bg-white">
      <div className=" w-[650px] h-[400px]">
        <img
          src={officeimg}
          alt="Office 4"
          className=" w-[100%]   object-cover "
        />
      </div>

      <div className="max-w-xl">
        <h2 className="text-4xl font-bold mb-5 text-gray-900">Experience Life at EICE</h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          At EICE, we foster a culture where innovation thrives through collaboration.
          We&#39;re a supportive team that values every voice, pushing boundaries in AI and
          digital solutions. Expect a fun, vibrant environment where challenging work
          is balanced with shared celebrations and continuous growth. Join a community
          that builds the future, together.
        </p>
      </div>
    </section>
  );
}

const values = [
  {
    icon: <FaProjectDiagram className="text-sky-500 text-3xl" />,
    title: "Cutting-Edge Projects",
    desc: "Be at the forefront of AI, Machine Learning, and innovative digital transformations. Work on impactful projects that challenge and inspire.",
  },
  {
    icon: <FaLightbulb className="text-sky-500 text-3xl" />,
    title: "Culture of Innovation",
    desc: "We foster an environment where new ideas are celebrated, and continuous learning is encouraged.",
  },
  {
    icon: <MdTrendingUp className="text-sky-500 text-3xl" />,
    title: "Growth & Development",
    desc: "Access to mentorship programs, skill enhancement workshops, and clear career progression paths.",
  },
  {
    icon: <FaUsers className="text-sky-500 text-3xl" />,
    title: "Collaborative Environment",
    desc: "Work with diverse, talented teams in an inclusive and supportive atmosphere.",
  },
  {
    icon: <GiAnvilImpact className="text-sky-500 text-3xl" />,
    title: "Impactful Work",
    desc: "Contribute to solutions that make a real difference for our clients and the industry.",
  },
  {
    icon: <FaBalanceScale className="text-sky-500 text-3xl" />,
    title: "Work-Life Balance",
    desc: "We believe in a healthy work-life integration with flexible options and supportive policies.",
  },
];

// Value Section component
function ValueSection() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Why Join EICE? (Our Value Proposition)
        </h2>
        <p className="text-sky-500 mt-2 mb-10 text-lg">
          Why EICE Technology is Your Next Career Move?
        </p>

        {/* Grid Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((item, index) => (
            <div
              key={index}
              className="border rounded-lg p-6 text-left shadow-sm hover:shadow-md transition"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// New Testimonials Component - Voices of Our Team
function VoicesOfOurTeam() {
  const testimonials = [
    {
      quote:
        "EICE empowers me to push boundaries and constantly learn. Every day is a new challenge.",
      name: "Shubhangi Sharma",
      role: "SDE",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      quote:
        "The collaborative spirit here is incredible. We tackle complex problems together and celebrate every success.",
      name: "Vineet Kulkarni",
      role: "Ai Architect",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      quote:
        "EICE empowers me to push boundaries and constantly learn. Every day is a new challenge with a team that truly supports",
      name: "Vijaylaxmi Prabha",
      role: "Senior Project manager",
      img: "https://randomuser.me/api/portraits/women/68.jpg",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 text-center max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          Voices of Our Team
        </h2>
        <div className="flex flex-col lg:flex-row justify-between gap-6"> 
          {testimonials.map((t, index) => (
            <div
              key={index}
              className={`flex-1 border rounded-lg p-6 text-left shadow-sm transition-opacity duration-300 ${
                activeIndex === index ? "opacity-100" : "opacity-50"
              }`}
            >
              <p className="italic text-gray-600">&quot;{t.quote}&quot;</p>
              <div className="flex items-center mt-6">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-10 h-10 rounded-full mr-4 object-cover"
                />
                <div>
                  <div className="font-bold">{t.name}</div>
                  <div className="text-sky-500 font-semibold text-sm">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Navigation Dots */}
        <div className="flex justify-center mt-10 gap-4">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`w-8 h-2 rounded-full border border-sky-900 ${
                activeIndex === idx ? "bg-sky-900" : "bg-transparent"
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function CareerPage() {
  return (
    <>
      <HeroSection />
       <ValueSection />
      <ExperienceLifeSection />
      <VoicesOfOurTeam />
      <Jobpage/>
      <Footer />
      <Copyright/>
    </>
  );
}

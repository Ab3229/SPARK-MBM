import Image from "next/image";
import { FaXTwitter } from "react-icons/fa6";
import { Linkedin, Github, Mail } from "lucide-react";
const About = () => {
  
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Hero Section */}
      <section className="h-80 flex flex-col justify-center items-center text-center px-6 bg-gray-800">
        <h1 className="text-4xl font-bold">About SPARK 🚀</h1>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl">
          SPARK is a vibrant coding community dedicated to nurturing talent,
          organizing coding contests, and preparing students for real-world
          challenges.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold">Our Mission & Vision</h2>
        <p className="mt-4 text-gray-300 max-w-3xl mx-auto">
          Our mission is to create a thriving tech environment, mentor aspiring
          programmers, and bridge the gap between academia and industry.
        </p>
      </section>



      {/* Achievements Section */}
      {/* <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold">Our Achievements</h2>
        <p className="mt-4 text-gray-300">
          SPARK has organized numerous successful events and competitions.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-6">
          <div className="bg-gray-700 p-6 rounded-lg w-64">
            <h3 className="text-xl font-semibold">Hackathon 2024</h3>
            <p className="text-gray-400">Over 200 participants</p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg w-64">
            <h3 className="text-xl font-semibold">AI Challenge</h3>
            <p className="text-gray-400">Industry collaboration</p>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default About;

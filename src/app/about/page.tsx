import Image from "next/image";
import { FaXTwitter } from "react-icons/fa6";
import { Linkedin, Github, Mail } from "lucide-react";
const About = () => {
  // const teamMembers = [
  //   {
  //     name: "Pradyumn Chaudhary",
  //     role: "Founder & Lead",
  //     image: "/Pradyumn.jpg",
  //     linkedin: "https://www.linkedin.com/in/pradyumnchaudhary",
  //     twitter: "https://twitter.com/PradyumnSantruk",
  //     github: "https://github.com/Pradyumn-Chaudhary",
  //     mail: "mailto:pradyumnchaudhary6@gmail.com",
  //   },
  //   {
  //     name: "Mayank Aggarwal",
  //     role: "Founder & Lead",
  //     image: "/Mayank.png",
  //     linkedin: "https://www.linkedin.com/in/er-mayank-aggarwal/",
  //     twitter: "https://twitter.com/PradyumnSantruk",
  //     github: "https://github.com/Er-Mayank-Aggarwal",
  //     mail: "mailto:mayank1gdsc@gmail.com",
  //   },
  //   // Add more team members as needed
  // ];
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

      {/* Meet the Team */}
      {/* <section className="py-16 px-6 bg-gray-800 text-center">
        <h2 className="text-3xl font-bold">Meet Our Team</h2>
        <p className="mt-4 text-gray-300">The passionate minds behind SPARK.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-6">
          {teamMembers.map((member) => (
            <div key={member.name} className="bg-gray-700 p-6 rounded-lg w-64">
              Square container for the image
              <div className="relative w-[150px] h-[150px] mx-auto">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mt-4 text-center">
                {member.name}
              </h3>
              <p className="text-gray-400 text-center">{member.role}</p>
              <div className="flex justify-center mt-4 space-x-4">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-6 w-6 transition-all duration-300 hover:fill-[#0077b5] hover:stroke-[#0077b5]" />
                </a>
                <a
                  href={member.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaXTwitter className="h-6 w-6 transition-all duration-300 hover:fill-[#000000] hover:stroke-[#000000]" />
                </a>
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-6 w-6 transition-all duration-300 hover:fill-[#181717] hover:stroke-[#181717]" />
                </a>
                <a href={member.mail} target="_blank" rel="noopener noreferrer">
                  <Mail className="h-6 w-6 transition-all duration-300 hover:fill-[#EA4335] hover:stroke-[#EA4335]" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section> */}

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

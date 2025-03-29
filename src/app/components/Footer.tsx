"use client";
import { FaGithub } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <footer className="py-6 text-center bg-gray-900 text-gray-400">
      <p className="flex flex-col sm:flex-row justify-center items-center gap-2">
        © 2025 SPARK | All Rights Reserved |  💻 Contribute on 
        <a
          href="https://github.com/Pradyumn-Chaudhary/SPARK-MBM"
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-400 hover:text-yellow-300 transition duration-300 flex items-center gap-1"
        >
          GitHub <FaGithub className="text-lg" />
        </a>
      </p>
    </footer>
  );
};

export default Footer;

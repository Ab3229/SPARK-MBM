import { FileText, Linkedin } from "lucide-react"; // Lucide icons
import React from "react";
import { FaInstagram, FaTelegramPlane, FaWhatsapp } from "react-icons/fa"; // React Icons for WhatsApp, Instagram, and Telegram
import { MdEmail } from "react-icons/md";

const JoinNowPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-gray-800 p-8 rounded-xl shadow-lg transform transition-all hover:shadow-xl">
        {/* Header */}
        <h2 className="text-3xl font-extrabold text-center text-white tracking-tight">
          Join the <span className="text-yellow-500">SPARK</span> Community
        </h2>
        <p className="mt-3 text-center text-gray-300 text-lg">
          {/* Ignite your journey by connecting with us on these platforms: */}
          Follow us to stay updated on our latest activities and events:
        </p>

        {/* Buttons with Icons */}
        <div className="mt-8 space-y-5">
          {/* <a
            href="https://docs.google.com/forms/d/1bokHBD-HPz_AxMsmLf1j37qudy1f9sBFigo2NBFxZwY"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center py-3 px-4 rounded-lg text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <FileText className="mr-2 h-5 w-5" /> Google Form
          </a> */}
          <a
            href="https://chat.whatsapp.com/BqAr6ziE7Vl0Aa1cwUwsk4"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center py-3 px-4 rounded-lg text-sm font-semibold text-white bg-green-500 hover:bg-green-600 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <FaWhatsapp className="mr-2 h-5 w-5" /> WhatsApp Community
          </a>
          <a
             href="mailto:sparkmbmu@gmail.com"
             target="_blank"
             rel="noopener noreferrer"
            className="w-full flex items-center justify-center py-3 px-4 rounded-lg text-sm font-semibold text-white bg-yellow-500 hover:bg-yellow-600 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <MdEmail className="mr-2 h-5 w-5" /> Email Us
          </a>

          <a
            href="https://t.me/spark_mbm"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center py-3 px-4 rounded-lg text-sm font-semibold text-white bg-blue-400 hover:bg-blue-500 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <FaTelegramPlane className="mr-2 h-5 w-5" /> Telegram Channel
          </a>
          <a
            href="https://www.linkedin.com/company/spark-mbm/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center py-3 px-4 rounded-lg text-sm font-semibold text-white bg-blue-700 hover:bg-blue-800 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <Linkedin className="mr-2 h-5 w-5" /> LinkedIn Page
          </a>
          <a
            href="https://www.instagram.com/spark.mbm"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center py-3 px-4 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <FaInstagram className="mr-2 h-5 w-5" /> Instagram Page
          </a>
        </div>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-gray-400">
          Let’s spark something amazing together!
        </p>
      </div>
    </div>
  );
};

export default JoinNowPage;

"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Icons for menu

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          🚀 SPARK
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link key={"Home"} href={`/`} className="hover:text-yellow-400">
            Home
          </Link>
          {["About", "Events", "Resources", "Gallery", "Contact"].map(
            (item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="hover:text-yellow-400"
              >
                {item}
              </Link>
            )
          )}
        </div>

        {/* Join Now Button */}
        <Link
          href="/join"
          className="hidden md:block bg-yellow-500 text-gray-900 px-4 py-2 rounded-lg hover:bg-yellow-400"
        >
          Join Now
        </Link>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 text-center py-4">
          <Link
            key="Home"
            href={`/`}
            onClick={() => setIsOpen(false)}
            className="block py-2 hover:text-yellow-400 w-full"
          >
            Home
          </Link>
          {["About", "Events", "Resources", "Gallery", "Contact"].map(
            (item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="block py-2 hover:text-yellow-400"
              >
                {item}
              </Link>
            )
          )}
          <Link
            href="/join"
            className="block py-2 mt-2 bg-yellow-500 text-gray-900 px-4 rounded-lg hover:bg-yellow-400"
          >
            Join Now
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

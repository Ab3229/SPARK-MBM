"use client";
import { useState } from "react";

const Footer: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleRefresh = () => {
    window.location.href = "/"; // Forces full page reload
  };

  return (
    <footer className="py-6 text-center bg-gray-900 text-gray-400">
      <p>© 2025 SPARK | All Rights Reserved</p>
    </footer>
  );
};

export default Footer;

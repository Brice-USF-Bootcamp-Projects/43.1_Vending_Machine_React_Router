// src/navBar.jsx

"use client";

import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 w-full">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Left Side - Vending Machine */}
        <div>
          <Link
            href="/"
            className="text-2xl font-bold transition-colors duration-300 hover:text-blue-300"
          >
            Vending Machine
          </Link>
        </div>

        {/* Right Side - Snack Links */}
        <div className="flex space-x-8">
          <Link
            href="/snacks/coke"
            className="text-lg transition-colors duration-300 hover:text-blue-300"
          >
            Coke
          </Link>
          <Link
            href="/snacks/lays"
            className="text-lg transition-colors duration-300 hover:text-blue-300"
          >
            Lays Chips
          </Link>
          <Link
            href="/snacks/snickers"
            className="text-lg transition-colors duration-300 hover:text-blue-300"
          >
            Snickers
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;







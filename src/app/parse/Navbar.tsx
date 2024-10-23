import Link from "next/link";
import React from "react";

const CustomNavbar = () => {
  return (
    <nav className="bg-blue-600 p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-2xl font-bold">
          Jobmela.info
        </Link>
        <div className="text-white">
          <Link href="#" className="mr-4 hover:text-gray-300">
            Home
          </Link>
          <Link href="#" className="hover:text-gray-300">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default CustomNavbar;

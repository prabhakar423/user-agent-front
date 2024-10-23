import React from "react";

type Props = {};

const CustomNavbar = (props: Props) => {
  return (
    <nav className="bg-blue-600 p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-white text-2xl font-bold">
          Jobmela.info
        </a>
        <div className="text-white">
          <a href="#" className="mr-4 hover:text-gray-300">
            Home
          </a>
          <a href="#" className="hover:text-gray-300">
            About
          </a>
        </div>
      </div>
    </nav>
  );
};

export default CustomNavbar;

import React from "react";

const CustomFooter = () => {
  return (
    <div>
      <footer className="bg-blue-600 p-4">
        <div className="container mx-auto text-white flex justify-between items-center">
          <p>&copy; 2024 Jobmela.info. All rights reserved.</p>
          <div>
            <a href="#" className="hover:text-gray-300 mr-4">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-300">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CustomFooter;

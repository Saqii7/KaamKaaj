import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 py-8 border-[1px] border-gray-400">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl font-bold"> Kaam <span className='font-extrabold text-cyan-500'>Kaaj</span></h2>
          <p className="text-sm">Providing top-notch services since 2023</p>
        </div>
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-800 transition duration-300">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-800 transition duration-300">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-800 transition duration-300">
              About Us
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-800 transition duration-300">
              Contact
            </a>
          </li>
        </ul>
        <div className="text-sm mt-4 md:mt-0">
          <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 py-8 w-full">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-start justify-around">
        {/* Left Section: Kaam Kaaj Title and Description */}
        <div className="mb-6 md:mb-0">
          <h2 className="text-3xl font-bold mb-2">Kaam <span className='text-cyan-500'>Kaaj</span></h2>
          <p className="text-sm">Providing top-notch services since 2023</p>
        </div>

        {/* Right Section: Sections - Company, Customers, Support */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-20">
          {/* Section: Company */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Company</h2>
            <ul className="grid grid-cols-2 md:grid-cols-1 gap-1 md:ml-1">
                <a href="#" className="text-gray-600 hover:text-gray-800 transition duration-300">
                  Static Data
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-800 transition duration-300">
                Static Data
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-800 transition duration-300">
                Static Data
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-800 transition duration-300">
                Static Data
                </a>
            </ul>
          </div>

          {/* Section: Customers */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Customers</h2>
            <ul className="grid grid-cols-2 md:grid-cols-1 gap-1 md:ml-1">
                <a href="#" className="text-gray-600 hover:text-gray-800 transition duration-300">
                  Static Data
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-800 transition duration-300">
                Static Data
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-800 transition duration-300">
                Static Data
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-800 transition duration-300">
                Static Data
                </a>
            </ul>
          </div>

          {/* Section: Support */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Support</h2>
            <ul className="grid grid-cols-2 md:grid-cols-1 gap-1 md:ml-1">
                <a href="#" className="text-gray-600 hover:text-gray-800 transition duration-300">
                  Static Data
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-800 transition duration-300">
                Static Data
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-800 transition duration-300">
                Static Data
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-800 transition duration-300">
                Static Data
                </a>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

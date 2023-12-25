import React from 'react';

const Contact = () => {
  return (
    <section className=" bg-white">
      <div className="bg-gray-100 pt-6 pb-2 rounded w-full px-4">
        <div className=" grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <input
              type="text"
              placeholder="Name"
              className="w-full rounded border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 py-2 px-4 mb-4"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 py-2 px-4 mb-4"
            />
          </div>
          <div>
            <textarea
              placeholder="Message"
              rows="4"
              className="w-full rounded border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 py-2 px-4 mb-4"
            ></textarea>
          </div>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="border-2 border-emerald-800 hover:border-white text-black hover:bg-gradient-to-r from-emerald-800 to-teal-300 font-semibold hover:text-white px-6 py-2 rounded-lg sm:text-sm w-full md:w-auto duration-300"
          >
            Submit
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
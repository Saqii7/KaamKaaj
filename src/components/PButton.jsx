import React from "react";

const PButton = ({ text }) => {
  return (
    <button 
    className="bg-gradient-to-r from-emerald-800 to-teal-300 font-semibold text-white px-6 py-2 rounded-lg sm:text-sm">
      {text}
    </button>
  );
};

export default PButton;

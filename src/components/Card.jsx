// VendorCard.jsx
import React from 'react';

const Card = ({ vendor }) => {
  return (
    <div className="border border-gray-300 p-4 rounded-md shadow-md">
      <img src={vendor.image} alt={vendor.name} className="w-full h-40 object-cover mb-4 rounded-md" />
      <h3 className="text-lg font-semibold mb-2">{vendor.name}</h3>
      <p className="text-gray-600 mb-4">{vendor.description}</p>
      <div className="flex items-center">
        <span className="mr-2">{vendor.review} Reviews</span>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
          Contact
        </button>
      </div>
    </div>
  );
};

export default Card;

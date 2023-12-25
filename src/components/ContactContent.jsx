// ContactContent.js
import React from 'react';

const ContactContent = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ml-20">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Address</h2>
          <p>
          <h2 className="font-bold mb-2">Kaam <span className='text-cyan-500'>Kaaj</span> Official</h2>
            [Street Address]<br />
            [City, State, Zip Code]<br />
            [Country]
          </p>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Phone</h2>
          <p>Main: [Your Main Contact Number]</p>
          <p>Support: [Your Support Contact Number]</p>
        </div>
        <div className="mb-8 md:mb-0">
          <h2 className="text-2xl font-bold mb-4 ">Email</h2>
          <p>General Inquiries: [General Email Address]</p>
          <p>Support: [Support Email Address]</p>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Social Media</h2>
          <p>
            Connect with us on social media platforms to stay updated and engaged:
          </p>
          <ul className="list-disc pl-6">
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">LinkedIn</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactContent;

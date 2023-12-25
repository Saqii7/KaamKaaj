import React, { useState } from 'react';
import ContactContent from '../components/ContactContent';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add the logic to handle form submission
    console.log('Form submitted:', formData);
    // Reset form fields
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className='pt-32 px-4'>
    <ContactContent/>
    <div className="text-center mb-8 px-4">
      <h2 className=" text-2xl font-bold mb-5">Contact Form</h2>
        <p>
          If you prefer, you can also reach out to us by filling out the form below. We'll get back to you as soon as possible.
        </p>
        {/* Include your contact form component here */}
      </div>
    <form className="px-4 shadow-lg p-4 rounded-lg border-[1px] border-gray-400 w-full max-w-lg mx-auto mb-8 " onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="name" className="block mb-2 font-medium text-gray-700">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Your name"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block mb-2 font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Your email"
          required
        />
      </div>
      <div className="mb-6">
        <label htmlFor="message" className="block mb-2 font-medium text-gray-700">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          rows="5"
          placeholder="Your message"
          required
        ></textarea>
      </div>
      <div className="text-center">
      <button 
    className="bg-gradient-to-r from-emerald-800 to-teal-300 font-semibold text-white px-6 py-2 rounded-lg sm:text-sm">
      Submit
    </button>
      </div>
    </form>
    </div>
  );
};

export default ContactPage;

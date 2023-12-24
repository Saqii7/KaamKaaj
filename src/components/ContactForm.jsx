import React, { useState } from 'react';
import PButton from './PButton';

const ContactForm = () => {
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
    <form className="p-4 rounded-lg border-[1px] border-gray-400 w-full max-w-lg mx-auto mt-8" onSubmit={handleSubmit}>
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
      <div className="text-center scale-125">
        <PButton text="Submit" />
      </div>
    </form>
  );
};

export default ContactForm;

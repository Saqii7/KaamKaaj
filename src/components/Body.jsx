import React from 'react';
import ContactForm from './ContactForm';
import Lottie from 'lottie-react';
import Plumber from '../assets/svgs/plumber.json';
import Electrician from '../assets/svgs/electrician.json';
import Housekeeping from '../assets/svgs/housekeeping.json';
import Maintainance from '../assets/svgs/maintainance.json';

const Body = () => {
  return (
    <div className="px-4 py-8 text-justify container">
      <h2 className="text-3xl font-bold mb-8 px-4">Our Services</h2>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 p-4">
        {/* Plumbing Services */}
        <div className="border p-4 rounded-md shadow-md">
          <h3 className="text-xl font-semibold mb-2">Plumbing Services</h3>
          <p>From fixing leaks to installing fixtures, we've got you covered with our expert plumbing services.</p>
          <div className="w-full mx-auto sm:w-3/4">
            <Lottie animationData={Plumber} loop={true} />
          </div>
        </div>

        {/* Electrical Services */}
        <div className="border p-4 rounded-md shadow-md">
          <h3 className="text-xl font-semibold mb-2">Electrical Services</h3>
          <p>Trust our skilled electricians for wiring, repairs, installations, and safety inspections.</p>
          <div className="w-full mx-auto sm:w-3/4">
            <Lottie animationData={Electrician} loop={true} />
          </div>
        </div>

        {/* Housekeeping/Cleaning */}
        <div className="border p-4 rounded-md shadow-md">
          <h3 className="text-xl font-semibold mb-2 flex flex-wrap">Housekeeping/<span>Cleaning</span></h3>
          <p>Experience cleanliness at its best with our professional housekeeping and cleaning services.</p>
          <div className="w-full mx-auto sm:w-3/4">
            <Lottie animationData={Housekeeping} loop={true} />
          </div>
        </div>

        {/* Maintenance Work */}
        <div className="border p-4 rounded-md shadow-md">
          <h3 className="text-xl font-semibold mb-2">Maintenance Work</h3>
          <p>Let us handle your household maintenance needs, from HVAC services to painting and more.</p>
          <div className="w-full mx-auto sm:w-3/4">
            <Lottie animationData={Maintainance} loop={true} />
          </div>
        </div>
      </div>

      {/* Expertise and Quality */}
      <div className="mt-12">
        <h2 className="text-3xl font-bold mb-8">Our Commitment to Quality</h2>
        <p className="mb-4">
          At <span className='font-semibold'>  Kaam </span> <span className='text-cyan-500 font-semibold'>Kaaj</span>, we pride ourselves on our skilled team, dedication to quality service, and commitment
          to customer satisfaction. Our professional technicians are experienced, trained, and equipped to handle all
          your household needs with precision and care.
        </p>

        <p className="mb-4">
          We adhere to strict safety standards, ensuring the well-being of both our customers and our team. Our goal is
          not just to meet but to exceed your expectations, making your home a safer, more comfortable place.
        </p>
      </div>

      {/* Call-to-Action */}
      <div className="mt-12">
        <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
        <p>
          For reliable and top-notch household services, contact us today! Call 989899 or fill out the form below to
          schedule an appointment.
        </p>
        <div className="mt-8">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Body;

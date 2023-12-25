import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-28">
      <h1 className="text-4xl font-bold mb-6">About Kaam Kaaj</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
        <p className="text-gray-700">
          Share your company's mission statement, highlighting the purpose and values of Kaam Kaaj.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Our History</h2>
        <p className="text-gray-700">
          Provide a brief overview of Kaam Kaaj's journey, key milestones, and important achievements.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Our Team</h2>
        <p className="text-gray-700">
          Introduce your team members, their roles, and their contributions to Kaam Kaaj.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Why Choose Us</h2>
        <p className="text-gray-700">
          Highlight what sets Kaam Kaaj apart, such as exceptional service, unique features, or customer benefits.
        </p>
      </section>

      {/* Add more sections as needed for your specific content */}
    </div>
  );
};

export default About;

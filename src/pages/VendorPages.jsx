// VendorPage.jsx
import React from "react";
import VendorCategory from "../components/Category";

const vendorsData = {
  Electrician: [
    {
      id: 1,
      name: "ABC Electricians",
      description:
        "Professional electrician services for residential and commercial buildings.",
      image: "electrician1.jpg",
      review: 25,
    },
    {
      id: 2,
      name: "PQR Electrical Services",
      description:
        "Skilled electricians specializing in wiring, repairs, and installations.",
      image: "electrician2.jpg",
      review: 18,
    },
    {
      id: 3,
      name: "LMN Electric Works",
      description:
        "Reliable electricians offering comprehensive electrical solutions.",
      image: "electrician3.jpg",
      review: 20,
    },
    {
      id: 4,
      name: "EFG Power Pros",
      description:
        "Expert electricians providing high-quality electrical services.",
      image: "electrician4.jpg",
      review: 22,
    },
    // Add more electrician vendors
  ],
  Plumber: [
    {
      id: 1,
      name: "QuickPlumb Services",
      description:
        "Fast and reliable plumbing solutions for households and businesses.",
      image: "plumber1.jpg",
      review: 30,
    },
    {
      id: 2,
      name: "ProDrain Plumbers",
      description: "Professional drain and pipe repair specialists.",
      image: "plumber2.jpg",
      review: 22,
    },
    {
      id: 3,
      name: "FlowFix Plumbing",
      description: "Expert plumbers for quick and efficient plumbing repairs.",
      image: "plumber3.jpg",
      review: 28,
    },
    {
      id: 4,
      name: "AquaCare Plumbing",
      description:
        "Experienced plumbing services for both residential and commercial needs.",
      image: "plumber4.jpg",
      review: 25,
    },
    // Add more plumber vendors
  ],

  Housekeeping: [
    {
      id: 1,
      name: "CleanSweep Housekeepers",
      description: "Thorough cleaning services for homes and offices.",
      image: "housekeeping1.jpg",
      review: 40,
    },
    {
      id: 2,
      name: "EliteCare Cleaners",
      description:
        "Experienced housekeeping team offering detailed cleaning solutions.",
      image: "housekeeping2.jpg",
      review: 35,
    },
    {
      id: 3,
      name: "SparkleShine Services",
      description:
        "Professional housekeeping for a sparkling clean environment.",
      image: "housekeeping3.jpg",
      review: 38,
    },
    {
      id: 4,
      name: "FreshStart Cleaners",
      description:
        "Quality housekeeping with attention to detail for homes and businesses.",
      image: "housekeeping4.jpg",
      review: 32,
    },
    // Add more housekeeping vendors
  ],
  MaintenanceWork: [
    {
      id: 1,
      name: "AllFix Maintenance",
      description:
        "Comprehensive maintenance services for buildings and properties.",
      image: "maintenance1.jpg",
      review: 28,
    },
    {
      id: 2,
      name: "ReliableWorks Maintenance",
      description:
        "Reliable maintenance work for both residential and commercial spaces.",
      image: "maintenance2.jpg",
      review: 20,
    },
    {
      id: 3,
      name: "SwiftCare Solutions",
      description: "Swift and efficient maintenance services for properties.",
      image: "maintenance3.jpg",
      review: 24,
    },
    {
      id: 4,
      name: "PropertyPro Services",
      description:
        "Professional maintenance for residential and commercial properties.",
      image: "maintenance4.jpg",
      review: 26,
    },
    // Add more maintenance work vendors
  ],
  // Add more categories if needed
};

const VendorPage = () => {
  return (
    <div className="container mx-auto py-28">
      <h1 className="text-4xl font-semibold mb-8">Services</h1>
      {/* Display categories */}
      {Object.entries(vendorsData).map(([category, vendors]) => (
        <VendorCategory
          key={category}
          categoryName={category}
          vendors={vendors}
        />
      ))}
    </div>
  );
};

export default VendorPage;

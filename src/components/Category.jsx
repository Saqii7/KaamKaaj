// VendorCategory.jsx
import React from 'react';
import Card from './Card';

const Category = ({ categoryName, vendors }) => {
  return (
    <div className="my-8">
      <h2 className="text-2xl font-semibold mb-4">{categoryName}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {vendors.map((vendor) => (
          <Card key={vendor.id} vendor={vendor} />
        ))}
      </div>
    </div>
  );
};

export default Category;

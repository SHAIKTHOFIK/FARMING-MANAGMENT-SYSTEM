import React from 'react';

const technologies = [
  {
    title: 'Precision Agriculture',
    description: 'Using GPS, sensors, and data analytics to optimize farming practices.',
    image: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Vertical Farming',
    description: 'Growing crops in vertically stacked layers to maximize space efficiency.',
    image: 'https://images.unsplash.com/photo-1505471768190-275e2ad070c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Hydroponics',
    description: 'Growing plants without soil using mineral nutrient solutions.',
    image: 'https://images.unsplash.com/photo-1558449028-b53a39d100fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }
];

export default function Technologies() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Modern Farming Technologies</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {technologies.map((tech, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={tech.image}
              alt={tech.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{tech.title}</h3>
              <p className="text-gray-600">{tech.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
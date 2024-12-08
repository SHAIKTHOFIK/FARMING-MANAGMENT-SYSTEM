import React from 'react';

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">About Farming</h1>
        <p className="text-xl text-gray-600">Connecting farmers and consumers for a sustainable future</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <img
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Farming"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-4">
            We are dedicated to promoting sustainable farming practices while connecting local farmers directly with consumers. Our platform helps reduce the gap between producers and consumers, ensuring fair prices and fresh produce for everyone.
          </p>
          <p className="text-gray-600">
            By supporting local farmers and implementing modern farming technologies, we're working towards a more sustainable and efficient agricultural future.
          </p>
        </div>
      </div>

      <div className="bg-green-50 rounded-lg p-8 mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-2">Fresh Produce</h3>
            <p className="text-gray-600">Direct from farms to your table, ensuring maximum freshness</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold mb-2">Support Local Farmers</h3>
            <p className="text-gray-600">Help sustain local farming communities and their livelihoods</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold mb-2">Sustainable Practices</h3>
            <p className="text-gray-600">Promoting environmentally friendly farming methods</p>
          </div>
        </div>
      </div>
    </div>
  );
}
import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Book Home Services Online</h1>
        <p className="text-gray-600 mb-8">Professional services right at your doorstep. Reliable and affordable.</p>
        <button className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600">Book Now</button>
      </div>
    </section>
  );
};

export default Hero;

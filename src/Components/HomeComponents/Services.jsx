import React from 'react';

const services = [
  { title: 'Cleaning', description: 'Professional home and office cleaning services' },
  { title: 'Plumbing', description: 'Expert plumbing services for all your needs' },
  { title: 'Electrical', description: 'Qualified electricians for safe electrical repairs' },
  { title: 'Carpentry', description: 'Skilled carpenters for all woodwork needs' },
];

const Services = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

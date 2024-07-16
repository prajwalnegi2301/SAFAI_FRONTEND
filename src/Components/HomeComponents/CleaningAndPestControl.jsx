import React from 'react';
import { FaHome, FaBath, FaCouch, FaBug } from 'react-icons/fa';

const services = [
  {
    icon: <FaHome size={50} className="text-blue-500" />,
    title: 'Full home cleaning',
    imageUrl: 'https://via.placeholder.com/150', // Replace with your actual image URL
  },
  {
    icon: <FaBath size={50} className="text-blue-500" />,
    title: 'Bathroom & kitchen cleaning',
    imageUrl: 'https://via.placeholder.com/150', // Replace with your actual image URL
  },
  {
    icon: <FaCouch size={50} className="text-blue-500" />,
    title: 'Sofa & carpet cleaning',
    imageUrl: 'https://via.placeholder.com/150', // Replace with your actual image URL
  },
  {
    icon: <FaBug size={50} className="text-blue-500" />,
    title: 'Cockroach, ant & general pest control',
    imageUrl: 'https://via.placeholder.com/150', // Replace with your actual image URL
  },
];

const CleaningAndPestControl = () => {
  return (
    <div className="py-12 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Cleaning & pest control</h2>
      <div className="flex justify-center flex-wrap">
        {services.map((service, index) => (
          <div key={index} className="bg-white m-4 p-6 rounded-lg shadow-lg w-64">
            <div className="flex justify-center mb-4">
              {service.icon}
            </div>
            <img src={service.imageUrl} alt={service.title} className="mb-4 rounded-lg"/>
            <h3 className="text-xl font-semibold text-center text-gray-800">{service.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CleaningAndPestControl;

import React from 'react';
import WorkerList from './WorkerList';

const serviceWorkers = {

  
  Barber: [
    { id: 1, name: 'John Doe', image: 'https://via.placeholder.com/150', availability: '2024-06-20', reviews: '★★★★☆' },
    { id: 2, name: 'Jane Smith', image: 'https://via.placeholder.com/150', availability: '2024-06-21', reviews: '★★★☆☆' },
  ],
  Mechanic: [
    { id: 3, name: 'Michael Brown', image: 'https://via.placeholder.com/150', availability: '2024-06-22', reviews: '★★★★★' },
    { id: 4, name: 'Emily White', image: 'https://via.placeholder.com/150', availability: '2024-06-23', reviews: '★★★★☆' },
  ],
  'Mobile Repairing': [
    { id: 5, name: 'Chris Johnson', image: 'https://via.placeholder.com/150', availability: '2024-06-24', reviews: '★★★☆☆' },
    { id: 6, name: 'Patricia Williams', image: 'https://via.placeholder.com/150', availability: '2024-06-25', reviews: '★★★★☆' },
  ],
  Maid: [
    { id: 7, name: 'James Miller', image: 'https://via.placeholder.com/150', availability: '2024-06-26', reviews: '★★★★☆' },
    { id: 8, name: 'Linda Davis', image: 'https://via.placeholder.com/150', availability: '2024-06-27', reviews: '★★★★★' },
  ],
  Salesman: [
    { id: 9, name: 'Robert Wilson', image: 'https://via.placeholder.com/150', availability: '2024-06-28', reviews: '★★★☆☆' },
    { id: 10, name: 'Barbara Garcia', image: 'https://via.placeholder.com/150', availability: '2024-06-29', reviews: '★★★★☆' },
  ],
  Plumber: [
    { id: 11, name: 'William Martinez', image: 'https://via.placeholder.com/150', availability: '2024-06-30', reviews: '★★★★★' },
    { id: 12, name: 'Susan Rodriguez', image: 'https://via.placeholder.com/150', availability: '2024-07-01', reviews: '★★★☆☆' },
  ],
  Carpenter: [
    { id: 13, name: 'Joseph Hernandez', image: 'https://via.placeholder.com/150', availability: '2024-07-02', reviews: '★★★★☆' },
    { id: 14, name: 'Sarah Lopez', image: 'https://via.placeholder.com/150', availability: '2024-07-03', reviews: '★★★★★' },
  ],
  Electrician: [
    { id: 15, name: 'David Gonzalez', image: 'https://via.placeholder.com/150', availability: '2024-07-04', reviews: '★★★☆☆' },
    { id: 16, name: 'Karen Perez', image: 'https://via.placeholder.com/150', availability: '2024-07-05', reviews: '★★★★☆' },
  ],
  Babysitter: [
    { id: 17, name: 'Richard Adams', image: 'https://via.placeholder.com/150', availability: '2024-07-06', reviews: '★★★★☆' },
    { id: 18, name: 'Nancy Thompson', image: 'https://via.placeholder.com/150', availability: '2024-07-07', reviews: '★★★★★' },
  ],
};

const ServiceItem = ({ service }) => {
  const workers = serviceWorkers[service.name] || [];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <div className="text-3xl mr-4">{service.icon}</div>
        <div>
          <h2 className="text-xl font-bold">{service.name}</h2>
          <p>{service.description}</p>
        </div>
      </div>
      <WorkerList workers={workers} />
    </div>
  );
};

export default ServiceItem;

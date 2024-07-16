// import React from 'react';
// import { FaCut, FaShower, FaToolbox, FaBolt, FaPaintRoller, FaWater, FaTools, FaWind, FaSearch } from 'react-icons/fa';

// const services = [
//   { icon: <FaCut size={40} />, title: "Women's Salon & Spa" },
//   { icon: <FaShower size={40} />, title: "Men's Salon & Massage" },
//   { icon: <FaWind size={40} />, title: 'AC & Appliance Repair' },
//   { icon: <FaTools size={40} />, title: 'Cleaning & Pest Control' },
//   { icon: <FaBolt size={40} />, title: 'Electrician, Plumber & Carpenter' },
//   { icon: <FaWater size={40} />, title: 'Native Water Purifier' },
//   { icon: <FaPaintRoller size={40} />, title: 'Painting & Waterproofing' },
//   { icon: <FaToolbox size={40} />, title: 'Wall Decor (Panels)' },
// ];

// const ServiceGrid = () => {
//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="relative mb-8">
//         <input
//           type="text"
//           placeholder="Search for 'AC service'"
//           className="w-full p-4 pr-10 border rounded-full shadow-sm focus:outline-none"
//         />
//         <FaSearch className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-500" />
//       </div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//         {services.map((service, index) => (
//           <div key={index} className="bg-gray-100 p-6 rounded-lg flex items-center space-x-4">
//             {service.icon}
//             <h3 className="text-lg font-semibold">{service.title}</h3>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ServiceGrid;



import React from 'react';
import { FaCut, FaShower, FaToolbox, FaBolt, FaPaintRoller, FaWater, FaTools, FaWind, FaSearch } from 'react-icons/fa';
import { motion } from 'framer-motion';

const services = [
  { icon: <FaCut size={40} />, title: "Women's Salon & Spa" },
  { icon: <FaShower size={40} />, title: "Men's Salon & Massage" },
  { icon: <FaWind size={40} />, title: 'AC & Appliance Repair' },
  { icon: <FaTools size={40} />, title: 'Cleaning & Pest Control' },
  { icon: <FaBolt size={40} />, title: 'Electrician, Plumber & Carpenter' },
  { icon: <FaWater size={40} />, title: 'Native Water Purifier' },
  { icon: <FaPaintRoller size={40} />, title: 'Painting & Waterproofing' },
  { icon: <FaToolbox size={40} />, title: 'Wall Decor (Panels)' },
];

const ServiceGrid = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="relative mb-8">
        <input
          type="text"
          placeholder="Search for 'AC service'"
          className="w-full p-4 pr-10 border rounded-full shadow-sm focus:outline-none"
        />
        <FaSearch className="absolute top-1/2 right-4 transform -translate-y-1/2 text-blue-500" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-gray-100  p-6 rounded-lg flex items-center space-x-4 cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            {service.icon}
            <h3 className="text-lg font-semibold">{service.title}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ServiceGrid;

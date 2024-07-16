// import React from 'react';

// const acApplianceServices = [
//   { imgSrc: '/path/to/image1.jpg', title: 'AC Repair & Service' },
//   { imgSrc: '/path/to/image2.jpg', title: 'Water Purifier Repair' },
//   { imgSrc: '/path/to/image3.jpg', title: 'Refrigerator Repair' },
//   { imgSrc: '/path/to/image4.jpg', title: 'Washing Machine Repair' },
//   { imgSrc: '/path/to/image5.jpg', title: 'Chimney Repair' },
//   { imgSrc: '/path/to/image6.jpg', title: 'Native Water Purifier' },
//   { imgSrc: '/path/to/image7.jpg', title: 'Television Repair' },
//   { imgSrc: '/path/to/image8.jpg', title: 'Geyser Repair' },
// ];

// const quickHomeRepairs = [
//   { imgSrc: '/path/to/image9.jpg', title: 'Drill & hang (wall decor)', rating: '4.86 (129.6K)', price: '₹129' },
//   { imgSrc: '/path/to/image10.jpg', title: 'Fan repair', rating: '4.82 (115.8K)', price: '₹199' },
//   { imgSrc: '/path/to/image11.jpg', title: 'Switch/socket replacement', rating: '4.87 (38.7K)', price: '₹109' },
//   { imgSrc: '/path/to/image12.jpg', title: 'Cupboard hinge service (up to 2)', rating: '4.84 (65K)', price: '₹199' },
//   { imgSrc: '/path/to/image13.jpg', title: 'Minor door repair', rating: '4.82 (52.9K)', price: '₹199' },
//   { imgSrc: '/path/to/image14.jpg', title: 'Curtain rod installation (2 units)', rating: '4.85 (47.9K)', price: '₹199' },
//   { imgSrc: '/path/to/image15.jpg', title: 'Switchboard/switch box repair', rating: '4.86 (87.2K)', price: '₹120' },
//   { imgSrc: '/path/to/image16.jpg', title: 'Door lock repair', rating: '4.85 (40.7K)', price: '₹259' },
//   { imgSrc: '/path/to/image17.jpg', title: 'Drawer channel repair (one set)', rating: '4.85 (40.4K)', price: '₹178' },
//   { imgSrc: '/path/to/image18.jpg', title: 'Tubelight installation/repair', rating: '4.88 (73.7K)', price: '₹120' },
// ];

// const ServiceOffers = () => {
//   return (
//     <div className="container mx-auto px-4 py-8">
//       <section className="mb-16">
//         <h2 className="text-2xl font-bold mb-4">AC & appliance repair</h2>
//         <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
//           {acApplianceServices.map((service, index) => (
//             <div key={index} className="text-center p-4 bg-white rounded-lg shadow-sm">
//               <img src={service.imgSrc} alt={service.title} className="w-full h-32 object-cover rounded-lg mb-2" />
//               <p className="text-sm font-semibold">{service.title}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       <section>
//         <h2 className="text-2xl font-bold mb-4">Quick home repairs</h2>
//         <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
//           {quickHomeRepairs.map((service, index) => (
//             <div key={index} className="text-center p-4 bg-white rounded-lg shadow-sm">
//               <img src={service.imgSrc} alt={service.title} className="w-full h-32 object-cover rounded-lg mb-2" />
//               <p className="text-sm font-semibold">{service.title}</p>
//               <p className="text-xs text-gray-600">{service.rating}</p>
//               <p className="text-sm font-bold text-gray-800">{service.price}</p>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default ServiceOffers;

import React from "react";
import { motion } from "framer-motion";

const acApplianceServices = [
  { imgSrc: "/path/to/image1.jpg", title: "AC Repair & Service" },
  { imgSrc: "/path/to/image2.jpg", title: "Water Purifier Repair" },
  { imgSrc: "/path/to/image3.jpg", title: "Refrigerator Repair" },
  { imgSrc: "/path/to/image4.jpg", title: "Washing Machine Repair" },
  { imgSrc: "/path/to/image5.jpg", title: "Chimney Repair" },
  { imgSrc: "/path/to/image6.jpg", title: "Native Water Purifier" },
  { imgSrc: "/path/to/image7.jpg", title: "Television Repair" },
  { imgSrc: "/path/to/image8.jpg", title: "Geyser Repair" },
];

const quickHomeRepairs = [
  {
    imgSrc: "/path/to/image9.jpg",
    title: "Drill & hang (wall decor)",
    rating: "4.86 (129.6K)",
    price: "₹129",
  },
  {
    imgSrc: "/path/to/image10.jpg",
    title: "Fan repair",
    rating: "4.82 (115.8K)",
    price: "₹199",
  },
  {
    imgSrc: "/path/to/image11.jpg",
    title: "Switch/socket replacement",
    rating: "4.87 (38.7K)",
    price: "₹109",
  },

  {
    imgSrc: "/path/to/image14.jpg",
    title: "Curtain rod installation (2 units)",
    rating: "4.85 (47.9K)",
    price: "₹199",
  },
  {
    imgSrc: "/path/to/image15.jpg",
    title: "Switchboard/switch box repair",
    rating: "4.86 (87.2K)",
    price: "₹120",
  },
  {
    imgSrc: "/path/to/image16.jpg",
    title: "Door lock repair",
    rating: "4.85 (40.7K)",
    price: "₹259",
  },
  {
    imgSrc: "/path/to/image17.jpg",
    title: "Drawer channel repair (one set)",
    rating: "4.85 (40.4K)",
    price: "₹178",
  },
  {
    imgSrc: "/path/to/image18.jpg",
    title: "Tubelight installation/repair",
    rating: "4.88 (73.7K)",
    price: "₹120",
  },
];

const ServiceOffers = () => {
  const transition = { duration: 0.3 };

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-4">AC & appliance repair</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {acApplianceServices.map((service, index) => (
            <motion.div
              key={index}
              className="text-center p-4 bg-white rounded-lg shadow-sm"
              whileHover={{ scale: 1.05 }}
              transition={transition}
            >
              <img
                src={service.imgSrc}
                alt={service.title}
                className="w-full h-32 object-cover rounded-lg mb-2"
              />
              <p className="text-sm font-semibold">{service.title}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Quick home repairs</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {quickHomeRepairs.map((service, index) => (
            <motion.div
              key={index}
              className="text-center p-4 bg-white rounded-lg shadow-sm"
              whileHover={{ scale: 1.05 }}
              transition={transition}
            >
              <img
                src={service.imgSrc}
                alt={service.title}
                className="w-full h-32 object-cover rounded-lg mb-2"
              />
              <p className="text-sm font-semibold">{service.title}</p>
              <p className="text-xs text-gray-600">{service.rating}</p>
              <p className="text-sm font-bold text-gray-800">{service.price}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServiceOffers;

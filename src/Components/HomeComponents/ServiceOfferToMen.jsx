// import React from 'react'

// const ServiceOfferToMen = () => {
//     const servicesForMen = [
//         { imgSrc: '/path/to/image9.jpg', title: 'Hair Cut', rating: '4.86 (129.6K)', price: '₹129' },
//         { imgSrc: '/path/to/image10.jpg', title: 'Trimming', rating: '4.82 (115.8K)', price: '₹199' },
//         { imgSrc: '/path/to/image11.jpg', title: 'Massage', rating: '4.87 (38.7K)', price: '₹109' },
//         { imgSrc: '/path/to/image12.jpg', title: 'Facial', rating: '4.84 (65K)', price: '₹199' },
//         { imgSrc: '/path/to/image13.jpg', title: 'Spa Service', rating: '4.82 (52.9K)', price: '₹199' },
//         { imgSrc: '/path/to/image14.jpg', title: 'Hair Treatment', rating: '4.85 (47.9K)', price: '₹199' },
//         { imgSrc: '/path/to/image15.jpg', title: 'Hair Straightening', rating: '4.86 (87.2K)', price: '₹120' },
//         { imgSrc: '/path/to/image16.jpg', title: 'Waxing', rating: '4.85 (40.7K)', price: '₹259' },
 
       
//       ];
//   return (
//     <div>
//        <section>
//         <h2 className="text-2xl font-bold mb-4">Services For Men</h2>
//         <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
//           {servicesForMen.map((service, index) => (
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
//   )
// }

// export default ServiceOfferToMen


import React from 'react';
import { motion } from 'framer-motion';

const ServiceOfferToMen = () => {
  const servicesForMen = [
    { imgSrc: '/path/to/image9.jpg', title: 'Hair Cut', rating: '4.86 (129.6K)', price: '₹129' },
    { imgSrc: '/path/to/image10.jpg', title: 'Trimming', rating: '4.82 (115.8K)', price: '₹199' },
    { imgSrc: '/path/to/image11.jpg', title: 'Massage', rating: '4.87 (38.7K)', price: '₹109' },
    { imgSrc: '/path/to/image12.jpg', title: 'Facial', rating: '4.84 (65K)', price: '₹199' },
    { imgSrc: '/path/to/image13.jpg', title: 'Spa Service', rating: '4.82 (52.9K)', price: '₹199' },
    { imgSrc: '/path/to/image14.jpg', title: 'Hair Treatment', rating: '4.85 (47.9K)', price: '₹199' },
    { imgSrc: '/path/to/image15.jpg', title: 'Hair Straightening', rating: '4.86 (87.2K)', price: '₹120' },
    { imgSrc: '/path/to/image16.jpg', title: 'Waxing', rating: '4.85 (40.7K)', price: '₹259' },
  ];

  const transition = { duration: 0.3 };

  return (
    <div className="container mx-auto px-4 py-8">
      <section>
        <h2 className="text-2xl font-bold mb-4">Services For Men</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {servicesForMen.map((service, index) => (
            <motion.div
              key={index}
              className="text-center p-4 bg-white rounded-lg shadow-sm"
              whileHover={{ scale: 1.05 }}
              transition={transition}
            >
              <img src={service.imgSrc} alt={service.title} className="w-full h-32 object-cover rounded-lg mb-2" />
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

export default ServiceOfferToMen;


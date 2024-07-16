// import React from 'react';

// const newServices = [
//   { imgSrc: '/path/to/image1.jpg', title: 'Wall decor (Panels)' },
//   { imgSrc: '/path/to/image2.jpg', title: 'Native Water Purifier' },
//   { imgSrc: '/path/to/image3.jpg', title: 'Native Smart Locks' },
//   { imgSrc: '/path/to/image4.jpg', title: 'Home painting' },
//   { imgSrc: '/path/to/image5.jpg', title: 'Laser Hair Reduction' },
//   { imgSrc: '/path/to/image6.jpg', title: 'Spa Ayurveda' },
//   { imgSrc: '/path/to/image7.jpg', title: 'Hair Studio for Women' },
//   { imgSrc: '/path/to/image8.jpg', title: 'AC Repair & Service' },
// ];

// const bookedServices = [
//   { imgSrc: '/path/to/image9.jpg', title: 'Service 1' },
//   { imgSrc: '/path/to/image10.jpg', title: 'Service 2' },
//   { imgSrc: '/path/to/image11.jpg', title: 'Service 3' },
//   { imgSrc: '/path/to/image12.jpg', title: 'Service 4' },
//   { imgSrc: '/path/to/image13.jpg', title: 'Service 5' },
//   { imgSrc: '/path/to/image14.jpg', title: 'Service 6' },
//   { imgSrc: '/path/to/image15.jpg', title: 'Service 7' },
//   { imgSrc: '/path/to/image16.jpg', title: 'Service 8' },
// ];

// const ServiceSections = () => {
//   return (
//     <div className="container mx-auto px-4 py-8">
//       <section className="mb-16">
//         <h2 className="text-2xl font-bold mb-4">New and noteworthy</h2>
//         <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
//           {newServices.map((service, index) => (
//             <div key={index} className="text-center">
//               <img src={service.imgSrc} alt={service.title} className="w-full h-32 object-cover rounded-lg mb-2" />
//               <p className="text-sm font-semibold">{service.title}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       <section>
//         <h2 className="text-2xl font-bold mb-4">Most booked services</h2>
//         <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
//           {bookedServices.map((service, index) => (
//             <div key={index} className="text-center">
//               <img src={service.imgSrc} alt={service.title} className="w-full h-32 object-cover rounded-lg mb-2" />
//               <p className="text-sm font-semibold">{service.title}</p>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default ServiceSections;
import React from 'react';
import { motion } from 'framer-motion';

const newServices = [
  { imgSrc: '/path/to/image1.jpg', title: 'Wall decor (Panels)' },
  { imgSrc: '/path/to/image2.jpg', title: 'Native Water Purifier' },
  { imgSrc: '/path/to/image3.jpg', title: 'Native Smart Locks' },
  { imgSrc: '/path/to/image4.jpg', title: 'Home painting' },
  { imgSrc: '/path/to/image5.jpg', title: 'Laser Hair Reduction' },
  { imgSrc: '/path/to/image6.jpg', title: 'Spa Ayurveda' },
  { imgSrc: '/path/to/image7.jpg', title: 'Hair Studio for Women' },
  { imgSrc: '/path/to/image8.jpg', title: 'AC Repair & Service' },
];

const bookedServices = [
  { imgSrc: '/path/to/image9.jpg', title: 'Service 1' },
  { imgSrc: '/path/to/image10.jpg', title: 'Service 2' },
  { imgSrc: '/path/to/image11.jpg', title: 'Service 3' },
  { imgSrc: '/path/to/image12.jpg', title: 'Service 4' },
  { imgSrc: '/path/to/image13.jpg', title: 'Service 5' },
  { imgSrc: '/path/to/image14.jpg', title: 'Service 6' },
  { imgSrc: '/path/to/image15.jpg', title: 'Service 7' },
  { imgSrc: '/path/to/image16.jpg', title: 'Service 8' },
];

const ServiceSections = () => {
  const transition = { duration: 0.3 };

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-4">New and noteworthy</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {newServices.map((service, index) => (
            <motion.div
              key={index}
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={transition}
            >
              <img src={service.imgSrc} alt={service.title} className="w-full h-32 object-cover rounded-lg mb-2" />
              <p className="text-sm font-semibold">{service.title}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Most booked services</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {bookedServices.map((service, index) => (
            <motion.div
              key={index}
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={transition}
            >
              <img src={service.imgSrc} alt={service.title} className="w-full h-32 object-cover rounded-lg mb-2" />
              <p className="text-sm font-semibold">{service.title}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServiceSections;

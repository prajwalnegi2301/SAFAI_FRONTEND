import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-slate-300 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-3">Safai</h3>
            <p className="text-sm"> Images shown are for representational purposes only. The depictions may or may not form a part of us.</p>
          </div>
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul>
              <li><Link to="/" className="hover:text-slate-400">Home</Link></li>
              <li><Link to="/services" className="hover:text-slate-400">Services</Link></li>
              <li><Link to="/about" className="hover:text-slate-400">About</Link></li>
              <li><Link to="/contact" className="hover:text-slate-400">Contact</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
            <p className="text-sm">123 Street Name, City, Country</p>
            <p className="text-sm">Email: info@safai.com</p>
            <p className="text-sm">Phone: +1 (123) 456-7890</p>
          </div>
        </div>
        <div className="border-t border-slate-700 mt-6 pt-4 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Safai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

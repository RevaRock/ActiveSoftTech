import React from 'react';
import { Code, Twitter, Linkedin, Github, MapPin, Phone, Mail } from 'lucide-react';
import { Page } from '../types';

interface FooterProps {
  setCurrentPage: (p: Page) => void;
}

const Footer = ({ setCurrentPage }: FooterProps) => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
              <span className="text-2xl font-bold text-white">
                Active<span className="text-brand-blue">SoftTech</span>
              </span>
            </div>
            <p className="text-slate-400 max-w-md mb-6">
              Empowering the next generation of software professionals with industry-leading training and hands-on experience.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-brand-blue transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-brand-blue transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-brand-blue transition-colors"><Github size={20} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><button onClick={() => setCurrentPage('home')} className="hover:text-brand-blue transition-colors">Home</button></li>
              <li><button onClick={() => setCurrentPage('about')} className="hover:text-brand-blue transition-colors">About Us</button></li>
              <li><button onClick={() => setCurrentPage('courses')} className="hover:text-brand-blue transition-colors">Courses</button></li>
              <li><button onClick={() => setCurrentPage('contact')} className="hover:text-brand-blue transition-colors">Contact Us</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Contact Info</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin className="mr-3 text-brand-blue shrink-0" size={18} />
                <span>Raja Enclave, #202, Bhagyanagar Colony, Hyderabad</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 text-brand-blue shrink-0" size={18} />
                <span>+91 8978911190</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 text-brand-blue shrink-0" size={18} />
                <span>info@activesofttech.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} ActiveSoftTech Training Institute. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

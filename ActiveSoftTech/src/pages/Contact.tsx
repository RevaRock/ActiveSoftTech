import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-20">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Contact Us</h1>
            <p className="text-slate-600 max-w-2xl mx-auto">Have questions? We're here to help you choose the right path for your career.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-slate-50 p-8 rounded-3xl">
                <h3 className="text-xl font-bold text-slate-900 mb-8">Get in Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-brand-blue/5 p-3 rounded-xl mr-4">
                      <MapPin className="text-brand-blue" size={24} />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 mb-1">Address</p>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        Raja Enclave, #202, Bhagyanagar Colony,<br />
                        Opp: R.S. Brothers, Beside K.S. Baker’s,<br />
                        K.P.H.B. Colony, Hyderabad
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-brand-blue/5 p-3 rounded-xl mr-4">
                      <Phone className="text-brand-blue" size={24} />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 mb-1">Phone</p>
                      <p className="text-slate-600 text-sm">+91 8978911190</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-brand-blue/5 p-3 rounded-xl mr-4">
                      <Mail className="text-brand-blue" size={24} />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 mb-1">Email</p>
                      <p className="text-slate-600 text-sm">info@activesofttech.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900 p-8 rounded-3xl text-white">
                <h3 className="text-xl font-bold mb-4">Office Hours</h3>
                <div className="space-y-2 text-slate-400 text-sm">
                  <p className="flex justify-between"><span>Monday - Friday</span> <span>9:00 AM - 7:00 PM</span></p>
                  <p className="flex justify-between"><span>Saturday</span> <span>10:00 AM - 4:00 PM</span></p>
                  <p className="flex justify-between"><span>Sunday</span> <span>Closed</span></p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50">
                <h3 className="text-2xl font-bold text-slate-900 mb-8">Send us a Message</h3>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all"
                    />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-sm font-medium text-slate-700">Subject</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all">
                      <option>Course Inquiry</option>
                      <option>Placement Support</option>
                      <option>Corporate Training</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-sm font-medium text-slate-700">Message</label>
                    <textarea 
                      rows={4}
                      placeholder="How can we help you?"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all"
                    ></textarea>
                  </div>
                  <div className="md:col-span-2">
                    <button className="w-full md:w-auto px-10 py-4 bg-brand-blue text-white font-bold rounded-xl hover:bg-brand-blue/90 transition-all shadow-lg shadow-brand-blue/20">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

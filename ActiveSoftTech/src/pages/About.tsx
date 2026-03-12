import React from 'react';

const About = () => {
  return (
    <div className="pt-20">
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold text-slate-900 mb-6">About ActiveSoftTech</h1>
            <p className="text-xl text-slate-600">
              ActiveSoftTech is a premier software training institute dedicated to bridging the gap between academic learning and industry requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1000" 
                alt="Our Team" 
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h2>
                <p className="text-slate-600 leading-relaxed">
                  To provide high-quality, affordable, and accessible technology education that empowers individuals to achieve their career goals and contributes to the growth of the global tech ecosystem.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h2>
                <p className="text-slate-600 leading-relaxed">
                  To be the most trusted partner for tech talent development, recognized for our innovative teaching methodologies and the success of our graduates.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
                  <p className="text-3xl font-bold text-brand-blue mb-1">10+</p>
                  <p className="text-sm text-slate-500">Years Experience</p>
                </div>
                <div className="p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
                  <p className="text-3xl font-bold text-brand-blue mb-1">50+</p>
                  <p className="text-sm text-slate-500">Corporate Partners</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

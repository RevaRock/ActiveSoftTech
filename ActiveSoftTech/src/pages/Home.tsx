import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Users, Award, BookOpen, CheckCircle2 } from 'lucide-react';
import { Page } from '../types';

interface HomeProps {
  setCurrentPage: (p: Page) => void;
}

const Home = ({ setCurrentPage }: HomeProps) => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-slate-50 py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-brand-blue uppercase bg-brand-blue/10 rounded-full">
                Excellence in Tech Training
              </span>
              <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
                Master the Skills to <span className="text-brand-blue">Build the Future</span>
              </h1>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                Join ActiveSoftTech and transform your career with our industry-aligned software training programs. Learn from experts and get hands-on experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setCurrentPage('courses')}
                  className="px-8 py-4 bg-brand-blue text-white font-bold rounded-xl shadow-lg shadow-brand-blue/20 hover:bg-brand-blue/90 transition-all flex items-center justify-center"
                >
                  Explore Courses <ChevronRight className="ml-2" size={20} />
                </button>
                <button 
                  onClick={() => setCurrentPage('about')}
                  className="px-8 py-4 bg-white text-slate-900 font-bold rounded-xl border border-slate-200 hover:bg-slate-50 transition-all"
                >
                  Learn More
                </button>
              </div>
            </motion.div>
            <motion.div 
              className="mt-16 lg:mt-0 relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1000" 
                  alt="Training Session" 
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/20 to-transparent"></div>
              </div>
              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl hidden md:block border border-slate-100">
                <div className="flex items-center space-x-4">
                  <div className="bg-brand-blue/10 p-3 rounded-xl">
                    <Users className="text-brand-blue" size={24} />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-slate-900">2000+</p>
                    <p className="text-sm text-slate-500">Students Trained</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Choose ActiveSoftTech?</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">We provide more than just lessons; we provide a pathway to a successful career in technology.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Award className="text-brand-blue" size={32} />,
                title: "Expert Instructors",
                desc: "Learn from industry veterans with years of real-world development experience."
              },
              {
                icon: <BookOpen className="text-brand-blue" size={32} />,
                title: "Practical Curriculum",
                desc: "Our courses are designed around current industry demands and hands-on projects."
              },
              {
                icon: <CheckCircle2 className="text-brand-blue" size={32} />,
                title: "Placement Support",
                desc: "We help you prepare for interviews and connect with top hiring companies."
              }
            ].map((feature, idx) => (
              <div key={idx} className="p-8 rounded-2xl border border-slate-100 hover:border-brand-blue/20 hover:shadow-xl hover:shadow-brand-blue/5 transition-all group">
                <div className="mb-6 bg-slate-50 w-16 h-16 rounded-xl flex items-center justify-center group-hover:bg-brand-blue/5 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-blue rounded-3xl p-12 text-center relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Start Your Journey?</h2>
              <p className="text-blue-50 text-lg mb-10 max-w-2xl mx-auto">
                Enroll in our upcoming batches and take the first step towards becoming a software expert.
              </p>
              <button 
                onClick={() => setCurrentPage('contact')}
                className="px-10 py-4 bg-white text-brand-blue font-bold rounded-xl hover:bg-blue-50 transition-all inline-flex items-center"
              >
                Get in Touch <ChevronRight className="ml-2" size={20} />
              </button>
            </div>
            {/* Abstract Background Shapes */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-brand-blue/50 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-brand-blue/70 rounded-full blur-3xl opacity-50"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

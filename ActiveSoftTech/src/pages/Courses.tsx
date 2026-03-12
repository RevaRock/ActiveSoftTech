import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search } from 'lucide-react';
import { ALL_COURSES } from '../constants';

const Courses = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCourses = ALL_COURSES.filter(course => 
    course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="pt-20">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Our Professional Courses</h1>
            <p className="text-slate-600 max-w-2xl mx-auto mb-10">Choose from our wide range of specialized training programs designed to make you job-ready.</p>
            
            {/* Search Bar */}
            <div className="max-w-xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input 
                type="text" 
                placeholder="Search for a course (e.g. Java, Python, AWS...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all shadow-sm"
              />
            </div>
          </div>
          
          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course, idx) => (
                <motion.div 
                  key={idx}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all overflow-hidden flex flex-col"
                >
                  <div className="p-8 flex-grow">
                    <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-6">
                      {course.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{course.title}</h3>
                    <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                      {course.description}
                    </p>
                    <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                      <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                        {course.duration}
                      </div>
                      <div className="text-xs font-semibold text-brand-blue bg-brand-blue/5 px-2 py-1 rounded">
                        {course.level}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="bg-slate-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="text-slate-300" size={40} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">No courses found</h3>
              <p className="text-slate-500">Try searching for something else or browse our full list.</p>
              <button 
                onClick={() => setSearchQuery('')}
                className="mt-6 text-brand-blue font-semibold hover:underline"
              >
                Clear Search
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Courses;

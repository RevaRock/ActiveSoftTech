import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, 
  Code, 
  Mail, 
  Phone, 
  MapPin, 
  ChevronRight, 
  Users, 
  Award, 
  CheckCircle2,
  Menu,
  X,
  Github,
  Linkedin,
  Twitter,
  Cpu,
  Database,
  Globe,
  Smartphone,
  Search,
  Layers,
  Terminal,
  Cloud,
  Settings,
  Shield,
  Layout,
  Zap,
  Box,
  Server,
  Monitor
} from 'lucide-react';

// --- Types ---
type Page = 'home' | 'about' | 'courses' | 'contact';

// --- Components ---

const Navbar = ({ currentPage, setCurrentPage }: { currentPage: Page, setCurrentPage: (p: Page) => void }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems: { label: string, value: Page }[] = [
    { label: 'Home', value: 'home' },
    { label: 'About Us', value: 'about' },
    { label: 'Courses', value: 'courses' },
    { label: 'Contact Us', value: 'contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center cursor-pointer" onClick={() => setCurrentPage('home')}>
            <img 
              src="/logo.png" 
              alt="ActiveSoftTech Logo" 
              className="h-12 w-auto mr-3"
              onError={(e) => {
                // Fallback if logo.png is not found
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement?.querySelector('.fallback-logo')?.classList.remove('hidden');
              }}
            />
            <div className="fallback-logo hidden flex items-center">
              <div className="bg-brand-blue p-2 rounded-lg mr-3">
                <Code className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-slate-900">ActiveSoftTech</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => setCurrentPage(item.value)}
                className={`text-sm font-medium transition-colors hover:text-brand-blue ${
                  currentPage === item.value ? 'text-brand-blue' : 'text-slate-600'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-600">
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-black/5 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.value}
                  onClick={() => {
                    setCurrentPage(item.value);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left px-3 py-3 text-base font-medium rounded-md ${
                    currentPage === item.value ? 'bg-brand-blue/5 text-brand-blue' : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = ({ setCurrentPage }: { setCurrentPage: (p: Page) => void }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
              <img 
                src="/logo.png" 
                alt="ActiveSoftTech Logo" 
                className="h-10 w-auto mr-3 brightness-0 invert"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement?.querySelector('.fallback-footer-logo')?.classList.remove('hidden');
                }}
              />
              <div className="fallback-footer-logo hidden flex items-center">
                <div className="bg-blue-600 p-1.5 rounded mr-2">
                  <Code className="text-white w-5 h-5" />
                </div>
                <span className="text-xl font-bold text-white">ActiveSoftTech</span>
              </div>
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

const HomePage = ({ setCurrentPage }: { setCurrentPage: (p: Page) => void }) => {
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

const AboutPage = () => {
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

const CoursesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const allCourses = [
    {
      title: "Data Science",
      icon: <Database className="text-blue-600" />,
      duration: "4 Months",
      level: "Intermediate",
      description: "Master statistical analysis, machine learning algorithms, and data visualization using Python and R."
    },
    {
      title: "Hadoop",
      icon: <Box className="text-yellow-700" />,
      duration: "3 Months",
      level: "Advanced",
      description: "Learn big data processing with HDFS, MapReduce, Hive, and Pig in a distributed environment."
    },
    {
      title: "AWS",
      icon: <Cloud className="text-orange-500" />,
      duration: "3 Months",
      level: "Intermediate",
      description: "Comprehensive training on Amazon Web Services including EC2, S3, RDS, and Lambda functions."
    },
    {
      title: "DevOps",
      icon: <Settings className="text-emerald-600" />,
      duration: "4 Months",
      level: "Advanced",
      description: "Master CI/CD pipelines, Docker, Kubernetes, Jenkins, and infrastructure as code (Terraform)."
    },
    {
      title: "Salesforce",
      icon: <Cloud className="text-sky-400" />,
      duration: "3 Months",
      level: "Intermediate",
      description: "Learn Salesforce administration and development, including Apex programming and Lightning components."
    },
    {
      title: "Python",
      icon: <Terminal className="text-blue-500" />,
      duration: "2 Months",
      level: "Beginner",
      description: "Core Python programming from basics to advanced concepts like decorators and generators."
    },
    {
      title: "Selenium",
      icon: <Shield className="text-green-600" />,
      duration: "2 Months",
      level: "Intermediate",
      description: "Automated web testing using Selenium WebDriver with Java or Python integration."
    },
    {
      title: "C Language",
      icon: <Code className="text-slate-600" />,
      duration: "2 Months",
      level: "Beginner",
      description: "The foundation of programming. Learn memory management, pointers, and structural programming."
    },
    {
      title: "C++",
      icon: <Code className="text-blue-700" />,
      duration: "2 Months",
      level: "Beginner",
      description: "Object-oriented programming with C++, covering STL, templates, and advanced memory concepts."
    },
    {
      title: "Data Structure",
      icon: <Layers className="text-indigo-600" />,
      duration: "3 Months",
      level: "Intermediate",
      description: "Master algorithms and data structures like trees, graphs, heaps, and dynamic programming."
    },
    {
      title: "Core Java",
      icon: <Cpu className="text-red-600" />,
      duration: "2 Months",
      level: "Beginner",
      description: "Fundamental Java concepts including OOPS, multithreading, collections, and exception handling."
    },
    {
      title: "Advanced Java",
      icon: <Server className="text-red-700" />,
      duration: "3 Months",
      level: "Intermediate",
      description: "Learn J2EE technologies like Servlets, JSP, JDBC, and enterprise application development."
    },
    {
      title: "Spring",
      icon: <Zap className="text-green-500" />,
      duration: "2 Months",
      level: "Advanced",
      description: "Master the Spring Framework, Dependency Injection, Aspect-Oriented Programming, and Spring MVC."
    },
    {
      title: "Hibernate",
      icon: <Database className="text-amber-700" />,
      duration: "1 Month",
      level: "Advanced",
      description: "Learn Object-Relational Mapping (ORM) with Hibernate for efficient database interactions."
    },
    {
      title: "Web Services",
      icon: <Globe className="text-blue-400" />,
      duration: "2 Months",
      level: "Advanced",
      description: "Develop RESTful and SOAP web services for scalable and interoperable applications."
    },
    {
      title: "Struts",
      icon: <Box className="text-slate-500" />,
      duration: "2 Months",
      level: "Intermediate",
      description: "Learn the Struts framework for building enterprise-level Java web applications."
    },
    {
      title: "XML",
      icon: <Code className="text-orange-600" />,
      duration: "1 Month",
      level: "Beginner",
      description: "Master XML syntax, DTDs, XSDs, and parsing techniques for data exchange."
    },
    {
      title: "C#.NET",
      icon: <Monitor className="text-purple-600" />,
      duration: "3 Months",
      level: "Intermediate",
      description: "Develop robust applications using C# and the .NET framework for Windows and web."
    },
    {
      title: "ASP.NET",
      icon: <Globe className="text-blue-600" />,
      duration: "3 Months",
      level: "Intermediate",
      description: "Build dynamic websites and web applications using the ASP.NET framework."
    },
    {
      title: "SQL Server",
      icon: <Database className="text-red-500" />,
      duration: "2 Months",
      level: "Beginner",
      description: "Master Microsoft SQL Server for database management, T-SQL, and stored procedures."
    },
    {
      title: "Oracle",
      icon: <Database className="text-red-700" />,
      duration: "2 Months",
      level: "Beginner",
      description: "Learn Oracle Database administration, PL/SQL, and advanced database concepts."
    },
    {
      title: "Android",
      icon: <Smartphone className="text-green-500" />,
      duration: "4 Months",
      level: "Intermediate",
      description: "Develop native Android applications using Java/Kotlin and Android Studio."
    },
    {
      title: "iPhone",
      icon: <Smartphone className="text-slate-900" />,
      duration: "4 Months",
      level: "Intermediate",
      description: "Build iOS applications using Swift and Xcode with modern UI frameworks."
    },
    {
      title: "IoT",
      icon: <Cpu className="text-indigo-500" />,
      duration: "3 Months",
      level: "Intermediate",
      description: "Learn Internet of Things concepts, sensor integration, and hardware-software communication."
    },
    {
      title: "RPA",
      icon: <Settings className="text-slate-600" />,
      duration: "3 Months",
      level: "Intermediate",
      description: "Master Robotic Process Automation to automate repetitive business tasks efficiently."
    },
    {
      title: "Automation Anywhere",
      icon: <Zap className="text-orange-500" />,
      duration: "2 Months",
      level: "Advanced",
      description: "Specialized training in Automation Anywhere platform for enterprise-grade RPA."
    },
    {
      title: "Blue Prism",
      icon: <Box className="text-blue-800" />,
      duration: "2 Months",
      level: "Advanced",
      description: "Learn Blue Prism RPA tool for building scalable and secure digital workforces."
    },
    {
      title: "Spring Boot",
      icon: <Zap className="text-green-600" />,
      duration: "2 Months",
      level: "Advanced",
      description: "Build production-ready microservices quickly with Spring Boot and Spring Cloud."
    },
    {
      title: "CRT",
      icon: <Users className="text-emerald-600" />,
      duration: "2 Months",
      level: "Beginner",
      description: "Campus Recruitment Training covering aptitude, soft skills, and interview preparation."
    },
    {
      title: "Unix/Linux",
      icon: <Terminal className="text-slate-800" />,
      duration: "2 Months",
      level: "Beginner",
      description: "Master the command line, shell scripting, and system administration in Unix/Linux."
    },
    {
      title: "Digital Marketing",
      icon: <Globe className="text-pink-500" />,
      duration: "3 Months",
      level: "Beginner",
      description: "Learn SEO, SEM, Social Media Marketing, and Content Strategy for online growth."
    },
    {
      title: "PHP with MySQL",
      icon: <Code className="text-indigo-400" />,
      duration: "3 Months",
      level: "Intermediate",
      description: "Develop dynamic web applications using PHP and MySQL database integration."
    },
    {
      title: "ASP.NET MVC",
      icon: <Layout className="text-blue-500" />,
      duration: "3 Months",
      level: "Advanced",
      description: "Master the Model-View-Controller pattern for building scalable web applications in .NET."
    },
    {
      title: "Java Training",
      icon: <Cpu className="text-red-500" />,
      duration: "4 Months",
      level: "Beginner to Advanced",
      description: "A comprehensive Java track covering everything from basics to enterprise frameworks."
    },
    {
      title: "HTML5 CSS3",
      icon: <Layout className="text-orange-500" />,
      duration: "1 Month",
      level: "Beginner",
      description: "Master modern web layout techniques with HTML5 semantic tags and CSS3 styling."
    },
    {
      title: "HTML/JavaScript",
      icon: <Code className="text-yellow-500" />,
      duration: "2 Months",
      level: "Beginner",
      description: "Learn the core languages of the web to build interactive and dynamic user interfaces."
    },
    {
      title: "jQuery",
      icon: <Zap className="text-blue-400" />,
      duration: "1 Month",
      level: "Intermediate",
      description: "Simplify JavaScript development with jQuery for DOM manipulation and AJAX."
    },
    {
      title: "UI UX",
      icon: <Award className="text-purple-500" />,
      duration: "3 Months",
      level: "Beginner",
      description: "Master user interface and experience design principles with modern design tools."
    },
    {
      title: "Ui Technologies",
      icon: <Layout className="text-cyan-500" />,
      duration: "3 Months",
      level: "Intermediate",
      description: "Comprehensive training on modern frontend technologies and frameworks."
    },
    {
      title: "AngularJS",
      icon: <Code className="text-red-600" />,
      duration: "2 Months",
      level: "Intermediate",
      description: "Learn the original Angular framework for building structured web applications."
    },
    {
      title: "Angular 2-8",
      icon: <Code className="text-red-700" />,
      duration: "3 Months",
      level: "Advanced",
      description: "Master modern Angular versions (2 through 8) for building high-performance SPAs."
    },
    {
      title: "NodeJS",
      icon: <Server className="text-green-600" />,
      duration: "2 Months",
      level: "Intermediate",
      description: "Build scalable backend services using JavaScript on the server with Node.js."
    },
    {
      title: "ReactJS",
      icon: <Zap className="text-blue-500" />,
      duration: "2 Months",
      level: "Intermediate",
      description: "Master the most popular frontend library for building component-based user interfaces."
    },
    {
      title: "Artificial Intelligence",
      icon: <Cpu className="text-purple-700" />,
      duration: "5 Months",
      level: "Advanced",
      description: "Deep dive into neural networks, deep learning, and AI application development."
    },
    {
      title: "Apache Spark",
      icon: <Zap className="text-orange-600" />,
      duration: "3 Months",
      level: "Advanced",
      description: "Master fast and general-purpose cluster computing for big data processing."
    },
    {
      title: "Blockchain",
      icon: <Shield className="text-blue-900" />,
      duration: "4 Months",
      level: "Advanced",
      description: "Learn decentralized ledger technology, smart contracts, and crypto fundamentals."
    },
    {
      title: "Full Stack Web Development",
      icon: <Globe className="text-emerald-600" />,
      duration: "6 Months",
      level: "Beginner to Advanced",
      description: "The complete path to becoming a full-stack developer with MERN or MEAN stack."
    }
  ];

  const filteredCourses = allCourses.filter(course => 
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
                className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all shadow-sm"
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
                  <button className="w-full py-4 bg-slate-50 text-slate-900 font-semibold hover:bg-brand-blue hover:text-white transition-colors text-sm">
                    View Syllabus
                  </button>
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

const ContactPage = () => {
  return (
    <div className="pt-20">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Contact Us</h1>
            <p className="text-slate-600">Have questions? We're here to help you choose the right path.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
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
                <h4 className="font-bold mb-4">Office Hours</h4>
                <div className="space-y-2 text-sm text-slate-400">
                  <div className="flex justify-between">
                    <span>Mon - Sat</span>
                    <span>9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-100 shadow-sm">
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

// --- Main App ---

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <HomePage setCurrentPage={setCurrentPage} />;
      case 'about': return <AboutPage />;
      case 'courses': return <CoursesPage />;
      case 'contact': return <ContactPage />;
      default: return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}

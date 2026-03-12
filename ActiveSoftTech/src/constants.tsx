import React from 'react';
import { 
  Database, 
  Box, 
  Cloud, 
  Settings, 
  Terminal, 
  Shield, 
  Code, 
  Layers, 
  Cpu, 
  Server, 
  Zap, 
  Globe, 
  Monitor, 
  Smartphone, 
  Users, 
  Layout, 
  Award 
} from 'lucide-react';
import { Course } from './types';

export const ALL_COURSES: Course[] = [
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


'use client';

import { useState, useEffect, useRef } from 'react';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);
  
  const categories = ['All', 'Web Apps', 'E-commerce', 'Enterprise', 'Mobile'];
  
  const projects = [
    {
      title: "Enterprise Resource Planning System",
      category: "Enterprise",
      description: "Comprehensive ERP solution serving 500+ employees with modules for HR, Finance, and Operations.",
      image: "https://readdy.ai/api/search-image?query=Modern%20enterprise%20resource%20planning%20dashboard%20interface%2C%20clean%20business%20application%20design%2C%20data%20visualization%20charts%2C%20professional%20corporate%20software%20interface%2C%20blue%20and%20white%20color%20scheme%2C%20organized%20layout%20with%20multiple%20widgets%20and%20analytics&width=600&height=400&seq=erp-project&orientation=landscape",
      technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
      features: ["Real-time Analytics", "Role-based Access", "API Integration", "Cloud Deployment"],
      link: "#",
      github: "#"
    },
    {
      title: "E-commerce Platform",
      category: "E-commerce",
      description: "Full-featured online marketplace with vendor management, payment processing, and analytics.",
      image: "https://readdy.ai/api/search-image?query=Modern%20e-commerce%20website%20interface%2C%20clean%20online%20shopping%20platform%20design%2C%20product%20grid%20layout%2C%20shopping%20cart%20functionality%2C%20professional%20retail%20website%2C%20modern%20UI%20design%20with%20product%20showcases%20and%20navigation&width=600&height=400&seq=ecommerce-project&orientation=landscape",
      technologies: ["Next.js", "Stripe", "MongoDB", "Docker"],
      features: ["Multi-vendor Support", "Payment Gateway", "Inventory Management", "Mobile Responsive"],
      link: "#",
      github: "#"
    },
    {
      title: "Real-time Collaboration Tool",
      category: "Web Apps",
      description: "Team productivity platform with real-time editing, video calls, and project management features.",
      image: "https://readdy.ai/api/search-image?query=Real-time%20collaboration%20software%20interface%2C%20team%20productivity%20dashboard%2C%20modern%20workspace%20application%2C%20clean%20design%20with%20chat%20panels%20and%20document%20editing%2C%20professional%20team%20collaboration%20tool%20interface&width=600&height=400&seq=collaboration-project&orientation=landscape",
      technologies: ["Vue.js", "Socket.io", "Express", "Redis"],
      features: ["Real-time Editing", "Video Conferencing", "File Sharing", "Task Management"],
      link: "#",
      github: "#"
    },
    {
      title: "Financial Analytics Dashboard",
      category: "Enterprise",
      description: "Advanced financial reporting system with predictive analytics and automated reporting.",
      image: "https://readdy.ai/api/search-image?query=Financial%20analytics%20dashboard%20interface%2C%20data%20visualization%20charts%20and%20graphs%2C%20modern%20business%20intelligence%20platform%2C%20clean%20professional%20design%20with%20financial%20metrics%2C%20charts%20and%20KPI%20displays&width=600&height=400&seq=finance-project&orientation=landscape",
      technologies: ["React", "D3.js", "Python", "Machine Learning"],
      features: ["Predictive Analytics", "Automated Reports", "Data Visualization", "Export Capabilities"],
      link: "#",
      github: "#"
    },
    {
      title: "Healthcare Management System",
      category: "Enterprise",
      description: "Comprehensive patient management system for hospitals with appointment scheduling and records.",
      image: "https://readdy.ai/api/search-image?query=Healthcare%20management%20system%20interface%2C%20medical%20software%20dashboard%2C%20patient%20records%20management%2C%20clean%20hospital%20administration%20software%2C%20professional%20healthcare%20application%20design%20with%20medical%20charts%20and%20patient%20data&width=600&height=400&seq=healthcare-project&orientation=landscape",
      technologies: ["Angular", "Spring Boot", "MySQL", "Security"],
      features: ["Patient Records", "Appointment System", "Medical History", "HIPAA Compliant"],
      link: "#",
      github: "#"
    },
    {
      title: "Social Media Analytics Tool",
      category: "Web Apps",
      description: "Comprehensive social media monitoring and analytics platform for brands and agencies.",
      image: "https://readdy.ai/api/search-image?query=Social%20media%20analytics%20dashboard%20interface%2C%20social%20network%20monitoring%20tool%2C%20engagement%20metrics%20visualization%2C%20modern%20social%20media%20management%20platform%2C%20clean%20interface%20with%20charts%20and%20social%20media%20data&width=600&height=400&seq=social-project&orientation=landscape",
      technologies: ["React", "GraphQL", "Node.js", "APIs"],
      features: ["Multi-platform Integration", "Sentiment Analysis", "Automated Reporting", "Team Collaboration"],
      link: "#",
      github: "#"
    }
  ];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section ref={sectionRef} id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Showcasing innovative solutions that have driven business growth and user engagement
          </p>
          
          <div className={`flex flex-wrap justify-center gap-2 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            {categories.map((category, index) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 whitespace-nowrap cursor-pointer transform hover:scale-105 ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md'
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div key={index} className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{ transitionDelay: `${index * 100}ms` }}>
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover object-top group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium transform group-hover:scale-105 transition-transform duration-300">
                  {project.category}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors duration-200">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors duration-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 font-medium whitespace-nowrap cursor-pointer transform">
                    <div className="w-4 h-4 flex items-center justify-center mr-2 inline-flex">
                      <i className="ri-external-link-line"></i>
                    </div>
                    Live Demo
                  </button>
                  <button className="flex-1 border-2 border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:border-gray-400 hover:bg-gray-50 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 font-medium whitespace-nowrap cursor-pointer transform">
                    <div className="w-4 h-4 flex items-center justify-center mr-2 inline-flex">
                      <i className="ri-github-line"></i>
                    </div>
                    Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center mt-12 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <button className="bg-gray-100 text-gray-700 px-8 py-4 rounded-lg hover:bg-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 font-semibold whitespace-nowrap cursor-pointer transform">
            View All Projects
            <div className="w-4 h-4 flex items-center justify-center ml-2 inline-flex">
              <i className="ri-arrow-right-line"></i>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}

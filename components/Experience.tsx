
'use client';

import { useEffect, useState, useRef } from 'react';

export default function Experience() {
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

  const experiences = [
    {
      title: "Technology Lead",
      company: "TechCorp Solutions",
      period: "2020 - Present",
      description: "Lead a team of 8 developers, architect scalable solutions, and drive technical strategy for enterprise applications serving 100K+ users.",
      achievements: [
        "Reduced system downtime by 40% through improved architecture",
        "Led migration to microservices, improving scalability by 300%",
        "Mentored 12 junior developers into senior positions"
      ]
    },
    {
      title: "Senior Full Stack Developer",
      company: "Digital Innovations Ltd",
      period: "2018 - 2020",
      description: "Developed and maintained complex web applications using React, Node.js, and cloud technologies.",
      achievements: [
        "Built real-time collaboration platform used by 50K+ users",
        "Improved application performance by 60%",
        "Implemented CI/CD pipeline reducing deployment time by 80%"
      ]
    },
    {
      title: "Full Stack Developer",
      company: "StartupXYZ",
      period: "2016 - 2018",
      description: "Core team member responsible for building the company's main product from MVP to production.",
      achievements: [
        "Developed MVP that secured $2M in funding",
        "Built responsive web app serving 10K+ daily active users",
        "Integrated payment systems processing $500K+ monthly"
      ]
    },
    {
      title: "Frontend Developer",
      company: "WebCraft Agency",
      period: "2014 - 2016",
      description: "Created responsive websites and web applications for various clients across different industries.",
      achievements: [
        "Delivered 30+ client projects with 98% satisfaction rate",
        "Specialized in modern JavaScript frameworks",
        "Improved client websites' loading speed by average 50%"
      ]
    }
  ];

  return (
    <section ref={sectionRef} id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A decade of building innovative solutions and leading high-performing development teams
          </p>
        </div>

        <div className="relative">
          <div className={`absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600 transform transition-all duration-1000 delay-300 ${isVisible ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'}`} style={{ transformOrigin: 'top' }}></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-start transform transition-all duration-700 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`} style={{ transitionDelay: `${(index + 1) * 200}ms` }}>
                <div className={`absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg transform transition-all duration-500 hover:scale-125 ${isVisible ? 'scale-100' : 'scale-0'}`} style={{ transitionDelay: `${(index + 1) * 300}ms` }}></div>
                
                <div className="ml-20 bg-gray-50 rounded-2xl p-8 w-full hover:shadow-lg hover:-translate-y-1 transition-all duration-500 group">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors duration-300">{exp.title}</h3>
                      <p className="text-lg text-blue-600 font-semibold">{exp.company}</p>
                    </div>
                    <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mt-2 md:mt-0 whitespace-nowrap group-hover:bg-blue-200 transition-colors duration-300">
                      {exp.period}
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed">{exp.description}</p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Achievements:</h4>
                    {exp.achievements.map((achievement, idx) => (
                      <div key={idx} className={`flex items-start transform transition-all duration-500 hover:translate-x-2 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}`} style={{ transitionDelay: `${(index + 1) * 200 + idx * 100}ms` }}>
                        <div className="w-6 h-6 flex items-center justify-center mt-0.5 mr-3">
                          <i className="ri-check-line text-green-600 text-lg"></i>
                        </div>
                        <p className="text-gray-700">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

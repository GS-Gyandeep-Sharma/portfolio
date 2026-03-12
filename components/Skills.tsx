
'use client';

import { useEffect, useState, useRef } from 'react';

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const [animateProgress, setAnimateProgress] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setAnimateProgress(true), 500);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Frontend Technologies",
      icon: "ri-code-s-slash-line",
      color: "blue",
      skills: [
        { name: "React.js", level: 70 },
        { name: "TypeScript", level: 50 },
        { name: "Next.js", level: 50 },
        { name: "Angular.js", level: 60 },
        { name: "Vue.js", level: 10 },
        { name: "Tailwind CSS", level: 60 },
        { name: "JavaScript", level: 95 }
      ]
    },
    {
      title: "Backend Technologies",
      icon: "ri-server-line",
      color: "green",
      skills: [
        { name: "Cake PHP", level: 95 },
        { name: "Laravel", level: 80 },
        { name: "PHP", level: 95 },
        { name: "Python", level: 50 },
        { name: "MySQL", level: 95 },
        { name: "MongoDB", level: 70 },

        { name: "Node.js", level: 20 },
        { name: "REST APIs", level: 95 }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: "ri-cloud-line",
      color: "purple",
      skills: [
        { name: "AWS", level: 30 },
        { name: "Docker", level: 50 }
      ]
    },
    {
      title: "Leadership & Soft Skills",
      icon: "ri-team-line",
      color: "orange",
      skills: [
        { name: "Team Leadership", level: 92 },
        { name: "Project Management", level: 88 },
        { name: "Mentoring", level: 90 },
        { name: "Technical Architecture", level: 87 },
        { name: "Code Review", level: 95 }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: { bg: "bg-blue-100", text: "text-blue-600", progress: "bg-blue-600" },
      green: { bg: "bg-green-100", text: "text-green-600", progress: "bg-green-600" },
      purple: { bg: "bg-purple-100", text: "text-purple-600", progress: "bg-purple-600" },
      orange: { bg: "bg-orange-100", text: "text-orange-600", progress: "bg-orange-600" }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section ref={sectionRef} id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Expertise</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive skill set spanning frontend, backend, cloud technologies, and leadership
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const colorClasses = getColorClasses(category.color);
            return (
              <div key={index} className={`bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{ transitionDelay: `${index * 200}ms` }}>
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 flex items-center justify-center ${colorClasses.bg} rounded-lg mr-4 transform hover:scale-110 transition-transform duration-300`}>
                    <i className={`${category.icon} text-2xl ${colorClasses.text}`}></i>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, idx) => (
                    <div key={idx} className={`transform transition-all duration-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}`} style={{ transitionDelay: `${index * 200 + idx * 100}ms` }}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-gray-900">{skill.name}</span>
                        <span className="text-sm text-gray-600">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                        <div
                          className={`h-2 rounded-full ${colorClasses.progress} transition-all duration-1500 ease-out transform origin-left`}
                          style={{
                            width: animateProgress ? `${skill.level}%` : '0%',
                            transitionDelay: `${index * 200 + idx * 100 + 500}ms`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className={`mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{ transitionDelay: '800ms' }}>
          <h3 className="text-2xl font-bold mb-4">Always Learning</h3>
          <p className="text-lg opacity-90 mb-6">
            Currently exploring: AI/ML Integration, Web3 Technologies, and Advanced System Architecture
          </p>
          <div className="flex justify-center space-x-4">
            {['Machine Learning', 'Blockchain', 'Edge Computing'].map((tech, idx) => (
              <div key={idx} className={`bg-white/20 px-4 py-2 rounded-full text-sm whitespace-nowrap hover:bg-white/30 hover:scale-105 transition-all duration-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} style={{ transitionDelay: `${1000 + idx * 100}ms` }}>
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

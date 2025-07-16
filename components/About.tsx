
'use client';

import { useEffect, useState, useRef } from 'react';

export default function About() {
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

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About Me</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              I'm a passionate Technology Lead with over 10 years of experience in web development. 
              I specialize in building scalable applications, leading development teams, and 
              implementing modern technologies to solve complex business challenges.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              My journey started as a junior developer, and through continuous learning and 
              dedication, I've grown into a technical leader who bridges the gap between 
              business requirements and technical implementation.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: 'ri-trophy-fill', color: 'blue', title: '10+ Years', desc: 'Professional Experience', delay: 'delay-200' },
                { icon: 'ri-team-fill', color: 'green', title: '50+ Projects', desc: 'Successfully Delivered', delay: 'delay-300' },
                { icon: 'ri-settings-3-fill', color: 'purple', title: '15+ Technologies', desc: 'Mastered & Applied', delay: 'delay-400' },
                { icon: 'ri-user-star-fill', color: 'orange', title: 'Team Leader', desc: 'Managing 8+ Developers', delay: 'delay-500' }
              ].map((item, index) => (
                <div key={index} className={`bg-white p-6 rounded-lg shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-500 ${item.delay} transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                  <div className={`w-12 h-12 flex items-center justify-center bg-${item.color}-100 rounded-lg mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                    <i className={`${item.icon} text-2xl text-${item.color}-600`}></i>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className={`relative transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="relative overflow-hidden rounded-2xl">
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%20technology%20leader%20portrait%2C%20confident%20male%20developer%20in%20modern%20office%20setting%2C%20wearing%20casual%20business%20attire%2C%20clean%20background%2C%20natural%20lighting%2C%20approachable%20expression%2C%20contemporary%20workspace%20environment%2C%20high%20quality%20professional%20headshot%20style&width=600&height=800&seq=about-portrait&orientation=portrait"
                alt="Technology Lead Portrait"
                className="w-full rounded-2xl shadow-lg object-cover object-top hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className={`absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-2xl shadow-lg transform transition-all duration-700 delay-600 hover:scale-105 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
              <div className="w-8 h-8 flex items-center justify-center mb-2">
                <i className="ri-code-s-slash-fill text-2xl"></i>
              </div>
              <p className="font-semibold">Clean Code</p>
              <p className="text-sm opacity-90">Advocate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

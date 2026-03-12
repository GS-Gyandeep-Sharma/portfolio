
'use client';

import { useEffect, useState } from 'react';
import banner from '../public/img/banner.png';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform transition-transform duration-1000 hover:scale-105"
        style={{
          backgroundImage: `url('${banner.src}')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <div className={`max-w-2xl transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <span className={`block transition-all duration-700 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
              Associate Technology Manager &
            </span>
            <span className={`block text-blue-600 transition-all duration-700 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
              Web Developer
            </span>
          </h1>
          <p className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wider bg-cyan-800/70 text-cyan-400 border border-cyan-400/20`}><span className="bg-green-500 rounded-full w-2 h-2 inline-block mr-2"></span> AVAILABLE FOR OPPORTUNITIES</p>
          <p className={`text-xl text-gray-700 mb-8 leading-relaxed transition-all duration-700 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            Transforming ideas into scalable digital solutions with 10+ years of experience
            in full-stack development, team leadership, and cutting-edge technologies.
          </p>

          <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <a href='#projects' className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 font-semibold whitespace-nowrap cursor-pointer transform">
              View My Work
            </a>
            <a href="../Gyandeep-Sharma-Resume.pdf" download={"Gyandeep-Sharma-Resume.pdf"} className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-gray-400 hover:bg-gray-50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 font-semibold whitespace-nowrap cursor-pointer transform">
              Download Resume
            </a>
          </div>

          <div className={`flex items-center gap-6 mt-12 transition-all duration-700 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="w-8 h-8 flex items-center justify-center cursor-pointer transform hover:scale-125 transition-transform duration-300">
              <a href='https://github.com/gs-gyandeep-sharma' target='_blank'>
                <i className="ri-github-fill text-2xl text-gray-600 hover:text-gray-900 transition-colors"></i>
              </a>
            </div>
            <div className="w-8 h-8 flex items-center justify-center cursor-pointer transform hover:scale-125 transition-transform duration-300">
              <a href='https://www.linkedin.com/in/gyandeepsharma/' target='_blank'>
                <i className="ri-linkedin-fill text-2xl text-gray-600 hover:text-blue-600 transition-colors"></i>
              </a>
            </div>
            <div className="w-8 h-8 flex items-center justify-center cursor-pointer transform hover:scale-125 transition-transform duration-300">
              <a href='https://stackoverflow.com/users/4057622/gyandeep-sharma' target='_blank'>
                <i className="ri-stack-overflow-line text-2xl text-gray-600 hover:text-gray-900 transition-colors"></i>
              </a>
            </div>

            <div className="w-8 h-8 flex items-center justify-center cursor-pointer transform hover:scale-125 transition-transform duration-300">
              <a href='mailto:gsgyandeepsharma@gmail.com' target='_blank'>
                <i className="ri-mail-fill text-2xl text-gray-600 hover:text-red-500 transition-colors"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Animated scroll indicator */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

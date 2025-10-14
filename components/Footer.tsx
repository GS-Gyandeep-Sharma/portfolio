'use client';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Gyandeep Sharma</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Associate Technology Manager passionate about building scalable solutions and leading 
              high-performing development teams. Always ready to tackle new challenges 
              and drive innovation.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-700 transition-colors">
                <i className="ri-github-fill text-lg"></i>
              </div>
              <div className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-lg cursor-pointer hover:bg-blue-600 transition-colors">
                <i className="ri-linkedin-fill text-lg"></i>
              </div>
              <div className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-lg cursor-pointer hover:bg-red-500 transition-colors">
                <i className="ri-mail-fill text-lg"></i>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-white transition-colors cursor-pointer">About</a></li>
              <li><a href="#experience" className="hover:text-white transition-colors cursor-pointer">Experience</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors cursor-pointer">Projects</a></li>
              <li><a href="#skills" className="hover:text-white transition-colors cursor-pointer">Skills</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors cursor-pointer">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Web Development</li>
              <li>Technical Leadership</li>
              <li>System Architecture</li>
              <li>Team Mentoring</li>
              <li>Code Review</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Gyandeep Sharma. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
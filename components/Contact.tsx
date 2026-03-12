
'use client';

import { log } from 'console';
import { link } from 'fs';
import { useState, useEffect, useRef } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const response = await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    if (data.code == 200) {
      setIsSubmitting(false);
      setSubmitStatus('Thank you for your message! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
    else {
      setSubmitStatus(data.error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section ref={sectionRef} id="contact" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Let's Work Together</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to bring your next project to life? Let's discuss how we can create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              I'm always interested in hearing about new opportunities, especially ambitious
              or large-scale projects. Whether you're a company looking to hire, or you're a
              founder looking to bring your vision to life, I'd love to hear from you.
            </p>

            <div className="space-y-6">
              {[
                { icon: 'ri-mail-line', color: 'blue', title: 'Email', info: 'gsgyandeepsharma@gmail.com' },
                //{ icon: 'ri-phone-line', color: 'green', title: 'Phone', info: '+1 (555) 123-4567' },
                { icon: 'ri-map-pin-line', color: 'purple', title: 'Location', info: 'Gurugram, Haryana' },
                { icon: 'ri-linkedin-line', color: 'orange', title: 'LinkedIn', info: 'https://www.linkedin.com/in/gyandeepsharma/' }
              ].map((contact, index) => (
                <div key={index} className={`flex items-center transform transition-all duration-700 hover:translate-x-2 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}`} style={{ transitionDelay: `${(index + 1) * 200}ms` }}>
                  <div className={`w-12 h-12 flex items-center justify-center bg-${contact.color}-100 rounded-lg mr-4 hover:scale-110 transition-transform duration-300`}>
                    <i className={`${contact.icon} text-xl text-${contact.color}-600`}></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{contact.title}</h4>
                    <p className="text-gray-600">{contact.info}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className={`mt-8 pt-8 border-t border-gray-200 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
              <h4 className="font-semibold text-gray-900 mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {[
                  { icon: 'ri-github-fill', color: 'bg-gray-900 hover:bg-gray-800', link: 'https://github.com/gs-gyandeep-sharma' },
                  { icon: 'ri-linkedin-fill', color: 'bg-blue-600 hover:bg-blue-700', link: 'https://www.linkedin.com/in/gyandeepsharma/' },
                  { icon: 'ri-stack-overflow-line', color: 'bg-gray-600 hover:bg-gray-700', link: 'https://stackoverflow.com/users/4057622/gyandeep-sharma' }
                ].map((social, index) => (
                  <div key={index} className={`w-10 h-10 flex items-center justify-center ${social.color} rounded-lg cursor-pointer hover:scale-110 hover:-translate-y-1 transition-all duration-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} style={{ transitionDelay: `${800 + index * 100}ms` }}>
                    <a href={social.link} target='_blank'><i className={`${social.icon} text-white`}></i></a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`} style={{ transitionDelay: '400ms' }}>
            <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
              {[
                { name: 'name', label: 'Full Name *', type: 'text', placeholder: 'Your full name' },
                { name: 'email', label: 'Email Address *', type: 'email', placeholder: 'your.email@example.com' },
                { name: 'subject', label: 'Subject *', type: 'text', placeholder: 'Project collaboration, Job opportunity, etc.' }
              ].map((field, index) => (
                <div key={field.name} className={`transform transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} style={{ transitionDelay: `${600 + index * 100}ms` }}>
                  <label className="block text-sm font-semibold text-gray-900 mb-2"> {field.label} </label>
                  <input type={field.type} name={field.name} value={formData[field.name as keyof typeof formData]} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm hover:shadow-md transition-all duration-300" placeholder={field.placeholder} />
                </div>
              ))}

              <div className={`transform transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} style={{ transitionDelay: '900ms' }}>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Message *</label>
                <textarea name="message" value={formData.message} onChange={handleChange} required maxLength={500} rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm resize-none hover:shadow-md transition-all duration-300" placeholder="Tell me about your project, timeline, and requirements..."></textarea>
                <p className="text-xs text-gray-500 mt-1">{formData.message.length}/500 characters</p>
              </div>

              <button type="submit" disabled={isSubmitting} className={`w-full bg-blue-600 text-white py-4 px-6 rounded-lg hover:bg-blue-700 hover:shadow-lg hover:-translate-y-1 disabled:bg-blue-400 transition-all duration-300 font-semibold whitespace-nowrap cursor-pointer transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} style={{ transitionDelay: '1000ms' }}>
                {isSubmitting ? (<><div className="w-4 h-4 flex items-center justify-center mr-2 inline-flex"><i className="ri-loader-4-line animate-spin"></i></div>Sending...</>) : (<>Send Message<div className="w-4 h-4 flex items-center justify-center ml-2 inline-flex"><i className="ri-send-plane-line"></i></div></>)}
              </button>

              {submitStatus && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 animate-fade-in">
                  <div className="flex items-center">
                    <div className="w-5 h-5 flex items-center justify-center mr-3">
                      <i className="ri-check-line text-green-600"></i>
                    </div>
                    <p className="text-green-800">{submitStatus}</p>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section >
  );
}

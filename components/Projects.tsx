
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
      title: "Spotlight",
      category: "Web Apps",
      description: "Use to advertise your business or product on different social media",
      image: "https://readdy.ai/api/search-image?query=Modern%20enterprise%20resource%20planning%20dashboard%20interface%2C%20clean%20business%20application%20design%2C%20data%20visualization%20charts%2C%20professional%20corporate%20software%20interface%2C%20blue%20and%20white%20color%20scheme%2C%20organized%20layout%20with%20multiple%20widgets%20and%20analytics&width=600&height=400&seq=erp-project&orientation=landscape",
      technologies: ["Cake PHP"," Javascript","HTML", "MySQL", "CSS", "Jquery", "Google Ads API", "Facebook Business API", "Google My Business API", "Python"],
      features: ["Real-time Analytics", "Role-based Access", "API Integration", "Social Media Advertising", "Social Media Management","Bulk Upload","Payment Gateway"],
      link: "https://myspotlight.co/",
    },
    {
      title: "Indian Oil Dashboard",
      category: "Web Apps",
      description: "Dashboard to manage the Indian Oil Corporation's assets.",
      image: "https://readdy.ai/api/search-image?query=Modern%20e-commerce%20website%20interface%2C%20clean%20online%20shopping%20platform%20design%2C%20product%20grid%20layout%2C%20shopping%20cart%20functionality%2C%20professional%20retail%20website%2C%20modern%20UI%20design%20with%20product%20showcases%20and%20navigation&width=600&height=400&seq=ecommerce-project&orientation=landscape",
      technologies: ["Laravel", "HTML", "CSS", "MySQL", "JavaScript", "JQuery", "Push APIs"],
      features: ["Review Management"],
    },
    {
      title: "Local Monitor",
      category: "Web Apps",
      description: "This product used to rank your business with near by same category business.",
      image: "https://readdy.ai/api/search-image?query=Real-time%20collaboration%20software%20interface%2C%20team%20productivity%20dashboard%2C%20modern%20workspace%20application%2C%20clean%20design%20with%20chat%20panels%20and%20document%20editing%2C%20professional%20team%20collaboration%20tool%20interface&width=600&height=400&seq=collaboration-project&orientation=landscape",
      technologies: ["Laravel", "HTML", "CSS", "Javascript", "Jquery", "Google Place API","MySQL"],
      features: ["Location Targeting", "Ranking Business"],
      link: "https://local.myspotlight.co/",
    },
    {
      title: "Singleinterface",
      category: "Web Apps",
      description: "SingleInterface is an AI Retail Tech platform that helps multi-location businesses, like retail chains and banks.",
      image: "https://readdy.ai/api/search-image?query=Financial%20analytics%20dashboard%20interface%2C%20data%20visualization%20charts%20and%20graphs%2C%20modern%20business%20intelligence%20platform%2C%20clean%20professional%20design%20with%20financial%20metrics%2C%20charts%20and%20KPI%20displays&width=600&height=400&seq=finance-project&orientation=landscape",
      technologies: ["CakePHP","MySQL","HTML","CSS","JavaScript","jQuery"],
      features: ["Presence AI","Reviews AI","Engagement AI","Campaigns AI","Insights AI","Hyperlocal Ads","Transaction Management","Reputation Management","Local SEO Optimization"],
      link: "https://www.singleinterface.com/"
    },
    {
      title: "Client Landing Pages (Spotlight)",
      category: "Landing Pages",
      description: "These are highly focused, standalone web pages created specifically for a marketing or advertising campaign.",
      image: "https://readdy.ai/api/search-image?query=Healthcare%20management%20system%20interface%2C%20medical%20software%20dashboard%2C%20patient%20records%20management%2C%20clean%20hospital%20administration%20software%2C%20professional%20healthcare%20application%20design%20with%20medical%20charts%20and%20patient%20data&width=600&height=400&seq=healthcare-project&orientation=landscape",
      technologies: ["CakePHP","MySQL","HTML","CSS","JavaScript","jQuery"],
      features: ["Single, clear goal for the visitor.","No navigation menu.","Strong headline that aligns with the ad copy.","Mobile-friendly design."],
    },
    {
      title: "Call API",
      category: "Rest API",
      description: "Use to get call leads from different providers",
      image: "https://readdy.ai/api/search-image?query=Social%20media%20analytics%20dashboard%20interface%2C%20social%20network%20monitoring%20tool%2C%20engagement%20metrics%20visualization%2C%20modern%20social%20media%20management%20platform%2C%20clean%20interface%20with%20charts%20and%20social%20media%20data&width=600&height=400&seq=social-project&orientation=landscape",
      technologies: ["Core PHP","MySQL","CURL"],
      features: ["REST API"],
    },
    {
      title: "Mercury Solutions",
      category: "Web Apps",
      description: "This official website of Mercury Solutions Limited. Company provide various courses of Microsoft, VMware, Oracle etc. to customers. Site is fully based on E-Commerce phenomena. Customers can add course in there cart, pay for that and get certified. This project is running currently. Right now I’m working on chat module of this project.",
      image: "https://readdy.ai/api/search-image?query=Social%20media%20analytics%20dashboard%20interface%2C%20social%20network%20monitoring%20tool%2C%20engagement%20metrics%20visualization%2C%20modern%20social%20media%20management%20platform%2C%20clean%20interface%20with%20charts%20and%20social%20media%20data&width=600&height=400&seq=social-project&orientation=landscape",
      technologies: ["Cake PHP","MySQL","JavaScript","jQuery","HTML","CSS"],
      features: ["Training courses","Certifications","Live Virtual Training","On-demand training","Bootcamps"],
      link: "https://www.mercurysolutions.co/"
    },
    {
      title: "Oracle Official Training",
      category: "Web Apps",
      description: "Another Project of Mercury Solutions Limited. This project contain full information of courses of Oracle. Courses divide in categories. Customer can select course and enquire for batch.",
      image: "https://readdy.ai/api/search-image?query=Social%20media%20analytics%20dashboard%20interface%2C%20social%20network%20monitoring%20tool%2C%20engagement%20metrics%20visualization%2C%20modern%20social%20media%20management%20platform%2C%20clean%20interface%20with%20charts%20and%20social%20media%20data&width=600&height=400&seq=social-project&orientation=landscape",
      technologies: ["Cake PHP","MySQL","JavaScript","jQuery","HTML","CSS"],
      features: ["Oracle Training courses","Certifications","Bootcamps"],
    },
    {
      title: "Microsoft Official Training",
      category: "Web Apps",
      description: "Same as Oracle Official Training this project contain full information of courses of Microsoft. This site provide roadmap of Microsoft trainings. Customer can click on course code and all batches of that course will be shown below.",
      image: "https://readdy.ai/api/search-image?query=Social%20media%20analytics%20dashboard%20interface%2C%20social%20network%20monitoring%20tool%2C%20engagement%20metrics%20visualization%2C%20modern%20social%20media%20management%20platform%2C%20clean%20interface%20with%20charts%20and%20social%20media%20data&width=600&height=400&seq=social-project&orientation=landscape",
      technologies: ["Cake PHP","MySQL","JavaScript","jQuery","HTML","CSS"],
      features: ["Microsoft Training courses","Certifications","Live Virtual Training","On-demand training","Bootcamps"],
    },
    {
      title: "Book My Astrologer",
      category: "Web Apps",
      description: "A CMS based website and Application based online system to book Pandits / Astrologers / Pooja Items.",
      image: "https://readdy.ai/api/search-image?query=Social%20media%20analytics%20dashboard%20interface%2C%20social%20network%20monitoring%20tool%2C%20engagement%20metrics%20visualization%2C%20modern%20social%20media%20management%20platform%2C%20clean%20interface%20with%20charts%20and%20social%20media%20data&width=600&height=400&seq=social-project&orientation=landscape",
      technologies: ["Core PHP","Dreamweaver","Photoshop","JavaScript","Ajax","HTML","CSS","Bootstrap","MySQL"],
      features: ["Booking Pandits","Booking Astrologers","Booking Pooja Items","User Management","Profile Creation","Search and Filter Functionality","Secure Payment Gateway"],
    },
    {
      title: "e - Carwiz",
      category: "Web Apps",
      description: "CMS with CMS based website with Landing Page to completely add Services and Products",
      image: "https://readdy.ai/api/search-image?query=Social%20media%20analytics%20dashboard%20interface%2C%20social%20network%20monitoring%20tool%2C%20engagement%20metrics%20visualization%2C%20modern%20social%20media%20management%20platform%2C%20clean%20interface%20with%20charts%20and%20social%20media%20data&width=600&height=400&seq=social-project&orientation=landscape",
      technologies: ["Core PHP","Dreamweaver","Photoshop","JavaScript","Ajax","HTML","CSS","Bootstrap","MySQL"],
      features: ["Car Services","Products","Contact Forms","Dynamic Content","SEO tools","Analytics","User Management","E-commerce integration"],
    },
    {
      title: "Nurture Pods",
      category: "Web Apps",
      description: "A CMS with Website is based on appointment / booking for therapist for the Medical Center",
      image: "https://readdy.ai/api/search-image?query=Social%20media%20analytics%20dashboard%20interface%2C%20social%20network%20monitoring%20tool%2C%20engagement%20metrics%20visualization%2C%20modern%20social%20media%20management%20platform%2C%20clean%20interface%20with%20charts%20and%20social%20media%20data&width=600&height=400&seq=social-project&orientation=landscape",
      technologies: ["Core PHP","Dreamweaver","Photoshop","JavaScript","Ajax","HTML","CSS","Bootstrap","MySQL"],
      features: ["Online appointment booking","Therapist profiles","Medical history and notes"],
    },
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
                  { project.link ? <a href={project.link} className="text-center flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 font-medium whitespace-nowrap cursor-pointer transform">
                    <div className="w-4 h-4 flex items-center justify-center mr-2 inline-flex">
                      <i className="ri-external-link-line"></i>
                    </div>Live Demo
                  </a>:''}
                  {/* <button className="flex-1 border-2 border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:border-gray-400 hover:bg-gray-50 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 font-medium whitespace-nowrap cursor-pointer transform">
                    <div className="w-4 h-4 flex items-center justify-center mr-2 inline-flex">
                      <i className="ri-github-line"></i>
                    </div>
                    Code
                  </button> */}
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

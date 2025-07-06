import React, { useState, useEffect } from 'react';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [formStatus, setFormStatus] = useState(''); // State for form submission status

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          if (scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormStatus('Submitting...');

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    // Simulate API call for form submission
    try {
      // In a real application, you would send this data to a backend endpoint.
      // For this demonstration, we'll just simulate a delay.
      await new Promise(resolve => setTimeout(resolve, 1500));

      console.log('Form data submitted:', data);
      setFormStatus('Message sent successfully! (This is a simulation, no actual email was sent.)');
      event.target.reset(); // Clear the form
    } catch (error) {
      console.error('Form submission error:', error);
      setFormStatus('Failed to send message. Please try again later.');
    }
  };

  return (
    <div className="font-sans antialiased text-gray-800 bg-gray-50">
      {/* Tailwind CSS CDN */}
      <script src="https://cdn.tailwindcss.com"></script>
      {/* Font Awesome for icons */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"></link>
      {/* Inter font from Google Fonts */}
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet"></link>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-indigo-600">Forhad Hossain</div>
          <div className="hidden md:flex space-x-6">
            {['home', 'about', 'experience', 'skills', 'projects', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`text-gray-600 hover:text-indigo-600 transition-colors duration-300 capitalize ${
                  activeSection === section ? 'font-bold text-indigo-600' : ''
                }`}
              >
                {section}
              </button>
            ))}
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => alert('Mobile menu toggle not implemented in this version.')} className="text-gray-600 focus:outline-none">
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="pt-20">
        {/* Hero Section */}
        <section id="home" className="relative bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-20 md:py-32 flex items-center justify-center min-h-screen-75">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 animate-fade-in-up">
              Forhad Hossain
            </h1>
            <p className="text-xl md:text-2xl mb-8 animate-fade-in-up animation-delay-200">
              Senior Software Engineer | Mobile-Heavy Development
            </p>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-white text-indigo-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-indigo-100 transition-all duration-300 shadow-lg animate-fade-in-up animation-delay-400"
            >
              Get in Touch
            </button>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">About Me</h2>
            <div className="space-y-6 text-lg leading-relaxed text-gray-700">
              <p>
                With over 8 years of professional experience, I specialize in mobile-heavy development and management roles,
                focusing on building high-quality native Android applications using Java and Kotlin. My expertise extends
                to designing, developing, testing, and deploying robust mobile solutions.
              </p>
              <p>
                I have extensive experience collaborating with diverse international teams, contributing to critical projects
                like Motorola Australia's first responder mobile technology. I am skilled in end-to-end software lifecycle
                management, from gathering requirements and collaborating with stakeholders to building complex UIs and
                managing app delivery.
              </p>
              <p>
                My focus is on delivering customer-focused solutions, ensuring quality assurance through pre-release testing,
                troubleshooting, and application support. I possess an innovative problem-solving approach, a comprehensive
                understanding of software release processes, and the ability to apply UX/UI and design best practices for
                superior user experiences. I actively collaborate with product managers, UX designers, and other cross-functional
                stakeholders from diverse teams to ensure seamless integration and alignment with business goals. I take
                charge of the entire release cycle, from User Acceptance Testing (UAT) through to production deployment,
                meticulously handling eventing, thoroughly testing features, and confirming all event data for robust
                application performance and analytics.
              </p>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-16 md:py-24 bg-gray-100">
          <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Professional Experience</h2>
            <div className="relative border-l-4 border-indigo-300 pl-8">
              {/* Motorola Solutions Inc. */}
              <div className="mb-12 relative">
                <div className="absolute -left-10 top-0 w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center text-white">
                  <i className="fas fa-briefcase text-sm"></i>
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900">Lead Android Developer</h3>
                <p className="text-lg text-indigo-600 mb-2">Motorola Solutions Inc. | Penang, Malaysia</p>
                <p className="text-md text-gray-600 mb-4">November 2022 - Present</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Led the Android team and project initiatives, overseeing the end-to-end development lifecycle from initial concept to successful production deployment on the Play Store.</li>
                  <li>Ensured smooth and well-planned transitions for each product release, including comprehensive planning and execution of release strategies.</li>
                  <li>Collaborated extensively with product, UX, and other cross-functional teams to define requirements, ensure design alignment, and deliver cohesive solutions.</li>
                  <li>Took ownership of the release pipeline from User Acceptance Testing (UAT) to production, including rigorous feature testing, eventing validation, and post-release monitoring.</li>
                  <li>Spearheaded the design and implementation of Android and multiplatform solutions for Motorola, enhancing frontline officers' productivity, incident awareness, and safety.</li>
                  <li>Directed the transition from a monorepo to a multi-repo architecture using Git submodules, improving modularity and reducing code conflicts by 30%.</li>
                  <li>Optimized the CI/CD pipeline using Jenkins and Fastlane, reducing build and release cycle time by 25%.</li>
                  <li>Developed and maintained critical communication app features integrated with Android Auto and Google Assistant.</li>
                  <li>Enhanced software quality by addressing 100+ code smells through Lint and SonarQube, achieving a 5% improvement in code reliability.</li>
                  <li>Utilized Android Studio Profiler and LeakCanary to identify and eliminate memory leaks, increasing app stability and performance by 15%.</li>
                  <li>Contributed to the development of cross-platform desktop applications using Compose Multiplatform, extending mobile functionalities to desktop environments.</li>
                  <li>Participated in cross-platform initiatives, gaining exposure to iOS development workflows and contributing to unified mobile strategies.</li>
                </ul>
              </div>

              {/* Mindteck Software Malaysia Sdn Bhd */}
              <div className="mb-12 relative">
                <div className="absolute -left-10 top-0 w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center text-white">
                  <i className="fas fa-briefcase text-sm"></i>
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900">Software Developer (Android)</h3>
                <p className="text-lg text-indigo-600 mb-2">Mindteck Software Malaysia Sdn Bhd | Penang, Malaysia</p>
                <p className="text-md text-gray-600 mb-4">October 2021 - November 2022</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Collaborated with Motorola Solutions Inc. to develop a highly reliable public safety product.</li>
                  <li>Partnered with cross-functional teams across multiple countries to design and maintain a well-structured application.</li>
                  <li>Conducted user acceptance research and gathered actionable feedback to improve usability, reducing user-reported issues by 20%.</li>
                  <li>Designed and delivered update patches, modular components, and feature enhancements.</li>
                </ul>
              </div>

              {/* TFP Solutions Berhad */}
              <div className="mb-12 relative">
                <div className="absolute -left-10 top-0 w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center text-white">
                  <i className="fas fa-briefcase text-sm"></i>
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900">Senior Mobile Application Developer (Android & iOS)</h3>
                <p className="text-lg text-indigo-600 mb-2">TFP Solutions Berhad | Malaysia</p>
                <p className="text-md text-gray-600 mb-4">October 2020 - November 2021</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Managed a team of 3 developers to create innovative mobile apps for Android and iOS, leveraging advanced UI/UX strategies.</li>
                  <li>Partnered with UI/UX designers to implement intuitive and visually engaging interfaces using Material Design principles.</li>
                  <li>Diagnosed and resolved critical technical issues using tools like Firebase Crashlytics, achieving a 95% bug fix rate.</li>
                  <li>Mentored junior developers through bi-weekly knowledge-sharing sessions, boosting team productivity by 50%.</li>
                  <li>Conducted in-depth code reviews and offered actionable feedback, improving code quality by 30%.</li>
                </ul>
              </div>

              {/* Code Next Limited */}
              <div className="mb-12 relative">
                <div className="absolute -left-10 top-0 w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center text-white">
                  <i className="fas fa-briefcase text-sm"></i>
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900">Software Engineer (Android development)</h3>
                <p className="text-lg text-indigo-600 mb-2">Code Next Limited | Bangladesh</p>
                <p className="text-md text-gray-600 mb-4">April 2019 - September 2020</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Led a team of Android developers to deliver a B2B2C grocery supply chain application.</li>
                  <li>Designed and developed a demo application using Kotlin and RESTful APIs.</li>
                  <li>Implemented responsive and adaptive UI components, ensuring seamless performance across diverse Android devices.</li>
                  <li>Integrated RESTful APIs and third-party libraries such as Retrofit and Glide.</li>
                </ul>
              </div>

              {/* Invert Emo Tech */}
              <div className="mb-0 relative">
                <div className="absolute -left-10 top-0 w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center text-white">
                  <i className="fas fa-briefcase text-sm"></i>
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900">Software Engineer (Android development)</h3>
                <p className="text-lg text-indigo-600 mb-2">Invert Emo Tech | Bangladesh</p>
                <p className="text-md text-gray-600 mb-4">October 2015 - March 2019</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Designed and developed multi-vendor, delivery, and social applications, improving operational efficiency by 20%.</li>
                  <li>Implemented robust local data storage solutions with the Room Persistence Library, enhancing offline functionality.</li>
                  <li>Created visually appealing, user-friendly interfaces by implementing responsive UI designs aligned with Material Design guidelines, boosting user engagement by 20%.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Key Skills</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'Android development', 'Android Auto', 'Kotlin', 'Kotlin Multiplatform', 'CI/CD',
                'Unit test', 'UI test', 'App architecture', 'Memory management', 'Agile methodologies',
                'Android Studio Profiler', 'Java', 'RESTful APIs', 'Retrofit', 'Glide',
                'Room Persistence Library', 'Material Design', 'Firebase Crashlytics', 'Jenkins', 'Fastlane',
                'Lint', 'SonarQube', 'Git submodules', 'Google Assistant', 'iOS development', 'Swift', 'Compose Multiplatform Desktop'
              ].map((skill) => (
                <span key={skill} className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-md font-medium shadow-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 md:py-24 bg-gray-100">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Projects</h2>
            <div className="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">PSCore - Critical Communication System</h3>
              <p className="text-gray-700 leading-relaxed">
                Contributed to a multi-platform designed to enhance productivity, safety, and incident awareness for
                frontline officers. This system manages over 84,000 incidents monthly on 6,500 devices, demonstrating
                its critical role in mission-critical environments. The project involved developing high-performance
                mobile applications that integrate crucial operational information into a single, intuitive interface.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24 bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
          <div className="container mx-auto px-6 text-center max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Get in Touch</h2>
            <p className="text-lg md:text-xl mb-8">
              Feel free to reach out to me for collaborations, opportunities, or just a chat!
            </p>
            <div className="flex justify-center space-x-6 mt-10 mb-12">
              <a href="https://www.linkedin.com/in/forhad013" target="_blank" rel="noopener noreferrer" className="text-white hover:text-indigo-200 transition-colors duration-300">
                <i className="fab fa-linkedin text-4xl"></i>
              </a>
              <a href="https://github.com/Forhad013" target="_blank" rel="noopener noreferrer" className="text-white hover:text-indigo-200 transition-colors duration-300">
                <i className="fab fa-github text-4xl"></i>
              </a>
            </div>

            {/* Contact Form */}
            <div className="w-full md:w-1/2 mx-auto bg-white p-8 rounded-lg shadow-xl text-gray-800">
              <h3 className="text-2xl font-bold mb-6 text-center text-indigo-600">Send Me a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-left text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-left text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-left text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 font-semibold transition-colors duration-300"
                >
                  Send Message
                </button>
                {formStatus && (
                  <p className={`mt-4 text-center text-sm ${formStatus.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>
                    {formStatus}
                  </p>
                )}
              </form>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-8 text-center">
          <div className="container mx-auto px-6">
            <p>&copy; {new Date().getFullYear()} Forhad Hossain. All rights reserved.</p>
          </div>
        </footer>
      </main>

      {/* Custom CSS for animations */}
      <style>
        {`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }

        .min-h-screen-75 {
          min-height: 75vh; /* Adjust as needed for hero section height */
        }
        `}
      </style>
    </div>
  );
};

export default App;

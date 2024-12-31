import Image from 'next/image';
import Link from 'next/link';

const ApplySection = () => {
  const visaServices = [
    {
      title: 'Digital Tourist Visa',
      description:
        "Experience seamless travel documentation with our digital tourist visa platform. Ideal for exploring India's tourist destinations, heritage sites, and cultural events.",
      processingTime: '3-5 business days',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: 'Smart Business Visa',
      description:
        'Accelerate your business travel with our intelligent visa processing system. Perfect for entrepreneurs, corporate executives, and business professionals visiting India.',
      processingTime: '2-4 business days',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
          />
        </svg>
      ),
    },
    {
      title: 'E-Medical Visa',
      description:
        'Fast-track your medical travel plans with our electronic medical visa service. Designed for patients seeking advanced medical treatments and healthcare services in India.',
      processingTime: '24-48 hours',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
    },
    {
      title: 'Digital Research Visa',
      description:
        'Streamline your research journey with our digital visa solution. Tailored for academics, scientists, and researchers planning extended stays in India.',
      processingTime: '5-7 business days',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
  ];

  const digitalProcess = [
    {
      title: 'Smart Form Completion',
      description:
        'Our AI-powered form assistant helps you complete your application with real-time validation and intelligent suggestions for error-free submissions.',
      number: '01',
    },
    {
      title: 'Digital Document Upload',
      description:
        'Advanced document scanning technology ensures your uploads meet all requirements. Automatic quality checks and format conversion included.',
      number: '02',
    },
    {
      title: 'Automated Verification',
      description:
        'State-of-the-art verification system processes your application using machine learning algorithms for faster approval times.',
      number: '03',
    },
    {
      title: 'Digital Tracking',
      description:
        'Real-time application monitoring through our advanced tracking system. Get instant updates via our mobile app and smart notifications.',
      number: '04',
    },
  ];

  return (
    <div className="py-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-900 to-black text-white">
      {/* Visa Services Section */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-1 mb-8 border border-primary/20 rounded-full bg-gray-900/50 backdrop-blur-sm">
            <span className="px-4 py-1 text-sm font-medium text-primary">
              Smart Visa Processing
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Digital-First <span className="text-primary">Visa Solutions</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-3xl mx-auto">
            Leverage our cutting-edge digital platform for seamless visa
            processing. Experience the future of travel documentation with our
            automated systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {visaServices.map((service, index) => (
            <div
              key={index}
              className="group relative bg-gray-900/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-800 transition-all duration-300 hover:border-primary/50"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {service.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {service.processingTime}
                  </span>
                  <Link
                    href="/visa/step-one"
                    className="inline-flex items-center text-primary text-sm hover:text-white transition-colors duration-300"
                  >
                    Apply Online
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Digital Process Section */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 mt-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Automated <span className="text-primary">Application System</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-3xl mx-auto">
            Our intelligent visa processing system utilizes advanced technology
            to ensure a smooth, efficient, and error-free application experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {digitalProcess.map((step, index) => (
            <div key={index} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative p-6 bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800">
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-4">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm">{step.description}</p>
              </div>
              {index < digitalProcess.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 left-full w-full h-px bg-gradient-to-r from-primary/30 to-transparent transform -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            href="/visa/step-one"
            className="group inline-flex items-center justify-center"
          >
            <span className="relative inline-flex items-center justify-center px-8 py-4 font-medium tracking-wide text-white transition-all duration-300 transform hover:-translate-y-1">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary to-accent rounded-xl"></span>
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-accent to-primary rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              <span className="relative flex items-center text-lg">
                Start Digital Application
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ApplySection;
